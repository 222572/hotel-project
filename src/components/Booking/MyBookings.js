import React from "react";
import { Link } from "react-router-dom";

const MyBookings = () => {
  return (
    <div className="container roomerror">
      <div className="row">
        <div className="col-md-6 col-12 mx-auto">
          <div className="card shadow-lg  p-4 error">
            <h1 className="text-center display-4">No bookings.</h1>
            <h3 className="text-center p-3">Click below to start Booking!.</h3>
            <Link
              to="/rooms"
              className="btn btn-warning mt-4 start-booking-btn "
            >
              Start Booking.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
