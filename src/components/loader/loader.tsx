import { ContainerLoader, RowLoader } from "@/styles/Loader/loader.styles"
import Image from "next/image"

type Prop = {
    active: boolean
}

export const Loader = ({ active }: Prop) => {
    return (
        <ContainerLoader active={active}>
            <RowLoader>
                <Image src="/assets/m-logo.png" alt="Imagen logo loader" width={50} height={50} priority />
                <span>Loading...</span>
            </RowLoader>
        </ContainerLoader>
    )
} 