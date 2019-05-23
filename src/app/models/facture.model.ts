export interface FactureModel {
  client: string;
  id: number;
  date: string;
  maintenance: string;
  subTotal: number;
  iva: number;
  total: number;
}
