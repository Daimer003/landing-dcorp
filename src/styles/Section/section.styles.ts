import styled from "styled-components";


export const ContainerSection = styled.div<{ bg: string }>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
    :before{
    display: flex;
    width: 100%;
    height: 100%;
    content: "";
    z-index: 0;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9486388305322129) 44%);  
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
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: min(1600px, 100%);
  height: auto;
  margin: 80px 0;
  padding: 20px;
  gap: 20px;
  position: relative;
  z-index: 88;
  box-sizing: border-box;
  ${({ theme }) => theme.breakpoints.up.medium}{
    flex-direction: row;
  };
`;
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  img{
    display: block;
    width: 300px;
    height: 300px;
    border: 1px solid #7A7A7A;
    border-radius: 50%;
  }
  h3{
    color: #fff;
        font-weight: bold;
    text-align: center;
    background: linear-gradient(90deg, #000000 -15%, #FFFFFF 48.78%, #FFFFFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 34px;
      ${({ theme }) => theme.breakpoints.up.medium}{
    font-size: 48px;
    
  };
  }
  p{   
    color: #fff;
    font-size: 18px;
    width: min(500px, 100%);
    text-align: center;
  }
`;
export const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
`;