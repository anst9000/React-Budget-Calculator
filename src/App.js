import { AddTransaction } from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExpences } from "./components/IncomeExpences";
import { TransactionList } from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";
import "./styles.css";

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
