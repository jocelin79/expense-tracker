import styled from "styled-components";
import {Item} from '../types/Item';
import {TableItem} from '../components/TableItem'

type Props = {
  list: Item[]
}


export const TableArea = ({list}: Props) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeadColumn width={100} >Data</TableHeadColumn>
          <TableHeadColumn width={130}>Categoria</TableHeadColumn>
          <TableHeadColumn>Título</TableHeadColumn>
          <TableHeadColumn width={150}>Valor</TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index)=>(
          <TableItem key={index} item={item}/>
        ))}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  width: 100%;
  background-color: #FFF;
  padding: 20px;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  margin-top: 20px;
`;

const TableHeadColumn = styled.th<{ width?: number }>`
  padding: 10px 0px;
  text-align: left;
  width: ${(props) => props.width ? `${props.width}px` : 'auto'};
`;