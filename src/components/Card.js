import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ data }) => {
  const { id } = data;
  return (
    <div className="card_block">
      <li className="card_content">
        <NavLink to={`/logement/${id}`}>
          <img src={data.cover} alt={data.title} />
          <div className="gradient"></div>
          <h3>{data.title}</h3>
        </NavLink>
      </li>
    </div>
  );
};

export default Card;
