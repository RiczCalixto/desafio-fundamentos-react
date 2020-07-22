import { Type, Balance } from './dashboard-response.model';

export interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: Type;
  category: Category;
  createdAt: string;
}

interface Category {
  title: string;
}

export interface DashboardInformation {
  transactions: Transaction[];
  balance: Balance;
}
