import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import hotel1 from "../../imgs/hotel1.jpg";
import "./Booknow.css";
import { ref, set } from "firebase/database";
import { db } from "../../config/firebase-config";

export default function Booknow() {
  const { ItemID } = useParams();
  console.log(ItemID);
  var roomsDetails = {};
  if (ItemID == "single") {
    roomsDetails = {
      capacity: 1,
      breakfast: "not included",
      price: 200,
      pets: "allowed",
      ItemID: "single",
      size: "30 m2",
    };
  } else if (ItemID == "double") {
    roomsDetails = {
      capacity: 2,
      breakfast: "not included",
      price: 400,
      pets: "allowed",
      ItemID: "double",
      size: "45 m2",
    };
  } else if (ItemID == "family") {
    roomsDetails = {
      capacity: 6,
      breakfast: "included",
      price: 550,
      pets: "not allowed",
      ItemID: "family",
      size: "70 m2",
    };
  } else if (ItemID == "presidential") {
    roomsDetails = {
      capacity: 4,
      breakfast: "included",
      price: 1000,
      pets: "not allowed",
      ItemID: "presidential",
      size: "120 m2",
    };
  }

  const [fullName, setFullName] = useState("");
  const [value, setValue] = useState(0);
  const [email, setEmail] = useState("");
  const [persons, setPersons] = useState("1");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();

  function handleName(name) {
    setFullName(name.target.value);
    console.log(fullName);
  }
  function handlepersons(val) {
    setPersons(val.target.value);
    console.log(persons);
  }
  function handleemail(val) {
    setEmail(val.target.value);
    console.log(email);
  }
  function handleChangeStart(date) {
    setStartDate(date);
  }

  function handleChangeEnd(date) {
    setEndDate(date);
  }

  function calculateDaysLeft(startDate, endDate) {
    if (!moment.isMoment(startDate)) startDate = moment(startDate);
    if (!moment.isMoment(endDate)) endDate = moment(endDate);
    return endDate.diff(startDate, "days");
  }
  var daysLeft = calculateDaysLeft(startDate, endDate);

  const formattedDate = startDate
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");

  const formattedEndDate = endDate
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");

  function writeToDatabase() {
    // if (persons > roomsDetails.capacity) {
    //   return alert("Please check the capacity of Room.");
    // }
    // if (daysLeft === 0) {
    //   return alert("Please select the dates.");
    // }
    // if (
    //   fullName &&
    //   email &&
    //   value &&
    //   persons <= roomsDetails.capacity &&
    //   startDate &&
    //   endDate
    // ) {
    set(ref(db, `bookings/`), {
      name: fullName,
      email: email,
      phone: value,
      persons: persons,
      type: roomsDetails.ItemID,
      startDate: formattedDate,
      endDate: formattedEndDate,
      totalPrice: daysLeft * roomsDetails.price,
      days: daysLeft,
      capacity: roomsDetails.capacity,
      status: "Pending",
      refID: email,
    }).then(() => {
      alert("Please Fill all fields");
    });
    setFullName("");
    setEmail("");
    setValue(0);
    setPersons(0);
    // } else {
    //   alert("Please Fill all fields");
    // }
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-10 mx-auto col-12  shadow-lg border-0 p-4">
          <div>
            <h1 className="display-4 booking-hd">ყიდვა</h1>
          </div>
          {/* <div className="row">
             <div className="col-md-6 col-12 my-auto">
              <img
                src={roomsDetails.img}
                className="img-fluid"
                alt="selected room"
              />
            </div>
            <div className="col-md-6 col-12 my-auto">
              <h1>Rooms Details</h1>
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th className="dark-shade">Room Type</th>
                    <td>{roomsDetails.ItemID}</td>
                  </tr>
                  <tr>
                    <th className="dark-shade">Capacity</th>
                    <td>{roomsDetails.capacity + " persons"}</td>
                  </tr>
                  <tr>
                    <th className="dark-shade">Size</th>
                    <td>{roomsDetails.size}</td>
                  </tr>
                  <tr>
                    <th className="dark-shade">Breakfast</th>
                    <td>{roomsDetails.breakfast}</td>
                  </tr>
                  <tr>
                    <th className="dark-shade">Pets</th>
                    <td>{roomsDetails.pets}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div> */}
          {/* <div className="row my-3">
             <div className="col-md-6 col-12">
              <div className="form-group">
                <label htmlFor="Fromdate" className="font-weight-bolder mr-3">
                  From Date{" "}
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={handleChangeStart}
                  minDate={moment().toDate()}
                  className="form-control"
                  required
                />
              </div>
            </div> 
            <div className="col-md-6 col-12">
              <div className="form-group">
                <label htmlFor="Todate" className="font-weight-bolder mr-3">
                  To Date{" "}
                </label>
                <DatePicker
                  selected={endDate}
                  minDate={moment().toDate()}
                  onChange={handleChangeEnd}
                  className="form-control"
                />
              </div>
            </div>
          </div> */}
          <div className="row">
            {/* <div className="col-md-6 col-12">
              <h6 className="font-weight-bolder">
                პროდუქტის რაოდენობა: {daysLeft}
              </h6>
              <mark>Please make sure Checkin time is from 9 am to 12 pm</mark>
            </div> */}
            {/* <div className="col-md-6 col-12">
              <h6 className="font-weight-bold">
                ფასი : <span className="">ლარი {roomsDetails.price}</span>
              </h6>
              <h6 className="font-weight-bold">
                ჯამური ფასი :{" "}
                <span className="text-primary">
                  {roomsDetails.price * persons} ლარი
                </span>
              </h6>
            </div> */}
          </div>
          <div className="row my-4">
            <div className="col-md-12 col-12 my-auto">
              <div className="col-md-12 col-12 float-right">
                <form>
                  <div className="form-group">
                    <label htmlFor="persons">პროდუქტის რაოდენობა</label>
                    <input
                      type="number"
                      value={persons}
                      className="form-control"
                      onChange={handlepersons}
                      id="persons"
                      placeholder="No. of persons"
                      required
                    />

                    <br />
                    <label htmlFor="forName">სახელი</label>
                    <input
                      type="text"
                      className="form-control"
                      value={fullName}
                      id="forName"
                      onChange={handleName}
                      placeholder="Full name"
                      required
                    />
                    <br />

                    <label htmlFor="Number">ნომერი</label>
                    <PhoneInput
                      defaultCountry="GE"
                      className="phoneInput"
                      id="number"
                      placeholder="Enter phone number"
                      value={value}
                      onChange={setValue}
                    />
                    <br />

                    <label htmlFor="exampleInputEmail1">ემაილი</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={handleemail}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required
                    />
                    {/* <small id="emailHelp" className="form-text text-muted">
                      Enter the same email through which you have logged in.
                    </small> */}
                  </div>

                  <div className="form-group form-check"></div>
                </form>
                <center>
                  <button
                    onClick={writeToDatabase}
                    className="btn btn-block btn-outline-primary confirm-booking-btn"
                  >
                    <Link to="/">ყიდვა</Link>
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
