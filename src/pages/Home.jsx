import React, { useEffect, useState } from "react";
import CarouselBox from "../Components/Carousel/Carousel";
import Footer from "../Components/Footer/Footer";
import Shows from "../Components/Shows";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState();
  const [carouselData, setCarouselData] = useState();

  useEffect(() => {
    axios
      // .get(`${import.meta.env.VITE_APP_URL}all`)
      .get(`https://api.tvmaze.com/search/shows?q=all`)
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
        setCarouselData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <CarouselBox data={carouselData} />
      <Shows data={data} setData={setData} />
      <Footer />
    </div>
  );
};

export default Home;
