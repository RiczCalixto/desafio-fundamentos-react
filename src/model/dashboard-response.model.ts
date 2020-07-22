export type Type = 'income' | 'outcome';

export interface TransactionResponse {
  id: string;
  title: string;
  type: Type;
  updated_at: string;
  created_at: string;
  value: string;
  category: CategoryResponse;
}

interface CategoryResponse {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
}

export interface BalanceResponse {
  income: number;
  outcome: number;
  total: number;
}

export interface DataResponse {
  transactions: TransactionResponse[];
  balance: BalanceResponse;
}
