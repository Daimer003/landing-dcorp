import styled from "styled-components";

const ContainerCardProyect = styled.div`
  display: flex;
  width: 200px;
  height: 140px;
  font-size: 16px;
  background: var(--color-background-body);
`;
const RowCardProyect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  span{
    color: var(--color-text-secondary);
    font-size: 2em;
  }
`;

interface Prop {
    title: string
}

const CardProyect = ({title}: Prop) => {
    return(
      <ContainerCardProyect>
        <RowCardProyect>
          <span>{title}</span>
        </RowCardProyect>
      </ContainerCardProyect>
    )
}

export default CardProyect;