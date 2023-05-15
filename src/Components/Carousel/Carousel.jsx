import Carousel from "react-bootstrap/Carousel";

function CarouselBox(props) {
  const data = props.data;
  return (
    <Carousel fade interval={1500} className="carousel">
      {data &&
        data.map((show) => {
          if (show?.show?.image?.original) {
            return (
              <Carousel.Item key={show.show.id}>
                <img
                  className="carouselImg"
                  src={show?.show?.image?.original}
                  alt={show?.show?.name}
                />
                <Carousel.Caption className="carouselCaption">
                  {show?.show?.name}
                </Carousel.Caption>
              </Carousel.Item>
            );
          }
        })}
    </Carousel>
  );
}

export default CarouselBox;
