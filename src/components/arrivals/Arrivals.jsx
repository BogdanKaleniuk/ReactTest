import React from "react";
import "./arrivals.css";
import Card from "../card/Card";
import cat01img from "../../img/categories/01.jpg";
import cat02img from "../../img/categories/02.jpg";
import cat03img from "../../img/categories/03.jpg";

const Arrivals = () => {
  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals__header">
          <h2 className="title-2">NEW ARRIVALS</h2>
        </div>
        <div className="arrivals__cards">
          <Card title="Hoodies & Sweetshirt" img={cat01img} />
          <Card title="Coast & Parkas" img={cat02img} />
          <Card title="Tees & T-Shift" img={cat03img} />
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
