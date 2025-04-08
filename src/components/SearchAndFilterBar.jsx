import React, { useState, useEffect } from "react";

const SearchAndFilterBar = ({ searchQuery, setSearchQuery, onSearch }) => {
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    price: "",
    rating: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query, filters); // This is called whenever the search input changes
  };

  const handleSearchClick = () => {
    onSearch(searchQuery, filters); // Trigger search when user clicks "Search"
  };

  // Prevent automatic search trigger on filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => {
      const updatedFilters = { ...prev, [name]: value };
      onSearch(searchQuery, updatedFilters); // Trigger search when filter is applied
      return updatedFilters;
    });
  };

  return (
    <div className="bg-white shadow-md mb-6 p-4 rounded-lg">
      <h3 className="flex mt-4 mb-4 font-semibold text-blue-950 text-xl">
        Search for services
      </h3>

      <input
        type="text"
        placeholder="Search services..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="mb-4 p-3 border rounded-lg w-full"
      />

      <div className="gap-4 grid grid-cols-1 md:grid-cols-4">
        <select
          name="category"
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">All Categories</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Electrical">Electrical</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Moving">Appliance Repair</option>
        </select>

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleFilterChange}
          className="p-2 border rounded"
        />

        <select
          name="price"
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">Any Price</option>
          <option value="0-50">₦0 - ₦50</option>
          <option value="50-100">₦50 - ₦100</option>
          <option value="100+">₦100+</option>
        </select>

        <select
          name="rating"
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">Any Rating</option>
          <option value="4">4★ & up</option>
          <option value="3">3★ & up</option>
          <option value="2">2★ & up</option>
        </select>
      </div>

      <button
        onClick={handleSearchClick}
        className="bg-green-600 hover:bg-green-700 mt-4 px-6 py-2 rounded-lg text-white"
      >
        Search
      </button>
    </div>
  );
};

export default SearchAndFilterBar;
