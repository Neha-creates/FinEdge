# FinEdge – The Personal Finance Tracker

A personal finance tracker app to help users **monitor expenses**, **set budgets**, and **visualize savings goals**.  
The app features real-time data sync using **Firebase Realtime Database**, organized routing, and a clean, reactive UI.

---

## 🚀 Live Demo

👉 [**FinEdge Live Link**](https://t6xsjl.csb.app/)  

---

## 📝 Features

### Dashboard (`/dashboard`)

- View **Total Income**
- View **Total Expense**
- View **Current Balance**
- Visual breakdown by category (bar chart or list)

### Add Transaction

- Form fields:
  - `title` (string)
  - `amount` (numeric, positive/negative based on type)
  - `type` (income/expense)
  - `category` (Food, Transport, Rent, Job, Freelance, Misc)
  - `date` (default: today)
- Validation:
  - All fields required
  - `amount` must be numeric
  - `type` must match sign of amount

### Transaction History

- Table showing all transactions per user
- Filter by `type` (income/expense)
- Sort by `date` or `amount` (ascending/descending)

### Data Storage

- Data stored in **Firebase Realtime DB**:
  ```json
  transactions/{userId}/txnId
