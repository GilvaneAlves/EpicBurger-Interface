import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Image } from "@phosphor-icons/react";
import ReactSelect from "react-select";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
    Container,
    Form,
    InputGroup,
    Label,
    Input,
    SubmitButton,
    ErrorMessage,
    LabelUpload,
    CheckboxGroup
} from "./styles";

import { api } from "../../../services/api";
import { selectStatusStyles } from "./selectStyles";

const schema = yup.object({
    name: yup.string().required("Nome obrigatório"),
    price: yup.number().positive("Preço inválido").required("Preço obrigatório"),
    category: yup.object().required("Categoria obrigatória"),
    file: yup
        .mixed()
        .test("fileSize", "O arquivo é muito grande", (value) => !value?.[0] || value[0].size <= 50000)
        .test("fileType", "Tipo de arquivo inválido", (value) => !value?.[0] || ["image/jpeg", "image/png"].includes(value[0].type)),
    offer: yup.boolean(),
});

export function EditProduct() {
    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);
    const location = useLocation();
    const product = location.state?.product;
    const navigate = useNavigate();

    const {
        register,
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: product?.name || "",
            price: product ? product.price / 100 : "",
            category: product?.category || null,
            offer: product?.offer || false,
        },
    });

    const watchFile = watch("file");

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

    useEffect(() => {
        if (product) {
            setValue("name", product.name);
            setValue("price", product.price / 100);
            setValue("category", product.category || null);
            setValue("offer", product.offer || false);
        }
    }, [product, setValue]);

    useEffect(() => {
        if (watchFile?.[0]) {
            setFileName(watchFile[0].name);
        }
    }, [watchFile]);

    if (!product) return <p>Produto não encontrado</p>;

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("price", data.price * 100);
        formData.append("category_id", data.category.id);
        formData.append("offer", data.offer);

        if (data.file?.[0]) {
            formData.append("file", data.file[0]);
        }

        await toast.promise(api.put(`/products/${product.id}`, formData), {
            pending: "Atualizando produto...",
            success: "Produto atualizado com sucesso!",
            error: "Erro ao atualizar o produto.",
        });

        setTimeout(() => {
            navigate("/admin/produtos");
        }, 2000);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome</Label>
                    <Input type="text" {...register("name")} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input type="number" step="0.01" {...register("price")} />
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
                                getOptionLabel={(cat) => cat.name}
                                getOptionValue={(cat) => cat.id}
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
                        <input type="file" accept="image/png, image/jpeg" {...register("file")} />
                        {fileName || "Upload do Produto"}
                    </LabelUpload>
                </InputGroup>

                <SubmitButton type="submit">Atualizar Produto</SubmitButton>
            </Form>
        </Container>
    );
}
