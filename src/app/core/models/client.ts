import { StateOrder } from '../enums/state-order';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  totalCaHt = 1200;
  tva = 20;
  state = StateOrder.OPTION;
  name!: string;
  comment!: string;
  id!: number;

  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
