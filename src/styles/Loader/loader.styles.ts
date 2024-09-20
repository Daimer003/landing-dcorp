import styled from "styled-components";

export const ContainerLoader = styled.div<{ active: boolean }>`
  display: ${({ active }) => active ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #000000;
  position: fixed;
  z-index: 9999;
`;
export const RowLoader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 100px;
  gap: 20px;
  span{
    color: var(--color-text-white);
    font-size: 16px;
    text-align: center;
  }
  img{
    display: block;
    width: 50px;
    height: 60px;
  }
`;