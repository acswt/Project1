import React from 'react';
import './WarehouseTable.css';

const WarehouseTable = () => {
  return (
    <table className="warehouse-table">
      <thead>
        <tr>
          <th>Warehouse Name</th>
          <th>Warehouse Location</th>
          <th>Warehouse Limit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Warehouse 1</td>
          <td>Location 1</td>
          <td>100</td>
        </tr>
        <tr>
          <td>Warehouse 2</td>
          <td>Location 2</td>
          <td>200</td>
        </tr>
        <tr>
          <td>Warehouse 3</td>
          <td>Location 3</td>
          <td>150</td>
        </tr>
      </tbody>
    </table>
  );
};

export default WarehouseTable;