import { Item } from '../types/Item';

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()} - ${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let dateSplit = date.split('-');
  let year = dateSplit[0];
  let month = dateSplit[1];

  let newList = list.filter(
    (item) => {
      item.date.getFullYear() === parseInt(year)
        &&
        item.date.getMonth() === parseInt(month)
    }
  );

  return newList;
}

export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`