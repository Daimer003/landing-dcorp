import styled from "styled-components"

const ContainerButtom = styled.button`
  width: 160px;
  height: 48px;
  border: 1px solid var(--color-text);
  background: none;
  color: var(--color-text);
  font-size: 16px;
  cursor: pointer;
  transition: all 0.5s;
  :hover{
    transition: all 0.5s;
    border: 1px solid var(--color-border-hover);
  }
`;

interface Props {
    children: any
}

export const Buttom = ({children}: Props) => {
    return(
        <ContainerButtom>{children}</ContainerButtom>
    )
}
