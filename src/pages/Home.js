import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import data from "../data/data.json";

const Home = () => {
  return (
    <div>
      <div className="container_page">
        <Banner />
        <ul className="card">
          {data.map((data, id) => (
            <Card key={id} data={data} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
