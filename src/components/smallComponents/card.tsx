import { ContainerCard, RowCard, Text, ContentImage1 } from "@/styles/smallComponents/card.styles";
import Image from "next/image";

interface Props {
  id: number,
  img: string,
  imgheader: string,
  title: string,
  paragrapt: string,
  position: string,
  zIndex: number,
  click?: boolean,
  onClick?: (id: number) => void
}

const Card = ({
  id,
  img,
  title,
  paragrapt,
  position,
  zIndex,
  click,
  onClick
}: Props) => {

  return (
    <ContainerCard
      position={position}
      onClick={() => onClick(id)}
      className={click ? "clicked" : ""}
      click={click}
    >
      <RowCard zIndex={zIndex}>
        <ContentImage1>
          <Image
            src={img}
            alt="Imagen card"
            width={200}
            height={200} />
        </ContentImage1>

        <Text>
          <h2>{title}</h2>
          <p>{paragrapt}</p>
        </Text>
      </RowCard>
    </ContainerCard>
  )
}
export default Card;