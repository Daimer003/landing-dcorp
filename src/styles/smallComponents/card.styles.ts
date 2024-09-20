import styled from "styled-components";

export const ContainerCard = styled.div<{ position: string, click: boolean }>`
  display: flex;
  width: 100%;
  height: auto;
  min-height: 190px;
  font-size: 16px;
  box-sizing: border-box;
  transition:  0.5s ease-in-out;
  box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 5);
  cursor: pointer;
  :hover{
    transform: scale(1.03);
  }
`;

export const RowCard = styled.div<{ zIndex: number, }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  gap: 20px; 
  margin-left: 30px;
  position: relative;
  background-color: ${({ zIndex }) => zIndex == 1 ? "#141414" : "#121212"} ;
  border-radius: 12px;
  border: 1px solid #7A7A7A;
`;

export const ContentImage1 = styled.div`
  display: flex;
  justify-content: center;
  width: 80px;
  height: 80px;
  z-index: 1;
  top: 10px;
  position: absolute;
  border-radius: 50%;
  border: 1px solid #7A7A7A;
  background-color: #000;
  overflow: hidden;
  padding: 5px;
  box-sizing: border-box;
  left: -38px;
  top: 56px;
  img{
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 50%;
    border: 1px solid #7A7A7A;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  position: relative;
  z-index: 60;
  margin-left: 40px;
  padding: 20px;
  box-sizing: border-box;
  gap: 10px;
  h2{
  color: var(--color-text);
  font-size: 1.6em;
  margin: 0;
  }
  p{
    color: #fff;
    margin: 0;
    font-size: 1.2em;
    white-space: wrap; /* Evitar saltos de línea */
    text-overflow: ellipsis; /* Agregar puntos suspensivos al final */
    overflow: hidden;
  }
`;