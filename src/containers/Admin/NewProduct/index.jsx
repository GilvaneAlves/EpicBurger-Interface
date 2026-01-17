import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { Image } from "@phosphor-icons/react";
import ReactSelect from "react-select";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
    Container,
    InputGroup,
    Label,
    LabelUpload,
    Form,
    SubmitButton,
    ErrorMessage,
    CheckboxGroup
} from "./styles";

import { api } from "../../../services/api";
import { selectStatusStyles } from "./selectStyles";

// Schema de validação
const schema = yup.object({
    name: yup.string().required("Nome obrigatório"),
    price: yup.number().positive("Preço inválido").required("Preço obrigatório"),
    category: yup.object().required("Categoria obrigatória"),
    file: yup.mixed()
        .test('required', 'Arquivo obrigatório', value => value && value.length > 0)
        .test('fileSize', 'O arquivo é muito grande', value => !value?.[0] || value[0].size <= 50000)
        .test('fileType', 'Tipo de arquivo inválido', value => !value?.[0] || ['image/jpeg', 'image/png'].includes(value[0].type)),
    offer: yup.boolean(),
});

export function NewProduct() {
    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    // Carrega categorias
    useEffect(() => {
        async function loadCategories() {
            try {
                const { data } = await api.get("/categories");
                setCategories(data);
            } catch (error) {
                console.error("Erro ao carregar categorias", error);
            }
        }
        loadCategories();
    }, []);

    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            offer: false,
        }
    });

    const watchFile = watch("file");

    // Atualiza nome do arquivo ao selecionar
    useEffect(() => {
        if (watchFile?.[0]) {
            setFileName(watchFile[0].name);
        }
    }, [watchFile]);

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("price", data.price * 100);
        formData.append("category_id", data.category.id);
        formData.append("offer", data.offer);

        if (data.file?.[0]) {
            formData.append("file", data.file[0]);
        }

        await toast.promise(api.post("/products", formData), {
            pending: 'Cadastrando produto...',
            success: 'Produto cadastrado com sucesso!',
            error: 'Erro ao cadastrar o produto.'
        });

        // Volta para a lista de produtos após 2 segundos
        setTimeout(() => {
            navigate("/admin/products");
        }, 2000);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome</Label>
                    <input type="text" {...register("name")} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <input type="number" step="0.01" {...register("price")} />
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Categoria</Label>
                    <Controller
                        name="category"
                        control={control}
                        render={({ field }) => (
                            <ReactSelect
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder="Selecione a categoria"
                                styles={selectStatusStyles}
                                menuPortalTarget={document.body}
                            />
                        )}
                    />
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <CheckboxGroup>
                        <input type="checkbox" id="offer" {...register("offer")} />
                        <Label htmlFor="offer">Produto em Oferta</Label>
                    </CheckboxGroup>
                </InputGroup>

                <InputGroup>
                    <LabelUpload>
                        <Image size={32} />
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            {...register("file")}
                        />
                        {fileName || "Upload do Produto"}
                    </LabelUpload>
                </InputGroup>

                <SubmitButton type="submit">Cadastrar Produto</SubmitButton>
            </Form>
        </Container>
    );
}
