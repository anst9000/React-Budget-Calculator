import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { spaceFormattedNumber as format } from '../utils/format'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const balance = transactions.reduce(
    (partial_sum, transaction) => partial_sum + transaction.amount,
    0
  );

  const sign = balance < 0 ? "-" : "+";
  const signText = balance < 0 ? "minus" : "plus";

  return (
    <>
      <h4>Your Balance</h4>
      <h1 className={signText}>
        {sign}${format(Math.abs(balance).toFixed(2))}
      </h1>
    </>
  );
};
