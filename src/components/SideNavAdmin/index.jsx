import { navLinks } from "./navLinks";
import Logo from '../../assets/logo.png';
import { SignOutIcon } from "@phosphor-icons/react/dist/ssr";
import { useUser } from "../../hooks/UserContext";
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, NaviLinkContainer, NavLink, Footer } from "./styles";

export function SideNavAdmin() {
    const { logout } = useUser();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    function handleLogout() {
        logout();
        navigate("/login", { replace: true });
    }

    return (
        <Container>
            <img src={Logo} alt="DevBurger Logo" />

            <NaviLinkContainer>
                {navLinks.map((link) => (
                    <NavLink
                        key={link.id}
                        to={link.path}
                        $isActive={pathname === link.path}
                    >
                        {link.icon}
                        <span>{link.label}</span>
                    </NavLink>
                ))}
            </NaviLinkContainer>

            <Footer>
                <button onClick={handleLogout}>
                    <SignOutIcon size={24} />
                    <span>Sair</span>
                </button>
            </Footer>
        </Container>
    );
}
