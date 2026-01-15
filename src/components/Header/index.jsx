import {
    Container,
    Navigation,
    HeaderLink,
    Options,
    Profile,
    LinkContainer
} from "./styles";

import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";
import { ShoppingCartIcon, UserCircleIcon } from "@phosphor-icons/react";

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
            {/* Navegação */}
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

            {/* Opções */}
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
