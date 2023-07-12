import React, { useState } from 'react';
import './WarehouseForm.css';

const WarehouseForm = ({ addWarehouse }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [limit, setLimit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addWarehouse({ name, location, limit });
    setName('');
    setLocation('');
    setLimit('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Warehouse Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Warehouse Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
      </label>
      <label>
        Warehouse Limit:
        <input type="number" value={limit} onChange={(e) => setLimit(e.target.value)} required />
      </label>
      <button type="submit">Add Warehouse</button>
    </form>
  );
};

export default WarehouseForm;