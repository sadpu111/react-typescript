import styled from "styled-components";

interface CircleProps { // (1) props로 구성된 객체의 shape을 정의하여(prop type과 유사하지만 코드 실행 전에 에러를 표시한다는 점에서 차이 존재)
  bgColor: string;
  borderColor?: string; // ?를 추가하여 optional props로 만든다(있어도 되고, 없어도 되는...).
  text?: string;
}

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

function Circle({ bgColor, borderColor, text="default text" }: CircleProps) { // (2) Component에 전달한다. typescript를 통해 입력된 props 자동입력 및 존재하지 않는 props는 에러처리
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>; 
/*   <Container>가 <div>이므로 또 interface가 요구됨. 그래서 상단에 해당 ContainerProps interface 추가. interface를 추가하기 전에는 <Container>의 props(보라색 bgColor)에 오류 발생.
borderColor의 경우, optional prop이기 때문에 상단의 CircleProps interface에서는 ?로 optional하지만, CotainerProps interface에서는 required로 정의되어 있어 오류 발생. 이를 해결하기 위해 ??로 default(optianal일 때 입력값이 없으면 default를 적용)를 입력하여 에러 해결  */
  
}
/* function Circle(props: CircleProps) { 
  return <Container bgColor={props.bgColor} />;
} // interface CircleProps 적용방법(2). 중괄호는 props를 하나하나 전달, 중괄호 없는 경우는 객체 전체를 전달. */


export default Circle;