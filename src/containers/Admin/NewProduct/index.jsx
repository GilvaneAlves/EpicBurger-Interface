import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { Image } from "@phosphor-icons/react";
import ReactSelect from "react-select";

import {
    Container,
    ImputGroup,
    Label,
    LabelUpload,
    Form,
    SubmitButton,
    ErrorMessage
} from "./styles";

import { api } from "../../../services/api";

const schema = yup.object({
    name: yup.string().required("Nome obrigatório"),
    price: yup
        .number()
        .positive("Preço inválido")
        .required("Preço obrigatório"),
    category: yup.object().required("Categoria obrigatória"),
    file: yup.mixed(),
});

export function NewProduct() {
    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get("/categories");
            setCategories(data);
        }
        loadCategories();
    }, []);

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        console.log(data);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <ImputGroup>
                    <Label>Nome</Label>
                    <input type="text" {...register("name")} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </ImputGroup>

                <ImputGroup>
                    <Label>Preço</Label>
                    <input type="number" step="0.01" {...register("price")} />
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </ImputGroup>

                <ImputGroup>
                    <LabelUpload>
                        <Image size={32} />
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            {...register("file")}
                            onChange={(event) => {
                                setFileName(event.target.files[0]?.name || null);
                                register("file").onChange(event);
                            }}
                        />
                        {fileName || "Upload do Produto"}
                    </LabelUpload>
                </ImputGroup>

                <ImputGroup>
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
                                menuPortalTarget={document.body}
                            />
                        )}
                    />

                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </ImputGroup>

                <SubmitButton type="submit">
                    Cadastrar Produto
                </SubmitButton>
            </Form>
        </Container>
    );
}
