
import styled from "styled-components";
import Image from "next/image";
import { ImHeart } from "react-icons/im";
import { FiLinkedin, FiGitlab } from "react-icons/fi";
import { useState } from "react";




const ContainerTeam = styled.div`
  display: flex;
  width: 300px;
  height: auto;
  transition: all 0.5s;
  background: var(--color-background-body-black);
  border: 5px solid var(--color-background-body-black);
  font-size: 16px;
  :hover{
    transition: all 1s;
    border: 5px solid var(--color-border-hover);
}

`;
const RowTeam = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentImg = styled.div`
  img{
    display: block;
    width: 100%;
    height: auto;
  }
`;
const ContentInf = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px;
  box-sizing: border-box;
  span{
    color: var(--color-text-secondary);
    font-size: 0.7em;
  }
  h3{
    color: var(--color-text-white);
    margin: 0;
  }
  p{
    color: var(--color-text);
    margin: 0;
  }
`;
const Social = styled.div`
  display: flex;
   width: 100%;
   padding: 0 20px 10px;
   box-sizing: border-box;
  justify-content: space-between;
 span{
    display: flex;
    color: var(--color-text);
    font-size: 1.2em;
    cursor: pointer;
    gap: 5px;
    p{
        margin: 0;
        font-size: 0.8em;
    }
 }
`;
const Like = styled.div<{ like: boolean }>`
  span{
    color: ${({ like }) => like ? "red" : "#cccccc"}
  }
`;

interface Props {
  perfil: string
}

const CardTeam = ({ perfil }: Props) => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(1);
  const newLike = () => {
    setLike(true)
    setCount(count + 1)
  }

  return (
    <ContainerTeam>
      <RowTeam>
        <ContentImg>
          <Image src="/assets/11.jpg" alt="Imagen del team" width={300} height={300} priority />
        </ContentImg>
        <ContentInf>
          <h3>Name</h3>
          <span>{perfil}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente.</p>
        </ContentInf>
        <Social>
          <div style={{ display: "flex", gap: "8px" }}>
            <span><FiLinkedin /></span>
            <span><FiGitlab /></span>
          </div>
          <Like like={like}>
            <span onClick={() => newLike()}>< ImHeart /> <p>{count}</p></span>
          </Like>
        </Social>
      </RowTeam>
    </ContainerTeam>
  )
}

export default CardTeam;