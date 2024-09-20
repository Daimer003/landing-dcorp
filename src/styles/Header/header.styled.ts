import styled from "styled-components";


export const RowHeader = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 900px;
  height: 100%;
  z-index: 80;
  position: relative;
  :after{
    display: flex;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    z-index: 999;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9262298669467787) 50%);
    bottom: 0;
  }
`;
export const Social = styled.div`
 display: none;
 flex-direction: column;
 position: absolute;
 z-index: 80;
 left: 0;
 margin: 0 40px;
 bottom: 41%;
 gap: 20px;
 a{
  color: var(--color-text-secondary);
  font-size: 26px;
 }
 ${({ theme }) => theme.breakpoints.up.medium}{
    display: flex;
  };
`;
export const ScrollDown = styled.span`
 display: none;
 position: absolute;
 z-index: 80;
 right: 0;
 height: 10px;
 margin: 0 0px;
 bottom: 50%;
 font-size: 18px;
 letter-spacing: 5px;
 -webkit-transform: rotate(-90deg); 
-moz-transform: rotate(-90deg);
 color: var(--color-text-secondary);
 ${({ theme }) => theme.breakpoints.up.medium}{
    display: flex;
  };
`;
export const ContentImg = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1800px;
  height: 100%;
  position: absolute;
  z-index: 30;
  img{
    display: block;
    width: 60%;
    height: auto;
  }

  ${({ theme }) => theme.breakpoints.up.medium}{
    img{
      width: 60%;
    }
  };
  ${({ theme }) => theme.breakpoints.up.extraLarge}{
    img{
      width: 100%;
    }
  };
`;

export const ContentText = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 85%;
  position: absolute;
  padding: 20px;
  box-sizing: border-box;
  z-index: 99;
  h1{
    width: 100%;
    height: 60px;
    color: #ffffff;
    font-size: 36px;
    margin: 0;
    font-weight: bold;
    background: linear-gradient(90deg, #000000 -15%, #FFFFFF 48.78%, #FFFFFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 34px;
    text-align: center;
  }
  p{
    width: min(600px, 100%);
    text-align: center;
    color: #ffffff;
    font-size: 18px;
  }
  ${({ theme }) => theme.breakpoints.up.extraLarge}{
    h1{
       font-size: 56px;
    }

  };
`;

