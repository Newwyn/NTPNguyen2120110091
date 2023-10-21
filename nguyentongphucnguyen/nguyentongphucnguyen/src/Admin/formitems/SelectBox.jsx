import React from 'react';

export default function SelectBox({ name, defaultValue, data, ...props }) {
  const handleFunction = props.handleFunction;

  return (
    <select name={name} className="form-select custom-select" onChange={handleFunction} defaultValue={defaultValue}>
      <option key="-1" value="-1">
        {"-----"}
      </option>
      {data.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}