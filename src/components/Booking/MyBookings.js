import React from "react";
import { Link } from "react-router-dom";

const MyBookings = () => {
  return (
    <div className="container roomerror">
      <div className="row">
        <div className="col-md-6 col-12 mx-auto">
          <div className="card shadow-lg  p-4 error">
            <h1 className="text-center display-4">არ გაქვს მერჩი</h1>
            {/* <h3 className="text-center p-3">შეუკვეთე ახლავე!</h3> */}
            <Link
              to="/items"
              className="btn btn-warning mt-4 start-booking-btn "
            >
              შეუკვეთე ახლავე!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
