import { StateOrder } from '../enums/state-order';

export interface ClientI {
  totalCaHt: number;
  tva: number;
  state: StateOrder;
  name: string;
  comment: string;
  id: number;
}
