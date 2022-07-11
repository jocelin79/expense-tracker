import {useState} from 'react';
import {Item} from '../../types/Item';
import {categories} from '../../data/categories';
import {newDateAdjusted} from '../../helpers/dateFilter';

type Props = {
  onAdd: (item: Item) => void; 
};

export const InputArea = ({onAdd}: Props) => {
  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  );
}
