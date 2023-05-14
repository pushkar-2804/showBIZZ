import Carousel from "react-bootstrap/Carousel";
import img from "../../assets/Pushkar.jpg";
import img2 from "../../assets/pic.jpg";
import img3 from "../../assets/ProfileX.jpg";

function CarouselBox() {
  return (
    <Carousel
      fade
      interval={1000}
      style={{ height: "90vh", overflow: "hidden" }}
    >
      <Carousel.Item>
        <img className=" w-100  " src={img} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBox;
