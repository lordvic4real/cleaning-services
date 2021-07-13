import React from "react";
import styled from "styled-components";
const Wrap = styled.div`
  padding: 5% 7%;
  background: white;
  .title {
    font-family: "Oswald", sans-serif;
  }
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
  .d-flex {
    @media (max-width: 767px) {
      flex-wrap: wrap;
    }
  }
  h6 {
    margin-top: 40px;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    line-height: 30px;
    font-family: "Inter", sans-serif;
  }
`;

export default function Commercial() {
  return (
    <>
      <Wrap>
        <h3 className="title text-center pb-5">
          COMMERCIAL AND INDUSTRAIL CLEANING
        </h3>
        <div className="row gutters-2">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex ">
            <div className="pr-4">
              <img src="/images/1.jpg" alt="commercial pix" />
            </div>
            <div>
              <h6>ONSECTETUR EUISMOD</h6>
              <p>
                Ut mi justo, accumsan sed malesua da ac, suscipit in orci. Nulla
                ac dui digni ssim lectus tempor egest.
                <br />
                Ut mi justo, accumsan sed malesua da ac, suscipit in orci. Nulla
                ac dui digni ssim lectus tempor egest.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex ">
            <div className="pr-4">
              <img src="/images/1.jpg" alt="commercial pix" />
            </div>
            <div>
              <h6>ONSECTETUR EUISMOD</h6>
              <p>
                Ut mi justo, accumsan sed malesua da ac, suscipit in orci. Nulla
                ac dui digni ssim lectus tempor egest.
                <br />
                Ut mi justo, accumsan sed malesua da ac, suscipit in orci. Nulla
                ac dui digni ssim lectus tempor egest.
              </p>
            </div>
          </div>
        </div>
      </Wrap>
    </>
  );
}
