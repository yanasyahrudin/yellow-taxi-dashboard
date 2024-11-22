import React, { useState, useEffect } from 'react';
import MapView from './components/MapView';
import Filters from './components/Filters';
import Charts from './components/Charts';

const App = () => {
  const [filters, setFilters] = useState({ minFare: 0, maxFare: 100, maxDistance: 10 });
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = new URLSearchParams(filters).toString();
      const response = await fetch(`http://localhost:4000/api/trips?${query}`);
      const data = await response.json();
      setTrips(data);
    };

    fetchData();
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-500">
        Yellow Taxi Dashboard - 2014
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-1">
          <Filters filters={filters} setFilters={setFilters} />
        </div>
        <div className="col-span-1 md:col-span-2">
          <Charts trips={trips} />
        </div>
      </div>
      <div className="mt-8">
        <MapView trips={trips} />
      </div>
    </div>
  );
};

export default App;
