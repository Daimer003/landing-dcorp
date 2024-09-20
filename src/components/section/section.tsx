import { ContainerSection, Row, ContainerText, Card } from "@/styles/Section/section.styles";
import Image from "next/image";

interface Props {
    title: string,
    text: string,
    img: string,
    background: string,
    children: any
}

const Section = ({ title, text, img, background, children }: Props) => {
    return (
        <ContainerSection bg={background}>
            <Row>
                <ContainerText>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <Image src={img} alt="" width={160} height={160} />
                </ContainerText>
                <Card>{children}</Card>
            </Row>
        </ContainerSection>
    );
}

export default Section;
