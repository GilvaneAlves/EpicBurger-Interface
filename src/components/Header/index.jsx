import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";
import { ShoppingCartIcon, UserCircleIcon } from "@phosphor-icons/react";
import LogoImage from "../../assets/logo.png";

import {
    Container,
    LogoContainer,
    Navigation,
    HeaderLink,
    Options,
    Profile,
    LinkContainer
} from "./styles";

export function Header() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { userInfo, logout } = useUser();

    function handleLogout() {
        logout();
        navigate("/login");
    }

    return (
        <Container>
            {/* Logo + nome */}
            <LogoContainer to="/">
                <img src={LogoImage} alt="Épic Burger" />
                <h1>Épic Burger</h1>
            </LogoContainer>

            {/* Menu central */}
            <Navigation>
                <div>
                    <HeaderLink to="/" $isActive={pathname === "/"}>
                        Home
                    </HeaderLink>
                    <hr />
                    <HeaderLink to="/cardapio" $isActive={pathname === "/cardapio"}>
                        Cardápio
                    </HeaderLink>
                </div>
            </Navigation>

            {/* Opções à direita */}
            <Options>
                <Profile>
                    {userInfo?.name ? (
                        <div>
                            <UserCircleIcon size={24} />
                            <p>
                                Olá, <span>{userInfo.name}</span>
                            </p>
                            <button onClick={handleLogout}>Sair</button>
                        </div>
                    ) : (
                        <LinkContainer>
                            <HeaderLink to="/cadastro" $isActive={pathname === "/cadastro"}>
                                Criar Conta
                            </HeaderLink>
                            <hr />
                            <HeaderLink to="/login" $isActive={pathname === "/login"}>
                                Login
                            </HeaderLink>
                        </LinkContainer>
                    )}
                </Profile>

                {/* Carrinho */}
                <LinkContainer onClick={() => navigate("/carrinho")}>
                    <ShoppingCartIcon size={24} />
                    <span>Carrinho</span>
                </LinkContainer>
            </Options>
        </Container>
    );
}
