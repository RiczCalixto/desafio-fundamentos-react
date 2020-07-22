import {
  DataResponse,
  TransactionResponse,
  BalanceResponse,
} from '../model/dashboard-response.model';
import {
  DashboardInformation,
  Transaction,
  Balance,
} from '../model/dashboard.model';
import formatDate from '../utils/formatDate';
import formatValue from '../utils/formatValue';

export const mapToDashboardInformation = (
  data: DataResponse,
): DashboardInformation => {
  return {
    transactions: data.transactions.map(transaction),
    balance: formatBalanceValues(data.balance),
  };
};

const transaction = (remoteTransaction: TransactionResponse): Transaction => {
  const { id, title, type, created_at, value, category } = remoteTransaction;

  return {
    id,
    title,
    type,
    category,
    value: +value,
    createdAt: created_at,
    formattedDate: formatDate(created_at),
    formattedValue: formatValue(+value),
  };
};

const formatBalanceValues = (remoteBalance: BalanceResponse): Balance => {
  return {
    income: formatValue(remoteBalance.income),
    outcome: formatValue(remoteBalance.outcome),
    total: formatValue(remoteBalance.total),
  };
};
