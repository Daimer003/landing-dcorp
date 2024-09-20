import { useLocale } from "@/hooks/useLocale";
import {
    ContainerSectionProyects,
    Content,
    Row,
    ContentProyects,
    ContentImgs,
    C,
    Text
} from "@/styles/SectionProyects/sectionProyect.styles";
import Image from "next/image";

const SectionProyects = () => {
    const { t } = useLocale()

    return (
        <ContainerSectionProyects>
            <Row>
                <Content>
                    <C>
                        <ContentProyects>
                            <h4>{t.proyects.title}</h4>
                            <ContentImgs>
                                <div>
                                    <Image src="/assets/landian.svg" alt="" width={120} height={120} priority />
                                </div>
                                <div>
                                    <Image src="/assets/kryp.svg" alt="" width={120} height={120} priority />
                                </div>
                                <div>
                                    <Image src="/assets/plusvalica.svg" alt="" width={120} height={120} priority />
                                </div>
                            </ContentImgs>
                        </ContentProyects>
                    </C>
                </Content>
                <Text>
                    <p>{t.proyects.text}
                    </p>
                </Text>
            </Row>

        </ContainerSectionProyects>
    )
}

export default SectionProyects;

