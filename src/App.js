import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GolbalProvider } from "./context/GolbalState";

function App() {
  return (
    <GolbalProvider>
      <Header></Header>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div> 
    </GolbalProvider>
  );
}

export default App;
