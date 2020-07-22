import api from '../services/api';
import { mapToDashboardInformation } from './list-transactions.mapper';
import { DashboardInformation } from '../model/dashboard.model';
import { useEffect } from 'react';

export const listTransactionUseCase = async (): Promise<
  DashboardInformation
> => {
  const response = await api.get('/transactions');
  return mapToDashboardInformation(response.data);
};
