import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import UpdateContact from "./components/UpdateContact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/update/:id" element={<UpdateContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
