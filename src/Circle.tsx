import styled from "styled-components";

interface CircleProps { // (1) props로 구성된 객체의 shape을 정의하여(prop type과 유사하지만 코드 실행 전에 에러를 표시한다는 점에서 차이 존재)
  bgColor: string;
}

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

function Circle({ bgColor }: CircleProps) { // (2) Component에 전달한다. typescript를 통해 입력된 props 자동입력 및 존재하지 않는 props는 에러처리
  return <Container bgColor={bgColor} />; // <Container>가 <div>이므로 또 interface가 요구됨. 그래서 7번 째 줄에 해당 interface 추가.
}
/* function Circle(props: CircleProps) { 
  return <Container bgColor={props.bgColor} />;
} // interface CircleProps 적용방법(2). 중괄호는 props를 하나하나 전달, 중괄호 없는 경우는 객체 전체를 전달. */


export default Circle;