import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoutes";
import { UserAuthContextProvider } from "./Context/UserAuthContext";

import Home from "./screens/Home/Home";
import Contact from "./screens/Contact/Contact";
import Items from "./screens/Items/Items";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import SingleItem from "./screens/Items/SingleItem";
import Booknow from "./components/Booking/Booknow";
import MyBookings from "./components/Booking/MyBookings";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <BrowserRouter>
        <UserAuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/items" element={<Items />} />
            {
              <Route
                path="/booknow/:ItemID"
                element={
                  <ProtectedRoute>
                    <Booknow />
                  </ProtectedRoute>
                }
              />
            }
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/singleItem/:ItemID" element={<SingleItem />} />
            <Route path="/mybookings" element={<MyBookings />} />
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
