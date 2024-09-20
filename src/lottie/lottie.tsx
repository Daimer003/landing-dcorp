import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
import styled from "styled-components";


const Container = styled.div<{width: string, height: string}>`
  display: flex;
  width: ${({width}) => width};
  height: ${({height}) => height};
  position: relative;
  z-index: 9999;
  @media screen and (min-width: 768px){
    width: 550px;
  }
`;

type Props = {
    animation: any,
    width: string,
    height: string
}


const Lottie = ({ animation, width, height }: Props) => { 
  const container = useRef(null);
  useEffect(() => {
    if (container.current) {
        lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animation,
      })
    }
    return () => {
      lottie.destroy();
    };
  }, [animation])

  return <Container ref={container} width={width} height={height} />
}

export default Lottie;