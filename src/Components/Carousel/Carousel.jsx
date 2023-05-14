import Carousel from "react-bootstrap/Carousel";

function CarouselBox(props) {
  const data = props.data;
  return (
    <Carousel
      fade
      interval={1500}
      style={{
        height: "90vh",
        width: "70vw",
        margin: "auto",
        overflow: "hidden",
      }}
    >
      {data &&
        data.map((show) => {
          if (show?.show?.image?.original) {
            return (
              <Carousel.Item key={show.show.id}>
                <img
                  className=" w-100  "
                  src={show?.show?.image?.original}
                  alt={show?.show?.name}
                />
                <Carousel.Caption
                  style={{
                    color: "white",
                    fontSize: "3rem",
                    top: "5%",
                    mixBlendMode: "difference",
                  }}
                >
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
