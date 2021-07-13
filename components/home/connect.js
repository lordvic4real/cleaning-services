import React from "react";
import styled from "styled-components";
const IntroWrap = styled.div`
  .mybg {
    min-height: 300px;
    padding: 30px 0;
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
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    grid-gap: 20px;
    padding: 3% 5%;
    font-family: "Inter", sans-serif;
    color: #666222;
    /* font-weight: 600; */
    @media (max-width: 768px) {
      grid-template-columns: 2fr;
    }
  }
  .text {
    font-family: "Inter", sans-serif;
    color: #666;
    font-size: 15px;
    /* font-weight: 500; */
  }
  .card-title {
    font-weight: 600;
    color: #222;
  }
  .card {
    min-height: 160px;
  }
`;

export default function Connect() {
  return (
    <>
      <IntroWrap>
        <div className="mybg">
          <div className="text-center">
            <h3 className="title">Why Choose Us</h3>
          </div>
          <div className="value-wrap">
            <div className="">
              <div className="card-body card">
                <h6 className="card-title">WE DELIVER PROMPTLY</h6>
                <p className="card-text">
                  we keep to time, and very professional about our work
                </p>
              </div>
            </div>
            <div className="">
              <div className="card-body card">
                <h6 className="card-title">ASSURANCE</h6>
                <p className="card-text">
                  We deliver service excellence by combining the best people
                  with the best tool; a core focus of the VicKlean Service
                  delivery model.
                </p>
              </div>
            </div>
            <div className="">
              <div className="card-body card">
                <h6 className="card-title">PROFESSIONAL AND SECURE</h6>
                <p className="card-text">
                  It’s critical you have people in your house and around your
                  family you can trust. To ensure we provide the most secure
                  service possible, every one of our cleaners undergo a thorough
                  background criminal check
                </p>
              </div>
            </div>
            <div className="">
              <div className="card-body card">
                <h6 className="card-title">CONVINIENCE</h6>
                <p className="card-text">
                  Who doesn’t want an easy and frictionless experience? we are
                  top of the game in ensuring customer satisfaction
                </p>
              </div>
            </div>
            <div className="">
              <div className="card-body card">
                <h6 className="card-title">Flexibility</h6>
                <p className="card-text">
                  In the world, where everything changes so quickly, being
                  flexible is a very precious skill. Our team understands and
                  takes this into consideration
                </p>
              </div>
            </div>
            <div className="">
              <div className="card-body card">
                <h6 className="card-title">Result Oriented</h6>
                <p className="card-text">
                  For us, it’s all about what adds value for you and your Home
                  and office we our touch of expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </IntroWrap>
    </>
  );
}
