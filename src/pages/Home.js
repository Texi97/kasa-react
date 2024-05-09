import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Card from "../components/Card";
import data from "../data/data.json";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <ul className="card">
        {data.map((data, id) => (
          <Card key={id} data={data} />
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Home;
