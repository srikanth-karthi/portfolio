import React from "react";


import "./styles/HexagonGrid.css";

const HexagonGrid = ({ items }) => {
  return (
    <ul className="hexagon-grid-container">
      {items.map((item, index) => (
        <li key={index} className={`hexagon hexagon-${item.color}`}>
          <div className="hexagon-inner">
            <img
              className="hexagon-avatar-img"
              src={item.image}
              alt={item.name}
            />
            <span className="hexagon-name">{item.name}</span>
            <span className="hexagon-metric-label">{item.metricLabel}</span>
            <span className="hexagon-featured-score">{item.score}</span>
            <span
              className={`hexagon-icon-left hexagon-icon-${item.iconLeftColor}`}
            >
              <i className={item.iconLeft}></i>
            </span>
            <span
              className={`hexagon-icon-right hexagon-icon-${item.iconRightColor}`}
            >
              <i className={item.iconRight}></i>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HexagonGrid;