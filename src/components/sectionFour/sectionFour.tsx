import { ContainerSectionFour, RowSectionFour, Team, ContentTeam, Img } from "@/styles";
import Image from "next/image";
import { useLocale } from "@/hooks/useLocale";


const SectionFour = () => {
    const { t } = useLocale();
    return (
        <ContainerSectionFour id="sectionfour">
            <RowSectionFour>
                <h3>{t.team.title}</h3>
                <p>{t.team.paragrapth}</p>
                <span>{t.team.text}</span>
                <ContentTeam>

                    <Team>
                        <Img>
                            <Image src="/assets/team/juan.png" alt="Integrate del equipo" width={300} height={400} />
                        </Img>
                        <p>Juan Guzmán</p>
                        <span>CEO</span>
                    </Team>
                    <Team>
                        <Img>
                            <Image src="/assets/team/rogger.png" alt="Integrate del equipo" width={300} height={400} />
                        </Img>
                        <p>Rogger Jiménez </p>
                        <span>CTO</span>
                    </Team>
                    <Team>
                        <Img>
                            <Image src="/assets/team/diana.png" alt="Integrate del equipo" width={300} height={400} />
                        </Img>
                        <p>Diana Valencia</p>
                        <span>CFO</span>
                    </Team>
                    <Team>
                        <Img>
                            <Image src="/assets/team/camilo.png" alt="Integrate del equipo" width={300} height={400} />
                        </Img>
                        <p>Camilo Escobar</p>
                        <span>PM</span>
                    </Team>
                    <Team>
                        <Img>
                            <Image src="/assets/team/antonio2.png" alt="Integrate del equipo" width={300} height={400} />
                        </Img>
                        <p>Antonio Mejía</p>
                        <span>CMO</span>
                    </Team>

                    <Team>
                        <Img>
                            <Image src="/assets/team/karen.png" alt="Integrate del equipo" width={300} height={400} />
                        </Img>
                        <p>Karen Nieves</p>
                        <span>PR</span>
                    </Team>
                </ContentTeam>
            </RowSectionFour>
        </ContainerSectionFour>
    )
}

export default SectionFour;

