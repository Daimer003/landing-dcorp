import styled from "styled-components";


export const ContainerSectionFive = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  background: var(--color-background-body-black);
  background-image: url("/assets/fondoTecnology.png");
  background-position: cover;
  background-repeat: repeat;
  background-position: center;
  position: relative;
  :before{
    display: flex;
    width: 100%;
    height: 100%;
    content: "";
    z-index: 0;
    background: rgb(0,0,0);
    background: linear-gradient(266deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9486388305322129) 74%);  
    position: absolute;
  }
  :before{
    display: flex;
    width: 100%;
    height: 100%;
    content: "";
    z-index: 0;
    backdrop-filter: grayscale(100%);
    position: absolute;
  }
`;
export const RowSectionFive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1500px;
  height: auto;
  z-index: 70;
  padding: 20px 20px;
  ${({ theme }) => theme.breakpoints.up.extraLarge}{
    padding: 60px 20px;
    box-sizing: border-box;
    flex-direction: row;
  };
`;
export const ColumnTitle = styled.div`
  display: flex;
  width: 100%;
  h3{
    width: 100%;
    color: var(--color-text-white);
    text-align: center;
    font-size: 34px;
    font-weight: bold;
    background: linear-gradient(90deg, #000000 -15%, #FFFFFF 48.78%, #FFFFFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    /* text-fill-color: transparent; */
    /* text-transform: uppercase; */
    ${({ theme }) => theme.breakpoints.up.large}{
      font-size: 48px;
  };
  }
`;
export const ColumnGrid = styled.div<{ ref: any }>`
  display: grid;
  justify-content: center;
  width: 100%;
  grid-template-columns: repeat(8, auto);
  grid-template-rows: auto;
  gap:10px;
  padding: 40px 0;
  box-sizing: border-box;
  span{
    grid-column: span 2;
    display: grid;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 60px;
    background-color: var(--color-bg-card);
    border-radius: 12px;
    gap: 0px;
    padding: 5px;
    transition: all .5s;
    cursor: pointer;
    :hover{
      transform: scale(1.05);
    }
    img{
      display: flex;
      margin: auto;
      width: 30px;
      height: 30px;
}
    /* :nth-child(4){
      grid-column: 2 / 4;
    } */
    :nth-child(5){
      grid-column: 2 / 4;
    }
    :nth-child(12){
      grid-column: 2 / 4;
    }
    /* :nth-child(10){
      grid-column: 4 / 6;
    }
    :nth-child(14){
      grid-column: 2 / 4;
    }
    :nth-child(15){
      grid-column: 4 / 6;
    } */
    p{
      color: var(--color-text-secondary);
      font-size: 14px;
      margin: 0;
      text-align: center;
    }
    ${({ theme }) => theme.breakpoints.up.medium}{
      width: 130px;
    height: 100px;
    gap:20px;
    padding: 10px;
    border-radius: 16px;
    p{
      font-size: 18px;
    }
img{
  width: 50px;
  height: 50px;
}
};
    ${({ theme }) => theme.breakpoints.up.large}{
      width: 160px;
    height: 130px;
    gap:20px;
    padding: 10px;
    border-radius: 18px;
    p{
      font-size: 18px;
    }
img{
  width: 70px;
  height: 70px;
}
};
  }
 
  ${({ theme }) => theme.breakpoints.up.extraLarge}{
    justify-content: end;
  };

`;