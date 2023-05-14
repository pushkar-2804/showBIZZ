import React, { useEffect, useState } from "react";
import "./ViewMore.css";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import MovieForm from "../../Components/Form/Form";
import { showMovieData } from "../../Components/Card/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewMore = () => {
  const notify = () => toast.success("Ticket Succesfully Booked!");
  const [showModal, setShowModal] = useState(false);
  const nav = useNavigate();
  useEffect(() => {
    if (showMovieData === undefined) nav("/");
  }, []);

  return (
    <div className="aboutShow">
      <img
        className="showImage"
        src={showMovieData?.show?.image?.original}
        srcSet={
          (showMovieData?.show?.image?.original,
          showMovieData?.show?.image?.medium)
        }
      />
      <div className="mask"></div>
      <div className="desc">
        <h2>{showMovieData?.show?.name}</h2>
        <p className="showSummary">
          {showMovieData?.show?.summary.slice(3, -4)}
        </p>
        <div className="light">
          <span className="showDetail">
            IMDb {showMovieData?.show.rating?.average}
          </span>
          <span className="showDetail">{showMovieData?.show?.runtime}min</span>
          <span className="showDetail">
            {showMovieData?.show?.premiered?.slice(0, 4)}
          </span>
          <span className="showDetail">
            <Link to={showMovieData?.show?.network?.officialSite}>
              {showMovieData?.show?.network?.name}
            </Link>
          </span>
        </div>
        <div className="showGenre">
          <span className="showDetail">
            {showMovieData?.show?.genres.join(" ")}
          </span>
        </div>
        <div className="bookTicket">
          <button className="btn btn-danger" onClick={() => setShowModal(true)}>
            Book Tickets
          </button>
          {showModal && (
            <Modal
              centered
              show={showModal}
              onHide={() => setShowModal(false)}
              className="modal"
            >
              <Modal.Header closeButton>
                <Modal.Title>Book Tickets</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <MovieForm
                  movie={showMovieData?.show?.name}
                  setShowModal={setShowModal}
                  notify={notify}
                />
              </Modal.Body>
            </Modal>
          )}
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default ViewMore;
