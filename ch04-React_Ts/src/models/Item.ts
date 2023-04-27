// interface vs type
interface Dummy {
  name: string;
}

interface DummyInterface extends Dummy {
  isAdmin: true;
}

type DummyType = Dummy & { admin: true };

//

export type Item = {
  id: string;
  title: string;
  amount: number;
};

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

export type ItemFormProps = {
  onAddItem: (item: string, amount: number) => void;
};
