import styled from "styled-components";


export const ContainerNavbar = styled.div<{ fixed: boolean }>`
  display: ${({ fixed }) => fixed ? "fixed" : "flex"};
  justify-content: center;
  width: 100%;
  height: auto;
  font-size: 16px;
  background: transparent;
  /* border-bottom: 1px solid var(--color-border); */
  position: fixed;
  z-index: 99999;
  font-size: 16px;
  background-color: ${({ fixed }) => fixed ? "#000" : "trasparent"};
  transition: all 0.5s;
`;
export const LogoNav = styled.div`
    img{
      display: none;
       :nth-child(1){
      display: flex;
      width: 30px;
    }
    }
   
    ${({ theme }) => theme.breakpoints.up.medium}{
    img{
      display: flex;
       :nth-child(1){
      display: none;
    }
    }
  };
`;
export const RowNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(1600px, 100%);
  height: auto;
  padding: 1em 2em;
  box-sizing: border-box;
  gap: 10px;
`;
export const ContentIconMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  color: var(--color-text);
  width: 100%;
  font-size: 34px;
  gap: 40px;
  cursor: pointer;
  span {
    color: var(--color-text-white);
    font-size: 22px;
    text-transform: uppercase;
  }
 a{
  display: flex;
  height: auto;
  text-decoration: none;
   button{
    width: 165px;
    height: 40px;
    border-radius: 6px;
    background-color: var(--color-bg-button);
    border: none;
    color: var(--color-text-black);
    font-size: 16px;
    padding: 5px;
    transition: all 0.5s;
    :hover{
      transition: all 0.5s;
      background-color: var(--color-background-body);
      color: var(--color-text-white);
      border: 1px solid #ffffff;
      cursor: pointer;
    }
  }
 }
`;

export const Link = styled.ul`
  display: none;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 20px;
  a{
    text-decoration: none;
    li{
    color:  #7A7A7A;
    font-size: 0.5em;
    list-style: none;
    font-weight: 300;
  }
  }

  ${({ theme }) => theme.breakpoints.up.medium}{
    display: flex;
  };
`;
