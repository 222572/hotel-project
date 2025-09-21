import React from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

import card1 from "../../imgs/card1.jpg";
import card2 from "../../imgs/card2.jpg";
import card3 from "../../imgs/card3.jpg";
import card4 from "../../imgs/card4.jpg";
import card5 from "../../imgs/card5.jpg";
import card6 from "../../imgs/card6.jpg";
import card8 from "../../imgs/card8.jpg";
import card9 from "../../imgs/card9.jpg";
import "./Rooms.css";

const rooms = [
  { value: "all", label: "all" },
  { value: "single", label: "single" },
  { value: "double", label: "double" },
  { value: "family", label: "family" },
  { value: "presidential", label: "presidential" },
];

const prices = [
  { value: "any", label: "any" },
  { value: "200-350", label: "200-350" },
  { value: "350-500", label: "350-500" },
  { value: "500-800", label: "500-800" },
  { value: "800-1000", label: "800-1000" },
];

const breakfasts = [
  { value: "any", label: "any" },
  { value: "included", label: "included" },
  { value: "not included", label: "not included" },
];

const roomDetails = {
  single: [
    { id: 1, price: 200, img: card1, breakfast: "not included" },
    { id: 2, price: 200, img: card8, breakfast: "not included" },
  ],
  double: [
    { id: 3, price: 400, img: card2, breakfast: "not included" },
    { id: 4, price: 400, img: card9, breakfast: "not included" },
  ],
  family: [
    { id: 5, price: 550, img: card4, breakfast: "included" },
    { id: 6, price: 550, img: card5, breakfast: "included" },
  ],
  presidential: [
    { id: 7, price: 1000, img: card3, breakfast: "included" },
    { id: 8, price: 1000, img: card6, breakfast: "included" },
  ],
};

const filterRoomsByPrice = (room, priceRange) => {
  const [minPrice, maxPrice] = priceRange.split("-").map(Number);
  return room.price >= minPrice && room.price <= maxPrice;
};

const SearchRooms = () => {
  const [roomType, setRoomType] = React.useState("all");
  const [roomPrice, setRoomPrice] = React.useState("any");
  const [roomBreakfast, setRoomBreakfast] = React.useState("any");
  const [sortOption, setSortOption] = React.useState("alphabetical-asc");
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleRoomChange = (event) => {
    setRoomType(event.target.value);
  };

  const handlePriceChange = (event) => {
    setRoomPrice(event.target.value);
  };

  const handleBreakfastChange = (event) => {
    setRoomBreakfast(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const getSortedRooms = (rooms) => {
    const [sortType, sortOrder] = sortOption.split("-");
    return rooms.sort((a, b) => {
      if (sortType === "alphabetical") {
        if (a.type < b.type) return sortOrder === "asc" ? -1 : 1;
        if (a.type > b.type) return sortOrder === "asc" ? 1 : -1;
        return 0;
      } else if (sortType === "price") {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
      }
      return 0;
    });
  };

  const filteredRooms = Object.keys(roomDetails).flatMap((key) => {
    const rooms = roomDetails[key];
    return rooms
      .filter((room) => {
        if (roomType !== "all" && roomType !== key) {
          return false;
        }
        if (roomPrice !== "any" && !filterRoomsByPrice(room, roomPrice)) {
          return false;
        }
        if (roomBreakfast !== "any" && room.breakfast !== roomBreakfast) {
          return false;
        }
        if (
          searchQuery &&
          !key.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          return false;
        }
        return true;
      })
      .map((room) => ({ ...room, type: key }));
  });

  const sortedRooms = getSortedRooms(filteredRooms);

  const handleFamilyRoomClick = (roomId) => {
    if (roomId === 5) {
      alert("Family Room is currently unavailable for booking");
    }
  };

  return (
    <div className="container">
      <h1 className="featured-heading">Search Rooms</h1>

      <div className="search-sort-filter">
        <TextField
          className="search-room-input search"
          id="outlined-search"
          label="Search"
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
        />

        <TextField
          className="search-room-input sort"
          id="outlined-select-currency"
          select
          label="Sort By"
          value={sortOption}
          onChange={handleSortChange}
        >
          <MenuItem value="alphabetical-asc">Alphabetical (A-Z)</MenuItem>
          <MenuItem value="alphabetical-desc">Alphabetical (Z-A)</MenuItem>
          <MenuItem value="price-asc">Price (Low to High)</MenuItem>
          <MenuItem value="price-desc">Price (High to Low)</MenuItem>
        </TextField>

        <TextField
          className="search-room-input"
          id="outlined-select-currency"
          select
          label="Room Type"
          value={roomType}
          onChange={handleRoomChange}
        >
          {rooms.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className="search-room-input"
          id="outlined-select-currency"
          select
          label="Room Price"
          value={roomPrice}
          onChange={handlePriceChange}
        >
          {prices.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className="search-room-input"
          id="outlined-select-currency"
          select
          label="Breakfast"
          value={roomBreakfast}
          onChange={handleBreakfastChange}
        >
          {breakfasts.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <div className="myCards">
        {sortedRooms.map((room, index) => (
          <div className="card" key={index}>
            <div className="slide slide1">
              <div className="content">
                <div className="icon">
                  <img
                    src={room.img}
                    alt={`${room.type} ${index + 1}`}
                    className={room.id === 5 ? "unavailable-room" : ""}
                  />
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <div className="content">
                <h3>{`${
                  room.type.charAt(0).toUpperCase() + room.type.slice(1)
                } Room`}</h3>
                {room.id === 5 ? (
                  <div onClick={() => handleFamilyRoomClick(room.id)}>
                    <p>Click to book your room of your own choice</p>
                  </div>
                ) : (
                  <Link to={`/singleRoom/${room.type}`}>
                    <p>Click to book your room of your own choice</p>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchRooms;
