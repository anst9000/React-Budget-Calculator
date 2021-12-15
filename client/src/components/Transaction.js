import { useContext } from "react";
import { spaceFormattedNumber as format } from '../utils/format'
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  const signText = transaction.amount < 0 ? "minus" : "plus";

  return (
    <li className={signText}>
      {transaction.text}{" "}
      <span>
        {sign}${format(Math.abs(transaction.amount))}
      </span>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
