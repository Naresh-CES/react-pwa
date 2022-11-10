import React from 'react';

export const Users = ({ props }) => {
  console.log(props);
  return (
    <div class='container text-center'>
      <div class='row align-items-start'>
        {props.map((res) => (
          <div class='card col m-3'>
            <img src={res.avatar} class='card-img-top' alt={res.name}></img>
            <div class='card-body'>{res.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
