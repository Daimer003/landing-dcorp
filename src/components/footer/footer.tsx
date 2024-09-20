import { ContainerFooter, RowFooter, Foot, SocialFooter, Items } from "@/styles/Footer/footer.styled";
import { FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";
import Image from "next/image";

const Footer = () => {
    return (
        <ContainerFooter>
            <RowFooter>
                <div>
                    <Image src="/assets/logo.webp" alt="Logo Plusvalica" width={320} height={80} priority />
                    <SocialFooter>
                        <span>
                            <a href="https://www.linkedin.com/company/dcorpweb3/mycompany/" rel="noopener" >
                                <FiLinkedin />
                            </a></span>
                        <span><FiInstagram /></span>
                        <span><FiTwitter /></span>
                    </SocialFooter>
                    <p>Copyright 2023 - Dcorp.dev</p>
                </div>
                <Foot>
                    <Items>
                        <span>CONTACT</span>
                        <a href="#" rel="noreferer" target="_blank">Contacto</a>
                        <a href="#" rel="noreferer" target="_blank">Info</a>
                        <a href="#" rel="noreferer" target="_blank">Terms & Conditions</a>
                    </Items>
                    <Items>
                        <span>SITEMAP</span>
                        <a href="#header" rel="noreferer" >Home</a>
                        <a href="#sectionthree" rel="noreferer">Dcorp</a>
                        <a href="#sectiofour" rel="noreferer">Team</a>
                    </Items>
                </Foot>
            </RowFooter>
        </ContainerFooter>
    )
}

export default Footer;