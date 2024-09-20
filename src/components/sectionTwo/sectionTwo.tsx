import { useEffect, useState } from "react";
import {
    ContainerSectionTwo,
    RowSectionTwo,
    ContentCard,
    ContentSectionTwo,
    Preview,
    ContentPreview,
    ImgBg,
    ContainerPreview
} from "@/styles";
import Card from "../smallComponents/card";
import { data } from "./dataCard";
import { useLocale } from "@/hooks/useLocale";
import Image from "next/image";


interface Tarjeta {
    id: number,
    img: string,
    name: string,
    paragraph: string
}

const SectionTwo = () => {
    const [cards, setCards] = useState<Tarjeta[] | []>([]);
    const { t, locale } = useLocale();
    const [currentLocale, setCurrentLocale] = useState("es");
    const [id, setId] = useState(7)


    useEffect(() => {
        if (cards.length && locale == currentLocale)
            return;

        setCards(data(t))
        setCurrentLocale(locale)
    }, [cards, locale])


    const idCard = (id) => {
        setId(id);
    }

    return (
        <ContainerSectionTwo id="sectiontwo"  >
            <RowSectionTwo>
                <h4>{t.seccionTwo.title}</h4>
                <ContentSectionTwo >
                    <ContentCard >
                        {
                            cards?.map((items: any, key: any) => {
                                if (items.id != 7) {
                                    return (
                                        <Card
                                            id={items.id}
                                            key={key}
                                            img={items.img}
                                            imgheader={items.imgHeader}
                                            title={items.name}
                                            paragrapt={items.paragraph}
                                            position=""
                                            zIndex={1}
                                            onClick={idCard}
                                        />
                                    )
                                }
                            })
                        }
                    </ContentCard>
                    <ContainerPreview onClick={() => setId(7)}>
                        {
                            cards?.map((items: any, key: any) => {
                                if (items.id == id) {
                                    return (
                                        <Preview key={key}>
                                            <ContentPreview>
                                                <ImgBg>
                                                    <Image src={items.img} alt="" width={150} height={150} priority />
                                                </ImgBg>
                                            </ContentPreview>
                                            <h3>{items.name}</h3>
                                            <p>{items.paragraph}</p>
                                        </Preview>

                                    )
                                }
                            })
                        }
                    </ContainerPreview>

                </ContentSectionTwo>

            </RowSectionTwo>
        </ContainerSectionTwo>
    )
}

export default SectionTwo;