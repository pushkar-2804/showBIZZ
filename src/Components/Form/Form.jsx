import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

const MovieForm = (props) => {
  const regex_name =
    /^[a-zA-Z]{2,15}(\s[a-zA-Z.]{1,10})?(\s[a-zA-Z]{2,10})?(\s[a-zA-Z]{2,10})?$/;
  const regex_contact = /^[6-9]([0-9]){9}$/;
  const [noerror, setnoerror] = useState(false);
  let errors = {};

  const [bookingData, setBookingData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    numTickets: 1,
  });
  // console.log(bookingData.numTickets);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setBookingData({ ...bookingData, [name]: value });

    // console.log(bookingData);
  };
  const handleSubmit = (event) => {
    checkError();
    console.log(errors);
    console.log(noerror);
    event.preventDefault();
    // console.log(bookingData);
    if (noerror) {
      props.setShowModal(false);
      localStorage.setItem("bookingData", JSON.stringify(bookingData));
    }
  };

  const handleClose = () => {
    props.setShowModal(false);
  };

  const checkError = () => {
    errors = {};
    setnoerror(true);

    //VALIDATING NAME
    if (regex_name.test(bookingData.name.trim())) {
      bookingData.name = bookingData.name.trim();
      errors.name = "";
    } else {
      console.log("fddf");
      setnoerror(false);
      errors.name = "Please Enter Full Name";
      return errors;
    }
    // Validating mobile
    if (regex_contact.test(bookingData.phone.trim())) {
      errors.phone = "";
      bookingData.phone = bookingData.phone.trim();
    } else {
      setnoerror(false);
      errors.phone = "Invalid Mobile Number";
      return errors;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Movie Name</Form.Label>
      <Form.Group controlId="movie">
        <Form.Control
          type="text"
          disabled
          value={props.movie}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          className="border border-danger"
          placeholder="Enter your name"
          value={bookingData.name}
          onChange={handleChange}
          required
        />
        <div className="text-danger small">*Enter Valid Name</div>
      </Form.Group>

      <Form.Group controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="number"
          name="phone"
          placeholder="Enter Phone Number"
          value={bookingData.phone}
          onChange={handleChange}
          required
        />
        <div className="text-danger small">*Enter valid Phone</div>
      </Form.Group>

      <Form.Group controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          name="date"
          min={new Date().toISOString().slice(0, 10)}
          placeholder="Select date"
          value={bookingData.date}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="time">
        <Form.Label>Show Time</Form.Label>
        <Form.Control
          type="time"
          name="time"
          placeholder="Select show time"
          value={bookingData.time}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Number of Tickets</Form.Label>
        <div className="d-flex align-items-center">
          <Button
            variant="primary"
            size="sm"
            onClick={() =>
              setBookingData({
                ...bookingData,
                numTickets: Math.max(1, bookingData.numTickets - 1),
              })
            }
          >
            -
          </Button>
          <Form.Control
            type="number"
            name="numTickets"
            min="1"
            disabled
            value={bookingData.numTickets}
            // onChange={handleNumTicketsChange}
            style={{ width: "50px", margin: "0 10px" }}
            required
          />
          <Button
            variant="primary"
            size="sm"
            onClick={() =>
              setBookingData({
                ...bookingData,
                numTickets: Math.min(10, bookingData.numTickets + 1),
              })
            }
          >
            +
          </Button>
        </div>
      </Form.Group>

      <Modal.Footer>
        <button onClick={handleClose}>Close</button>
        <button type="submit" className="btn btn-danger">
          Book Ticket
        </button>
      </Modal.Footer>
    </Form>
  );
};

export default MovieForm;
