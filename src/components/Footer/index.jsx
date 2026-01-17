import { Container } from "./styles";

export function Footer() {
    return (
        <Container>
            <p>Desenvolvido por Gilvane Alves - 2025 - Todos Direitos Reservados</p>

            {/* Links opcionais, podem ser redes sociais ou e-mail */}
            <div className="footer-links">
                <a href="mailto:gilvane@example.com">Contato</a>
                <a href="https://www.linkedin.com/in/gilvane-alves-dias/" target="_blank">LinkedIn</a>
                <a href="https://github.com/GilvaneAlves" target="_blank">GitHub</a>
            </div>
        </Container>
    );
}
