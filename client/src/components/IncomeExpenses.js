import { useContext } from "react";
import { spaceFormattedNumber as format } from '../utils/format'
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((partial_sum, income) => partial_sum + income.amount, 0)
    .toFixed(2);

  const totalExpense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((partial_sum, expense) => partial_sum + expense.amount, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${format(totalIncome)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${format(Math.abs(totalExpense).toFixed(2))}</p>
      </div>
    </div>
  );
};
