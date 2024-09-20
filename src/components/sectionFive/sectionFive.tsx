import { useRef } from "react";
import { tecnology } from "./imgTecnology";
import { ContainerSectionFive, RowSectionFive, ColumnTitle, ColumnGrid } from "@/styles";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import { useLocale } from "@/hooks/useLocale";
import parse from "html-react-parser";



const SectionFive = () => {
    const target = useRef(null);
    const { t } = useLocale();

    const fond = useParallax({
        speed: -8,
        targetElement: target.current ? target.current : undefined,
    });

    return (
        <ContainerSectionFive id="sectionfive">
            <RowSectionFive>
                <ColumnTitle>
                    <h3>{parse(t.tecnologias)}</h3>
                </ColumnTitle>
                <ColumnGrid ref={fond.ref}>
                    {
                        tecnology.map((items, key) => {
                            return (
                                <span key={key}>
                                    <Image src={items.img} alt="Imagen de tecnology" width={70} height={70} />
                                    <p>{items.name}</p>
                                </span>
                            )
                        })
                    }
                </ColumnGrid>
            </RowSectionFive>
        </ContainerSectionFive>


    )
}

export default SectionFive;


