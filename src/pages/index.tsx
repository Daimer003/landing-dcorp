import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/responsive';
import Head from 'next/head';
import { HomeLayout } from '@/styles';
import Navbar from '@/components/navbar/navbar';
import Header from '@/components/header/header';
import SectionTwo from '@/components/sectionTwo/sectionTwo';
import SectionThree from '@/components/sectionThree/sectionThree';
import SectionFour from '@/components/sectionFour/sectionFour';
import Footer from '@/components/footer/footer';
import SectionFive from '@/components/sectionFive/sectionFive';
import { Loader } from '@/components/loader/loader';
import SectionProyects from '@/components/sectionProyects/sectionProyects';
import Section from '@/components/section/section';
import Image from 'next/image';
import { ContainerCard, Tecnology, ContentTecnology } from '@/styles/smallComponents/cardTecnology.styles';
import { useLocale } from '@/hooks/useLocale';

export default function Home() {
  const [playAnimation, setPlayAnimation] = useState(true);
  const { t } = useLocale();

  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        setPlayAnimation(false);
      }, 2000);
    };
    //Load the document
    if (document.readyState == "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Dcorp</title>
        <meta name="description" content="Somos desarrolladores de soluciones web3, blockchain, contratos inteligentes, y criptomonedas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <Loader active={playAnimation} />
        <HomeLayout >
          <Navbar />
          <Header />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionProyects />

          <Section
            title='Kryptopia'
            text={t.kryptopia.text}
            background=''
            img='/assets/img-kryptopia.webp'
          >
            <ContainerCard>
              <Tecnology>
                <Image src="/assets/k1.png" alt="" width={80} height={80} priority />
                <ContentTecnology>
                  <h4>{t.kryptopia.card.title1}</h4>
                  <p>{t.kryptopia.card.text2}</p>
                </ContentTecnology>
              </Tecnology>
              <Tecnology>
                <Image src="/assets/k2.png" alt="" width={80} height={80} priority />
                <ContentTecnology>
                  <h4>Blockchain</h4>
                  <p>Ethereum, Binance Smart Chain, Polygon, Tron, Bitcoin.</p>
                </ContentTecnology>
              </Tecnology>
              <Tecnology>
                <Image src="/assets/k3.png" alt="" width={80} height={80} priority />
                <ContentTecnology>
                  <h4>{t.kryptopia.card.title3}</h4>
                  <p>Node.js, Solidity, React, AWS.</p>
                </ContentTecnology>
              </Tecnology>
              <a href='https://kryptopia.io/' target='_black' rel='noreferer'><button>Read the project</button></a>
            </ContainerCard>
          </Section>

          <Section
            title='Plusvalica'
            text={t.plusvalica.text}
            background='/assets/fondo-dcorp.png'
            img='/assets/plusvalica.webp'
          >
            <ContainerCard>
              <Tecnology>
                <Image src="/assets/k1.png" alt="" width={80} height={80} priority />
                <ContentTecnology>
                  <h4>{t.kryptopia.card.title1}</h4>
                  <p>Node.js, Solidity, React, AWS.</p>
                </ContentTecnology>
              </Tecnology>
              <Tecnology>
                <Image src="/assets/k2.png" alt="" width={80} height={80} priority />
                <ContentTecnology>
                  <h4>Blockchain</h4>
                  <p>Binance Smart Chain.</p>
                </ContentTecnology>
              </Tecnology>
              <Tecnology>
                <Image src="/assets/k3.png" alt="" width={80} height={80} priority />
                <ContentTecnology>
                  <h4>{t.kryptopia.card.title3}</h4>
                  <ul>
                    <li>{t.plusvalica.card.li.li1}</li>
                    <li>{t.plusvalica.card.li.li2}</li>
                    <li>{t.plusvalica.card.li.li3}</li>
                    <li>{t.plusvalica.card.li.li4}</li>
                  </ul>
                </ContentTecnology>
              </Tecnology>
              <Tecnology>
                <Image src="/assets/p1.png" alt="" width={80} height={80} priority />
                <ContentTecnology>
                  <h4>Milestones</h4>
                  <p>{t.plusvalica.card.milestones.text1}</p>
                  <p>{t.plusvalica.card.milestones.text2}</p>
                </ContentTecnology>
              </Tecnology>
            </ContainerCard>
          </Section>

          <Section
            title='Landian'
            text={t.landia.text}
            background='/assets/lineas.png'
            img='/assets/landian.webp'
          >
            <ContainerCard>
              <Tecnology>
                <Image src="/assets/k1.png" alt="" width={80} height={80} priority />
                <ContentTecnology>
                  <h4>{t.kryptopia.card.title1}</h4>
                  <p>Node.js, Solidity, React, Unreal Engine 5, Unity.</p>
                </ContentTecnology>
              </Tecnology>
              <Tecnology>
                <Image src="/assets/k2.png" alt="" width={80} height={80} priority />
                <ContentTecnology>
                  <h4>Blockchain</h4>
                  <p>Ethereum, Binance Smart Chain, Polygon, Tron, Bitcoin.</p>
                </ContentTecnology>
              </Tecnology>
              <Tecnology>
                <Image src="/assets/k3.png" alt="" width={80} height={80} priority />
                <ContentTecnology>
                  <h4>{t.landia.card.title3}</h4>
                  <ul>
                    <li>{t.landia.card.li.li1}</li>
                    <li>{t.landia.card.li.li2}</li>
                    <li>{t.landia.card.li.li3}</li>
                    <li>{t.landia.card.li.li4}</li>
                  </ul>
                </ContentTecnology>
              </Tecnology>
              <Tecnology>
                <Image src="/assets/p1.png" alt="" width={80} height={80} priority />
                <ContentTecnology>
                  <h4>Milestones</h4>
                  <p>{t.landia.card.milestones.text1}</p>
                  <p>{t.landia.card.milestones.text2}</p>
                </ContentTecnology>
              </Tecnology>
            </ContainerCard>
          </Section>
          <Footer />
        </HomeLayout>
      </ThemeProvider>

    </>
  )
}
