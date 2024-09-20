import { useRef } from "react";
import { ContainerSectionThree, RowSectionThree, ColumnThree, Content } from "@/styles/SectionThree/sectionThree.styled"
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import { useLocale } from "@/hooks/useLocale";


const SectionThree = () => {
    const { t } = useLocale();
    const target = useRef(null);


    const fond2 = useParallax({
        speed: -2,
        targetElement: target.current ? target.current : undefined,
    });
    return (
        <ContainerSectionThree id="sectionthree" >
            <RowSectionThree>
                <ColumnThree>
                    <ul>
                        <li>{t.dcorp.item1}</li>
                        <li>{t.dcorp.item2}</li>
                        <li>{t.dcorp.item3}</li>
                        <li>{t.dcorp.item4}</li>
                        <li>{t.dcorp.item5}</li>
                        <li>{t.dcorp.item6}</li>
                        <li>{t.dcorp.item7}</li>
                        <li>{t.dcorp.item8}</li>
                        <li>{t.dcorp.item9}</li>
                        <Content ref={fond2.ref}>
                            <Image src="/assets/img-dcorp.png" alt="Imagen de la seccion Dcorp" width={400} height={400} />
                        </Content>
                    </ul>
                </ColumnThree>

            </RowSectionThree>
        </ContainerSectionThree>
    )
}

export default SectionThree;