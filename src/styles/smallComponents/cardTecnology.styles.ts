import styled from "styled-components";


export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: min(600px, 100%);
  height: auto;
  border: 1px solid #7A7A7A;
  border-radius: 12px;
  padding: 20px;
  box-sizing: border-box;
  button{
    width: 100%;
    height: 50px;
    font-size: 20px;
    box-sizing: border-box;
    border-radius: 12px;
    border: none;
    margin-top: 30px;
    color: #000;
    cursor: pointer;
  }
`;

export const Tecnology = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
  img{
    display: flex;
    width: 80px;
    height: 80px;
    border: 1px solid #7A7A7A;
    border-radius: 50%;
    position: relative;
  }
  ${({ theme }) => theme.breakpoints.up.medium}{
  flex-direction: row;
  };
`;

export const ContentTecnology = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 10px;
  h4{
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 24px;
    margin: 0;
    background: linear-gradient(91deg, rgba(0, 0, 0, 0.00) 0.3%, #000 17.46%, #595959 82.44%, rgba(0, 0, 0, 0.00) 100.12%);
    box-shadow: 7.37264px 8.1099px 13.27075px 0px rgba(0, 0, 0, 0.25);
    padding: 12px;
  }
  p{
    width: 100%;
    text-align: center;
    color: #fff;
    margin: 0;
  }
  ul{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0;
    padding-left: 20px;
    li{
      color: #fff;
    }
  }
`;