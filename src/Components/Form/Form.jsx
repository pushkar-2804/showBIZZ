import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

const MovieForm = (props) => {
  const regex_name =
    /^[a-zA-Z]{2,15}(\s[a-zA-Z.]{1,10})?(\s[a-zA-Z]{2,10})?(\s[a-zA-Z]{2,10})?$/;
  const regex_contact = /^[6-9]([0-9]){9}$/;
  // const [noerror, setnoerror] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  let noError = true;

  const [bookingData, setBookingData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    numTickets: 1,
  });

  const handleChange = (e) => {
    // setnoerror(true);
    const { name, value } = e.target;
    if (name === "name") setNameError(false);
    if (name === "phone") setMobileError(false);
    setBookingData({ ...bookingData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    checkError();
    console.log(noError);
    if (noError) {
      props.setShowModal(false);
      localStorage.setItem("bookingData", JSON.stringify(bookingData));
    }
  };

  const handleClose = () => {
    props.setShowModal(false);
  };

  const checkError = () => {
    // errors = {};
    // setnoerror(true);
    noError = true;

    //VALIDATING NAME
    if (regex_name.test(bookingData.name.trim())) {
      bookingData.name = bookingData.name.trim();
      setNameError(false);
    } else {
      // setnoerror(false);
      noError = false;
      setNameError(true);
    }
    // Validating mobile
    if (regex_contact.test(bookingData.phone.trim())) {
      setMobileError(false);
      bookingData.phone = bookingData.phone.trim();
    } else {
      // setnoerror(false);
      noError = false;
      setMobileError(true);
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
          className={nameError ? "border border-danger" : ""}
          placeholder="Enter your name"
          value={bookingData.name}
          onChange={handleChange}
          required
        />
        {nameError && (
          <div className="text-danger small">*Enter Valid Name</div>
        )}
      </Form.Group>

      <Form.Group controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="number"
          name="phone"
          className={mobileError ? "border border-danger" : ""}
          placeholder="Enter Phone Number"
          value={bookingData.phone}
          onChange={handleChange}
          required
        />
        {mobileError && (
          <div className="text-danger small">*Enter valid Phone</div>
        )}
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
