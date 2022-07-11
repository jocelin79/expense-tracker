import { Item } from '../types/Item';

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()} - ${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split('-');

  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      (list[i].date.getMonth()) === parseInt(month)
    ) {
      newList.push(list[i]);
    }
    console.log(`array ${list[i].date.getMonth()}`)
  }

  return newList;
}

export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`