import styled from "styled-components";

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

export const ContainerSectionProyects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  :before{
    display: flex;
    width: 100%;
    height: 100%;
    content: "";
    background-image: url("/assets/lineas.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(100);
    position: absolute;
    z-index: 0;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 300px;
  border: 1px solid #fff;
  border-radius: 50%;
  background: radial-gradient(white 40%, black, black);
  padding: 60px;
  box-sizing: border-box;
  ${({ theme }) => theme.breakpoints.up.small}{
    width: 600px;
    height: 600px;
  };
  ${({ theme }) => theme.breakpoints.up.medium}{
    width: 800px;
    height: 800px;
  };
  ${({ theme }) => theme.breakpoints.up.extraLarge}{
    width: 800px;
    height: 800px;
  };
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: min(1600px, 100%);
  height: auto;
  gap: 20px;
  ${({ theme }) => theme.breakpoints.up.large}{
     flex-direction: row;
  };
`;

export const C = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid #fff;
    border-radius: 50%;
`;

export const ContentProyects = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 180px;
  border: 2px solid white;
  border-radius: 50%;
  z-index: 999;
  position: relative;
  h4{
    color: azure;
    font-size: 20px;
    text-align: center;
    text-shadow: 1px 1px 2px black;
  }
  ${({ theme }) => theme.breakpoints.up.small}{
    width: 400px;
    height: 400px;
    h4{
    font-size: 48px;
  }
  };
  ${({ theme }) => theme.breakpoints.up.large}{
    width: 500px;
    height: 500px;
  };
`;

export const ContentImgs = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 13.335px;
    box-shadow: 0px 4.44495px 4.44495px 0px rgba(0, 0, 0, 0.1);
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    img{
      display: block;
      width: 100%;
      height: auto;
    }
    :nth-child(2n) {
      display: flex;
      position: absolute;
      right: 0;
     }
     :nth-child(3n) {
      display: flex;
      position: absolute;
      bottom: 0;
     }
     ${({ theme }) => theme.breakpoints.up.large}{
    width: 150px;
    height: 150px;
  };
  }
 
`;

export const Text = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: min(500px, 100%);
   height: auto;
   p{
    color: #fff;
    font-size: 18px;
    z-index: 9999;
    background-color: #000;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 12px;
    text-align: center;
    ${({ theme }) => theme.breakpoints.up.large}{
      text-align: start;
  };
   }
`;
