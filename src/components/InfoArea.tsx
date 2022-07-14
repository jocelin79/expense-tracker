import styled from "styled-components";
import { formatCurrentMonth } from '../helpers/dateFilter';
import { ResumeItem } from "./ResumeItem";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {

  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth( currentDate.getMonth() - 1 );
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
}

const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth( currentDate.getMonth() + 1 );
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
}

  return (
    <Container>
      <MonthArea>
        <MonthArrow onClick={handlePrevMonth}>⬅️</MonthArrow>
        <MonthTitle>{formatCurrentMonth(currentMonth)}</MonthTitle>
        <MonthArrow onClick={handleNextMonth}>➡️</MonthArrow>
      </MonthArea>
      <ResumeArea>
        <ResumeItem title='Receitas' value={income} />
        <ResumeItem title='Despesas' value={expense} />
        <ResumeItem
          title='Balanço'
          value={income - expense}
          color={(income - expense) < 0 ? 'red' : 'green'}
        />
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