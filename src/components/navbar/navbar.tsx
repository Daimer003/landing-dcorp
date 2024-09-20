import { useEffect, useState } from "react";
import Image from "next/image"
import { ContainerNavbar, RowNavbar, ContentIconMenu, Link, LogoNav } from "@/styles";
// import { FiAlignJustify } from "react-icons/fi";
import { useLocale } from "@/hooks/useLocale";

const Navbar = () => {
    const { setLocale, locale, t } = useLocale();
    const [activeLink, setActiveLink] = useState("header");
    const [activeId, setActiveId] = useState<any>(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])

    //Modo activo si el navbar es mayor a la variable.
    const listenToScroll = () => {
        let heightToShow = 60;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;
        if (winScroll > heightToShow) {
            !show && setShow(true);
        } else {
            setShow(false);
        }
    }

    const handleLinkClick = (link: string) => setActiveLink(link);
    const idiome = (i: any) => setLocale(i);

    useEffect(() => { setActiveId("header") }, [])

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const scrollPosition = window.pageYOffset;

            for (let i = 0; i < sections.length; i++) {
                const currentSection = sections[i];
                const sectionTop = currentSection.offsetTop;
                const sectionHeight = currentSection.offsetHeight;
                const sectionId = currentSection.getAttribute("id");

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionTop + sectionHeight
                ) {
                    setActiveId(sectionId);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <ContainerNavbar fixed={show}>
            <RowNavbar>
                <LogoNav>
                    <Image src="/assets/m-logo.png" alt="Logo Dcorp" width={145} height={34} />
                    <Image src="/assets/logo.webp" alt="Logo2 Dcorp" width={145} height={34} />
                </LogoNav>
                <ContentIconMenu>
                    <Link>
                        <a href="#header" rel="noreferer"><li
                            className={activeLink && activeId === "header" ? "active" : ""}
                            onClick={() => handleLinkClick("header")}
                        >{t.navbar.header}</li></a>
                        <a href="#sectiontwo" rel="noreferer"><li
                            className={activeLink && activeId === "sectiontwo" ? "active" : ""}
                            onClick={() => handleLinkClick("sectiontwo")}
                        >{t.navbar.sectionTwo}</li></a>
                        <a href="#sectionthree" rel="noreferer"><li
                            className={activeLink && activeId === "sectionthree" ? "active" : ""}
                            onClick={() => handleLinkClick("sectionthree")}
                        >{t.navbar.sectionThree}</li></a>
                        <a href="#sectionfour" rel="noreferer"><li
                            className={activeLink && activeId === "sectionfour" ? "active" : ""}
                            onClick={() => handleLinkClick("sectionfour")}
                        >{t.navbar.sectionFour}</li></a>
                        <a href="#sectionfive" rel="noreferer"><li
                            className={activeLink && activeId === "sectionfive" ? "active" : ""}
                            onClick={() => handleLinkClick("sectionfive")}
                        >{t.navbar.sectionFive}</li></a>
                    </Link>
                    {/* <FiAlignJustify /> */}
                    <a href="https://www.linkedin.com/company/dcorpweb3/mycompany/"
                        rel="noreferer" target="_blanck">
                        <button>{t.navbar.btnContacto}</button></a>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {
                            locale != "es" ? <span onClick={() => idiome("es")}>{locale}</span> :
                                <span onClick={() => idiome("en")}>{locale}</span>
                        }
                    </div>
                </ContentIconMenu>
            </RowNavbar>
        </ContainerNavbar>
    )
}
export default Navbar; 