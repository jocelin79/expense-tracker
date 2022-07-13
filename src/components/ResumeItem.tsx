import styled from 'styled-components';

type Props = {
  title: string;
  value: number;
  color?: string;
}

export const ResumeItem = ({ title, value, color}: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Info color={color}>R$ {value}</Info>
    </Container> 
  );
}

const Container = styled.div`
  flex: 1;
`;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  color: #888;
  margin-bottom: 5px;
`;

const Info = styled.div<{ color?: string}>`
  text-align: center;
  font-weight: bold;
  color: ${props => props.color ?? '#000'};
`;
