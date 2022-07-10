import styled from "styled-components";
import { Item } from "../types/Item";
import {formatDate} from '../helpers/dateFilter'
import {categories} from '../data/categories'

type Props = {
  item: Item
}

export const TableItem = ({item}: Props) => {
  
  return (
    <TableLine>
      <TableColumn>{formatDate(item.date)}</TableColumn>
      <TableColumn>
        <Category>
          {categories[item.category].title}
        </Category>
      </TableColumn>
      <TableColumn>{item.title}</TableColumn>
      <TableColumn>R$ {item.value}</TableColumn>
    </TableLine>
  );
}

const TableLine = styled.tr``;

const TableColumn = styled.td`
  padding: 10px 0;
`;

const Category = styled.div``;