export interface Item {
  id: string;
  title: string;
  amount: number;
}

export class ItemClass implements Item {
  id: string;
  title: string;
  amount: number;

  constructor(title: string, amount: number) {
    this.id = new Date().toISOString();
    this.title = title;
    this.amount = amount;
  }
}

export interface ItemFormProps {
  onAddItem: (item: string, amount: number) => void;
}
