import React from 'react';

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <label>
        Min Fare:
        <input
          type="number"
          name="minFare"
          value={filters.minFare}
          onChange={handleChange}
        />
      </label>
      <label>
        Max Fare:
        <input
          type="number"
          name="maxFare"
          value={filters.maxFare}
          onChange={handleChange}
        />
      </label>
      <label>
        Distance:
        <input
          type="number"
          name="maxDistance"
          value={filters.maxDistance}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Filters;
