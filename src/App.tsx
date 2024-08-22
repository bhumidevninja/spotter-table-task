import "./App.css";
import DataTableView from "./components/DataTableView";
import Navbar from "./components/Navbar";
import {PivoteTable}  from "./components/PivoteTable";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DataTableView isPivot={false} />} />
        <Route path="/pivot-table" element={<PivoteTable />} />
      </Routes>
    </Router>
  );
}
export default App;
