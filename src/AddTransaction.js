// AddTransaction.js
import { useState } from "react";
import { db, ref, push, set } from "./firebase";

export default function AddTransaction() {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "Food",
    date: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.amount) return;

    const userId = "staticUserId"; // static user id (no auth)
    const txnRef = push(ref(db, `transactions/${userId}`));
    set(txnRef, {
      ...formData,
      amount: Number(formData.amount),
    });
    alert("Transaction Added");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input
        name="amount"
        placeholder="Amount"
        type="number"
        onChange={handleChange}
      />
      <select name="type" onChange={handleChange}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <select name="category" onChange={handleChange}>
        <option>Food</option>
        <option>Transport</option>
        <option>Rent</option>
        <option>Job</option>
        <option>Freelance</option>
        <option>Misc</option>
      </select>
      <input
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
