import { Outlet, Navigate } from 'react-router-dom';
import { SideNavAdmin } from "../../components/SideNavAdmin";


import { Container, Main, Section } from "./styles";

export function AdminLayout() {
    // Pega os dados do usuário no localStorage
    const userData = localStorage.getItem('devburger:userData');
    const { admin: isAdmin } = userData ? JSON.parse(userData) : { admin: false };

    return isAdmin ? (
        <Container>
            <SideNavAdmin />
            <Main>
                <Section>
                    <Outlet /> {/* Aqui é onde as rotas filhas serão renderizadas */}
                </Section>
            </Main>
        </Container>
    ) : (
        <Navigate to="/login" replace /> // Redireciona se não for admin
    );
}
