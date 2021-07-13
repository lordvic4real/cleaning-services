import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
const BannerWrapper = styled.div`
  height: auto;
  img {
    object-position: center top;
    object-fit: cover;
    height: 550px;
  }
  .carousel-indicators li {
    margin-bottom: 80px;
  }
  .cap {
    background: #00000090;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    display: grid;
    place-items: center;
    left: 0;
    right: 0;
  }
  .title {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 54px;
    /* color: #072c59; */
    text-transform: capitalize;
    @media (max-width: 768px) {
      font-size: 145%;
      line-height: 38px;
    }
  }
  .cap p {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 34px;
    text-transform: capitalize;
    /* color: #072c59; */
    @media (max-width: 768px) {
      font-size: 120%;
      line-height: 24px;
      font-weight: 400;
      color: whitesmoke;
    }
  }
`;

export default function Banner() {
  return (
    <>
      <BannerWrapper>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/3.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="cap">
              <div>
                <h3 className="title">Offering high quality cleaning</h3>

                <p> services at affordable prices.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption className="cap">
              <div>
                <h3 className="title">
                  high quality cleaning services <br />
                </h3>
                <p>
                  we offer high quality cleaning services <br />
                  at affordable prices
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/1.jpg"
              alt="Third slide"
            />

            <Carousel.Caption className="cap">
              <div>
                <h3 className="title">Have a cleaning related problem?</h3>
                <p>Stay in touch!</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/4.jpg"
              alt="Third slide"
            />

            <Carousel.Caption className="cap">
              <div>
                <h3 className="title">janitorial services</h3>
                <p>
                  We provide a great selection <br />
                  of janitorial services
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </BannerWrapper>
    </>
  );
}
