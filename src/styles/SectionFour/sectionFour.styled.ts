import styled from "styled-components";

export const ContainerSectionFour = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 20px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid var(--color-grey);
  border-radius: 8px;
  background-color: var(--color-bg-card);
  @media screen and (min-width: 768px){
    flex-direction: row;
    padding: 20px;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 20px;
  @media screen and (min-width: 768px){
    flex-direction: row;
  }
`;
export const RowSectionFour = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  height: auto;
  gap: 20px;
  padding: 80px 0;
  h3{
    color: var(--color-text-white);
    font-size: 34px;
    margin: 0;
    font-weight: bold;
    text-align: center;
    background: linear-gradient(90deg, #000000 -15%, #FFFFFF 48.78%, #FFFFFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    /* text-fill-color: transparent; */
    /* text-transform: uppercase; */
    ${({ theme }) => theme.breakpoints.up.medium}{
      font-size: 48px;
      text-align: start;
  };
  }
  p{
    width: 100%;
    max-width: 800px;
    text-align: center;
    color: var(--color-text-white);
    font-size: 20px;
    margin: 0;
    font-weight: 900;
  }
  span{
    text-align: center;
    color: var(--color-text-white);
    font-size: 18px;
    font-weight: 300;
  }
`;
export const ContentTeam = styled.div`
   display: grid;
   justify-content: space-between;
   grid-template-columns: repeat(2, 1fr);
   width: 100%;
  ${({ theme }) => theme.breakpoints.up.small}{
    grid-template-columns: repeat(2, 1fr);
  };
  ${({ theme }) => theme.breakpoints.up.medium}{
    grid-template-columns: repeat(3, 1fr);
  };
  ${({ theme }) => theme.breakpoints.up.large}{
    grid-template-columns: repeat(4, 1fr);
  };
  ${({ theme }) => theme.breakpoints.up.extraLarge}{
    grid-template-columns: repeat(6, 1fr);
  };
`;

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 40px;
  gap: 0;
  p{
    margin-top: 20px;    
    color: var(--color-text-white);
  }
  span{
    color: var(--color-text-white);
  }
`;

export const Img = styled.div`
   display: flex;
   width: 150px;
   height: 150px;
   border: 1px solid #7A7A7A;
   border-radius: 50%;
   overflow: hidden;
   padding: 10px;
   box-sizing: border-box;
   img{
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    border: 1px solid #fff;
   border-radius: 50%;
   }
   ${({ theme }) => theme.breakpoints.up.small}{
    width: 200px;
    height: 200px;
  };
`;