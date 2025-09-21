import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoutes";
import { UserAuthContextProvider } from "./Context/UserAuthContext";

import Home from "./screens/Home/Home";
import Contact from "./screens/Contact/Contact";
import Rooms from "./screens/Rooms/Rooms";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import SingleRoom from "./screens/Rooms/SingleRoom";
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
            <Route path="/rooms" element={<Rooms />} />
            {
              <Route
                path="/booknow/:roomType"
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
            <Route path="/singleRoom/:roomType" element={<SingleRoom />} />
            <Route path="/mybookings" element={<MyBookings />} />
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
