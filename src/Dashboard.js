// Dashboard.js
import { useEffect, useState } from "react";
import { db, ref, onValue } from "./firebase";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const userId = "staticUserId";
    const txnRef = ref(db, `transactions/${userId}`);
    onValue(txnRef, (snapshot) => {
      const data = snapshot.val() || {};
      const txnList = Object.values(data);
      setTransactions(txnList);
    });
  }, []);

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);

  const currentBalance = totalIncome - totalExpense;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Income: ₹{totalIncome}</p>
      <p>Total Expense: ₹{totalExpense}</p>
      <p>Current Balance: ₹{currentBalance}</p>

      <h3>Transaction History</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, idx) => (
            <tr key={idx}>
              <td>{txn.title}</td>
              <td>{txn.amount}</td>
              <td>{txn.type}</td>
              <td>{txn.date}</td>
              <td>{txn.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
