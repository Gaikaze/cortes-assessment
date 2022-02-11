import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import Menu from "./pages/Menu";
import ViewOrder from "./pages/ViewOrder";
import { useAuthContext } from "./shared/context/AuthContext";
import Contact from "./pages/Contact";
import TechStack from "./pages/TechStack";
import EditOrder from "./pages/EditOrder";

function App() {
  const { user } = useAuthContext();
  console.log("User", user);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUp />} />

        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vieworder" element={<ViewOrder />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tech" element={<TechStack />} />
        <Route path="/editorder" element={<EditOrder />} />
        <Route path="/" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
