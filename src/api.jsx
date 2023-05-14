import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Components/Card/Card";
import { Button, Form, FormControl } from "react-bootstrap";

const Api = () => {
  const [data, setData] = useState();
  const [searchText, setSearchText] = useState("");

  const searchShow = () => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}:${searchText}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}all`)
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="wrapper">
      <Form className="d-flex w-50 m-auto mt-4 mb-2 searchBar justify-content-center align-items-center">
        <FormControl
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <Button variant="outline-primary" onClick={searchShow}>
          Search
        </Button>
      </Form>
      <div className="flexBox">
        {data?.map((movie, id) => {
          if (movie.show.image)
            return <Card key={id} data={movie} className="movieCard" />;
        })}
      </div>
    </div>
  );
};

export default Api;
