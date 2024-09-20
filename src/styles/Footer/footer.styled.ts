import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 550px;
  background-color: var(--color-bg-card);
  position: relative;
  font-size: 16px;
  /* background-image: url("/assets/logo-d.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  filter: blur(50%); */
`;
export const RowFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 400px;
  margin: 20px;
  p{
    color: #fff;
    text-align: center;
    margin: 20px 0;
  }
  ${({ theme }) => theme.breakpoints.up.large}{
    max-width: 90vw;
    flex-direction: row;
    height: auto;
    p{
    text-align: start;
  }
  };
  ${({ theme }) => theme.breakpoints.up.extraLarge}{
    max-width: 80vw;
  };
`;
export const Logo = styled.div`
  display: flex;
  position: absolute;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 20px;
  img{
    display: block;
    width: 240px;
    height: 59px;
  }
  h4{
    color: var(--color-bg-icons-white);
  }
  p{
    color: var(--color-text-secondary);
    font-size: 1em;
  }
  ${({ theme }) => theme.breakpoints.up.large}{
    align-items: start;
    img{
    display: block;
    width: 320px;
    height: 75px;
  }
  };
`;
export const SocialFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
  p{
    color: #fff;
  }
  span{
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: var(--color-bg-icons-white)!important;
    font-size: 1.5em;
    border: 1px solid var(--color-bg-icons-white);
    a{
      text-decoration: none;
      color: #fff;
    }
  }
  ${({ theme }) => theme.breakpoints.up.large}{
    align-items: start;
    justify-content: start;
  };
`
export const Foot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  gap: 80px;
  span{
    color: var(--color-text);
    font-size: 18px;
    font-weight: 900;
  }
  p{
    color: var(--color-text);
    font-size: 1em;
  }
  ul{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0;
    padding: 0;
    li{
        color: var(--color-text);
        font-size: 1em; 
        list-style: none;
    }
  }
  ${({ theme }) => theme.breakpoints.up.large}{
    justify-content: end;
  };
`;
export const Items = styled.div`
  display: flex;
  width: 80px;
  gap: 10px;
  flex-direction: column;
  a{
    color: var(--color-text-secondary);
    font-size: 1em;
  }
`;
