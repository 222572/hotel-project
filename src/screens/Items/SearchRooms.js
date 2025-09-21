import React from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

import whiteShirt from "../../imgs/white shirt.png";
import blackShirt from "../../imgs/black shirt.png";
import whiteCup from "../../imgs/white cup.png";
import whitePin from "../../imgs/white pin.png";
import whiteBag from "../../imgs/white bag.png";

import "./Items.css";

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
    { id: 1, price: 25, img: whiteShirt, breakfast: "not included" },
    { id: 2, price: 25, img: blackShirt, breakfast: "not included" },
  ],
  double: [
    { id: 3, price: 20, img: whiteCup, breakfast: "not included" },
    { id: 4, price: 5, img: whitePin, breakfast: "not included" },
  ],
  family: [{ id: 5, price: 15, img: whiteBag, breakfast: "included" }],
};

const filterRoomsByPrice = (room, priceRange) => {
  const [minPrice, maxPrice] = priceRange.split("-").map(Number);
  return room.price >= minPrice && room.price <= maxPrice;
};

const SearchRooms = () => {
  const [ItemID, setItemID] = React.useState("all");
  const [roomPrice, setRoomPrice] = React.useState("any");
  const [roomBreakfast, setRoomBreakfast] = React.useState("any");
  const [sortOption, setSortOption] = React.useState("alphabetical-asc");
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleRoomChange = (event) => {
    setItemID(event.target.value);
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
        if (ItemID !== "all" && ItemID !== key) {
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
      <h1 className="featured-heading">იყიდე მერჩი</h1>

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
          <MenuItem value="alphabetical-asc">ანბანი (ა-ჰ)</MenuItem>
          <MenuItem value="alphabetical-desc">ანბანი (ჰ-ა)</MenuItem>
          <MenuItem value="price-asc">ფასი (ზრდადობით)</MenuItem>
          <MenuItem value="price-desc">ფასი (კლებადობით)</MenuItem>
        </TextField>

        {/* <TextField
          className="search-room-input"
          id="outlined-select-currency"
          select
          label="Room Type"
          value={ItemID}
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
        </TextField> */}
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
                <h3>{`${room.price} ლარი`}</h3>
                {room.id === 5 ? (
                  <div onClick={() => handleFamilyRoomClick(room.id)}>
                    <p>ყიდვა</p>
                  </div>
                ) : (
                  <Link to={`/booknow/${room.type}`}>
                    <p>ყიდვა</p>
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
