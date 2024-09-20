import styled from "styled-components";


export const ContainerSectionThree = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto; 
  position: relative;
  background-image: url("/assets/fondo-dcorp.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 250px;
  :before{
    display: flex;
    width: 100%;
    height: 100%;
    content: "";
    z-index: 0;
    background: rgb(0,0,0);
    background: linear-gradient(266deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9486388305322129) 54%);  
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

export const RowSectionThree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  color: #fff;
  padding: 120px 20px;
  box-sizing: border-box;
  gap: 20px;
  z-index: 50;
  position: relative;
  p{
    width: 100%;
    max-width: 700px;
    font-size: 18px;
    margin: 0;
    line-height: 28px;
    text-align: start;
  }
`
export const ColumnThree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min(1600px, 100%);
  height: auto;
  gap: 20px;
  
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0;
    align-items: center;
    gap: 20px;
    border: 1px solid #7A7A7A;
    padding: 40px 20px;
    box-sizing: border-box;
    border-radius: 12px;
    position: relative;
    li{
      display: flex;
      width: min(450px, 100%);
      height: 100px;
      list-style: disc;
      line-height: 28px;
      font-size: 18px;
      background-color: var(--color-bg-card);
      padding: 10px;
      box-sizing: border-box;
      border-radius: 12px;
      list-style: none;
      position: relative;
      :before{
        display: flex;
        content: "";
        width: 10px;
        height: 10px;
        background-color: #fff;
        position: absolute;
        border-radius: 50%;
        left: -5px;
        top: -5px;
        border: 1px solid #fff; 
      }
      :after{
        display: flex;
        content: "";
        width: 16px;
        height: 16px;
        position: absolute;
        border-radius: 50%;
        left: -8px;
        top: -8px;
        border: 1px solid #fff;

        
    }
  }
`;

export const Content = styled.div<{ ref: any }>`
  display: flex;
  justify-content: center;
  position: absolute;
  border-radius: 50%;
  border: 1px solid #7A7A7A;
  width: min(300px, 100%);
  height: min(300px, 100%);
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
  z-index: 999;
  background-color: #000;
  top: -260px;
  img{
    display: block;
    width: min(300px, 100%);
    height: auto;
    border-radius: 50%;
    border: 1px solid #fff;
  }

`;