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
  
  const handleAddEvent = () => {
    let errors: string[] = [];
    
    if(isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida!');
    }
    if(!) {
      errors.push('Categoria inválida!');
    }
  }
  
  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  }
  
  return (
    <Container>
      <InputLable>
        <InputTitle>Data<InputTitle>
        <Input type='date' value={dateField} onChange={e => setDateField(e.target.value)}/>
      </InputLable>
      <InputLable>
        <InputTitle>Categoria<InputTitle>
        <Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>{categories[key].title}</option>
            ))}
          </>
        </Select>
      </InputLable>
      <InputLable>
        <InputTitle>Título<InputTitle>
        <Input type='text' value={titleField} onChange={e => setTitleField(e.target.value)}/>
      </InputLable>
      <InputLable>
        <InputTitle>Valor<InputTitle>
        <Input type='number' value={valueField} onChange={e => setValueField(e.target.value)}/>
      </InputLable>
      <InputLable>
        <InputTitle>&nbsp;<InputTitle>
        <Button onClick={handleAddEvent}>Adicionar</Button>
      </InputLable>
    </Container>  
  );
}
