import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Selected Value</th>
          <th>Selected Value Two</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index + 1}>
            <td>{index + 1}</td>
            <td>{item.selectedValue}</td>
            <td>{item.selectedValueTwo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
