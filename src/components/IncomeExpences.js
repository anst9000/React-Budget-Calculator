import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpences = () => {
  const { transactions } = useContext(GlobalContext);

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((partial_sum, income) => partial_sum + income.amount, 0)
    .toFixed(2);

  const totalExpence = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((partial_sum, expence) => partial_sum + expence.amount, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{totalIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{Math.abs(totalExpence).toFixed(2)}</p>
      </div>
    </div>
  );
};
