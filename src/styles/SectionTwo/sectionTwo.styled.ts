import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


export const ContainerSectionTwo = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto; 
  position: relative;
  overflow: hidden;
  /* ${({ theme }) => theme.breakpoints.up.extraLarge}{
   height: 90vh; 
  }; */
`;
export const RowSectionTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  height: auto;
  gap: 40px;
  padding: 0px 20px 80px;
  h3{
    width: 100%;
    max-width: 950px;
    text-align: center;
    color: var(--color-text-white);
    font-weight: 300;
    font-size: 18px;
    margin: 0;
    margin-bottom: 40px;
    ${({ theme }) => theme.breakpoints.up.medium}{
      font-size: 22px;
    };
  }
  h4{
    font-weight: bold;
    background: linear-gradient(90deg, #000000 -15%, #FFFFFF 48.78%, #FFFFFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 34px;
    text-align: center;
    /* text-fill-color: transparent; */
    /* text-transform: uppercase; */
    margin: 0;
    ${({ theme }) => theme.breakpoints.up.medium}{
      font-size: 48px;
      margin: 0;
      text-align: center;
  };
  }
`

export const ContentSectionTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  ${({ theme }) => theme.breakpoints.up.large}{
    flex-direction: row;
  };
`;

export const Preview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: auto;
  gap: 20px;
  animation: ${fadeIn} .5s ease-in-out; 
  h3{
  color: var(--color-text);
  font-size: 1.6em;
  margin: 0;
  font-weight: 900;
  }
  p{
    color: #fff;
    margin: 0;
    font-size: 1.2em;
    text-align: center;
  }
`;

export const ContentPreview = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-image: url("/assets/imgcard/header-img1.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  ${({ theme }) => theme.breakpoints.up.large}{
    width:400px;
    height: 400px;
  }
  ;
`;

export const ImgBg = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  border: 1px solid #7A7A7A;
  border-radius: 50%;
  position: relative;
  padding: 10px;
  overflow: hidden;
  img{
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    border: 1px solid #fff;
    border-radius: 50%;
  }
`;

export const ContentButtom = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  height: auto;
  gap: 20px;
  `;

export const ContentCard = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  height: auto;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  position: relative;
  ${({ theme }) => theme.breakpoints.up.large}{
    grid-template-columns: repeat(2, 1fr);
  };
`

export const ContainerPreview = styled.div`
 display: flex;
 justify-content: center;
 width: 100%;
 height: auto;
 gap: 20px;
`;
