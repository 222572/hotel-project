import React from "react";
import card1 from "../../imgs/card1.jpg";
import card2 from "../../imgs/card2.jpg";
import card3 from "../../imgs/card3.jpg";
import card4 from "../../imgs/card4.jpg";
import card7 from "../../imgs/card7.jpg";
import card11 from "../../imgs/card11.jpg";
import card12 from "../../imgs/card12.jpg";
import card13 from "../../imgs/card13.jpg";
import card14 from "../../imgs/card14.jpg";
import card15 from "../../imgs/card15.jpg";
import "./Items.css";
import { Link, useParams } from "react-router-dom";

const roomsDetails = [
  {
    single: {
      capacity: 1,
      breakfast: "not included",
      price: 200,
      pets: "allowed",
      ItemID: "single",
      size: " 30 m2",
      image: [card1, card7],
      details:
        "Spacious room with a balcony and a KING size bed. Upon your request, we will be able to provide you with a baby bed. The room offers all the amenities for single occupancy: a large work space, high-speed Wi-Fi, a spacious bathroom with heated floors.",
    },
    double: {
      capacity: 2,
      breakfast: "included",
      price: 400,
      pets: "allowed",
      ItemID: "double",
      size: " 45 m2",
      image: [card2, card11],
      details:
        "Our double room is the perfect place for exceptional relaxation and comfort. The space is decorated with exquisite furniture and unique accessories that emphasize its elegance. Our living spaces are designed for complete relaxation and enjoyment. They have everything you need for cozy evenings out. The bed with snow-white linens and soft pillows gives you the opportunity to enjoy our beds",
    },
    family: {
      capacity: 6,
      breakfast: "included",
      price: 550,
      pets: "not allowed",
      ItemID: "family",
      size: " 70 m2",
      image: [card4, card13, card14],
      details:
        "Our family rooms in the five-star hotel are designed with your comfort and convenience in mind. The room features a combination of cozy beds and modern furnishings, providing a perfect retreat for both parents and children. The bedding is plush and inviting, ensuring a restful night's sleep after a day of exploring or relaxing. The family-friendly atmosphere extends to the living area, where you can unwind together on comfortable sofas and enjoy quality time with your loved ones. Large windows offer picturesque views. For your convenience, the room is equipped with high-speed Wi-Fi, a large-screen TV, and air conditioning to ensure a pleasant and comfortable stay throughout your visit. Every detail is meticulously crafted to meet the highest standards of luxury and service, ensuring an unforgettable experience for your entire family.",
    },
    presidential: {
      capacity: 4,
      breakfast: "included",
      price: 1000,
      pets: "not allowed",
      ItemID: "presidential",
      size: " 120 m2",
      image: [card3, card12, card15],
      details:
        "A first-class room with an area of 120 sq. m. The apartment offers a living room and a dining room, as well as the best bedroom with a king-size bed. Spectacular views of the river, mountains and forest, opening from three balconies and terraces, welcomes you in an excellent secluded location, offering butler service, oval bathroom with heated floors, 2 spacious study rooms and high-speed Internet. Includes breakfast, evening cocktails and snacks. 24-hour room service will help you to maintain a comfortable stay in our hotel,",
    },
  },
];

const SingleRoom = () => {
  const { ItemID } = useParams();
  console.log(ItemID);
  let myVar;

  if (ItemID === "single") {
    myVar = roomsDetails[0].single;
    console.log(myVar);
  } else if (ItemID === "double") {
    myVar = roomsDetails[0].double;
  } else if (ItemID === "family") {
    myVar = roomsDetails[0].family;
  } else if (ItemID === "presidential") {
    myVar = roomsDetails[0].presidential;
  }

  return (
    <div>
      <center>
        <h1 className="room-details-heading">Details of {myVar.ItemID} room</h1>
      </center>
      <div className="singleRoom-cards">
        <div className="card-row">
          {myVar.image.map((img, index) => (
            <div className="card" key={index}>
              <img
                className="card-img-top"
                src={img}
                alt={`Room Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="single-room-detail">
        <div className="single-room-detail-para">
          <h1>Details</h1>
          <p>{myVar.details}</p>
        </div>

        <div className="single-room-detail-list">
          <h1>Info</h1>

          <p>
            Price : GEL {myVar.price} <br /> <br />
            Size :{myVar.size} <br /> <br />
            Max Capacity : {myVar.capacity} Person <br /> <br />
            Pets: {myVar.pets} <br /> <br />
            Free Breakfast: {myVar.breakfast} <br /> <br />
          </p>
        </div>
      </div>
      <center>
        <div>
          <Link to={`/booknow/${ItemID}`}>
            <button className="btn bookNow-btn">Book Now</button>
          </Link>
        </div>
      </center>
    </div>
  );
};

export default SingleRoom;
