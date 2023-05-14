import axios from "axios";
import React, { useState } from "react";
import Card from "./Card/Card";
import { Button, Form, FormControl } from "react-bootstrap";

const Shows = (props) => {
  const [searchText, setSearchText] = useState("");
  const data = props.data;
  const searchShow = () => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}:${searchText}`)
      .then((res) => {
        console.log(res.data);
        props.setData(res.data);
      })
      .catch((err) => console.log(err));
  };

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

export default Shows;
