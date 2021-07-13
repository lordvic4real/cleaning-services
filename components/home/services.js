import React from "react";
import styled from "styled-components";
const IntroWrap = styled.div`
  .mybg {
    min-height: 300px;
    padding: 40px 0;
  }
  .title {
    text-align: center;
    font-family: "Playball", cursive;
    padding-top: 50px;
    color: #222;
    font-size: 36px;
  }
  .value-wrap {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    grid-gap: 20px;
    padding: 3% 5%;
    font-family: "Inter", sans-serif;
    @media (max-width: 768px) {
      grid-template-columns: 2fr;
    }
  }
  .text {
    font-family: "Inter", sans-serif;
    color: #666;
    font-size: 15px;
  }
  img {
    border-radius: 100%;
    object-fit: cover;
    object-position: center;
    height: 200px;
    width: 200px;
  }

  h6 {
    text-transform: uppercase;
    font-size: 15px;
    line-height: 24px;
    font-weight: 600;
    margin-top: 15px;
    color: #222;
    font-family: "Oswald" sans-serif;
  }
`;

export default function Services() {
  return (
    <>
      <IntroWrap>
        <div className="mybg">
          <div className="text-center">
            <h3 className="title">Services We Offer</h3>
          </div>
          <div className="value-wrap">
            <div className="text-center">
              <img
                src="/images/s2.jpg"
                width="100%"
                height="100%"
                alt="service pix"
              />
              <h6>windows and door cleaning</h6>
            </div>
            <div className="text-center">
              <img
                src="/images/s4.jpg"
                width="100%"
                height="100%"
                alt="service pix"
              />
              <h6>house maid services</h6>
            </div>
            <div className="text-center">
              <img
                src="/images/s5.jpg"
                width="100%"
                height="100%"
                alt="service pix"
              />
              <h6>room cleaning services</h6>
            </div>
            <div className="text-center">
              <img
                src="/images/s6.jpg"
                width="100%"
                height="100%"
                alt="service pix"
              />
              <h6>laundry services</h6>
            </div>
            <div className="text-center">
              <img
                src="/images/1.jpg"
                width="100%"
                height="100%"
                alt="service pix"
              />
              <h6>office and commercial cleaning</h6>
            </div>
          </div>
        </div>
      </IntroWrap>
    </>
  );
}
