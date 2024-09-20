
import { useRef } from "react";
import { RowHeader, Container, ContentImg, ContentText, Social, ScrollDown } from "@/styles"
import Image from "next/image";
// import { FiChevronsDown } from "react-icons/fi";
import { useParallax } from "react-scroll-parallax";
import { GrGithub, GrInstagram, GrLinkedin } from "react-icons/gr";
import { useLocale } from "@/hooks/useLocale";



const Header = () => {
    const { t } = useLocale();
    const target = useRef(null);

    const personas = useParallax({
        speed: -20,
        targetElement: target.current ? target.current : undefined,
    });
    const text = useParallax({
        speed: 20,
        targetElement: target.current ? target.current : undefined,
    });
    return (
        <Container image="/assets/fondo.webp" id="header" ref={target}>
            <Social>
                <a href="#" rel="noreferer" target="_blank"><GrGithub /> </a>
                <a href="#" rel="noreferer" target="_blank"><GrInstagram /> </a>
                <a href="https://www.linkedin.com/company/dcorpweb3/mycompany/" rel="noreferer" target="_blanck"><GrLinkedin /> </a>
            </Social>
            <ScrollDown>Scroll down</ScrollDown>
            <RowHeader>
                <ContentText ref={text.ref}>
                    <h1>{t.header.title1}</h1>
                    <p>{t.header.text}</p>
                </ContentText>
                {/* <span><p>SCROLL DOWN</p><FiChevronsDown /></span> */}
                <ContentImg ref={personas.ref}>
                    <Image src="/assets/dev.webp" alt="Imagen" width={900} height={700} />
                </ContentImg>
            </RowHeader>
        </Container>

    )
}

export default Header;

