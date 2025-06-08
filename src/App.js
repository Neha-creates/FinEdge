// App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddTransaction from "./AddTransaction";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Dashboard</Link> | <Link to="/add">Add Transaction</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddTransaction />} />
      </Routes>
    </Router>
  );
}
