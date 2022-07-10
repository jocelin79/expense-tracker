import styled from "styled-components";
import { Item } from './types/Item';
import { Category } from './types/Category';
import { items } from './data/items';
import { categories } from './data/categories';
import { useState, useEffect } from "react";
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from "./components/TableArea";


export const App = () => {

  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMounth] = useState(getCurrentMonth());
  const [filteredList, setFilteredList] = useState<Item[]>([]);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  return (
    <Container>
      <Header>
        <HeaderText>
          Sistema Financeiro
        </HeaderText>
      </Header>
      <Body>
        <TableArea list={filteredList}/>
      </Body>
    </Container>
  );
}

const Container = styled.div``

const Header = styled.div`
  background-color: darkblue;
  height: 150px;
  text-align: center;
`

const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
  color: #FFF;
  padding-top: 30px;
`

const Body = styled.div`
  margin: auto;
  max-width: 980px;
  margin-bottom: 50px;
`