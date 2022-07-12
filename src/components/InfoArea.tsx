import styled from "styled-components";
import { formatCurrentMonth } from '../helpers/dateFilter';

type Props = {
  currentMonth: string;
}

export const InfoArea = ({ currentMonth }: Props) => {

  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split('-')
    let currentDate = new Date(parseInt(year), parseInt(month), 1);
    currentDate.setMonth( currentDate.getMonth() - 1);
  };

  const handleNextMonth = () => {
    zax
  };

  return (
    <Container>
      <MonthArea>
        <MonthArrow Onclick={() => handlePrevMonth()}>⬅️</MonthArrow>
        <MonthTitle>{formatCurrentMonth(currentMonth)}</MonthTitle>
        <MonthArrow Onclick={() => handleNextMonth()}>⬅️</MonthArrow>
        <MonthTitle>{formatCurrentMonth(currentMonth)}>➡️</MonthArrow>
      </MonthArea>
      <ResumeArea>
        a
      </ResumeArea>
    </Container>
  );
}

const Container = styled.div`
  background-color: #FFF;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  padding: 20px;
  margin-top: -40px;
  display: flex;
  align-items: center;

`;

const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const MonthArrow = styled.div`
  width: 40px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
`;

const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`;

const ResumeArea = styled.div`
  flex: 2;
  display: flex;
`;