import React, { useState, useEffect } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import Header from '../../components/Header';
import { Container, CardContainer, Card, TableContainer } from './styles';
import { Transaction, Balance } from '../../model/dashboard.model';
import { listTransactionUseCase } from '../../domain/list-transactions.use-case';

const initialBalance: Balance = { income: '0', outcome: '0', total: '0' };
const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>(initialBalance);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const { balance, transactions } = await listTransactionUseCase();
      setBalance(balance);
      setTransactions(transactions);
    }

    loadTransactions();
  }, []);

  const { income, outcome, total } = balance;

  return (
    <>
      <Header dashboard={true} />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Entradas</p>
              <img src={incomeImg} alt="Income" />
            </header>
            <h1 data-testid="balance-income">{income}</h1>
          </Card>
          <Card>
            <header>
              <p>Saídas</p>
              <img src={outcomeImg} alt="Outcome" />
            </header>
            <h1 data-testid="balance-outcome">{outcome}</h1>
          </Card>
          <Card total>
            <header>
              <p>Total</p>
              <img src={totalImg} alt="Total" />
            </header>
            <h1 data-testid="balance-total">{total}</h1>
          </Card>
        </CardContainer>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {transactions?.map(transaction => (
                <tr key={transaction.id}>
                  <td className="title">{transaction.title}</td>
                  <td className={transaction.type}>
                    {transaction.type === 'outcome'
                      ? '- ' + transaction.formattedValue
                      : transaction.formattedValue}
                  </td>
                  <td>{transaction.category.title}</td>
                  <td>{transaction.formattedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
