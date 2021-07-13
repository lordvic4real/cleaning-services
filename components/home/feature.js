import React from "react";
import styled from "styled-components";

const IntroWrap = styled.div`
  .mybg {
    min-height: 300px;
    background: white;
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
    grid-template-columns: 1fr 2fr 1fr;
    justify-content: center;
    grid-gap: 20px;
    padding: 3% 5%;
    @media (max-width: 768px) {
      grid-template-columns: 2fr;
    }
  }
  .card-text {
    color: #222;
    font-family: "Inter", sans-serif;
    font-size: 15px;
    text-align: justify;
  }
  .text {
    font-family: "Inter", sans-serif;
    color: #222;
    font-size: 15px;
  }
  .card-title {
    color: #222;
    font-family: "Oswald" sans-serif;
    font-weight: 600;
  }
`;

export default function Features() {
  return (
    <>
      <IntroWrap>
        <div className="mybg">
          <div className="text-center">
            <h3 className="title">Some of Our Great Features</h3>
            <p className="text">
              Vestibulum facilisis ligula urna, vitae cursus tortor malesuada
              eu. Morbi quis um ante ipsum primis in faucibus orci
            </p>
          </div>
          <div className="value-wrap">
            <div className="text-center">
              <div className="card-body">
                <h6 className="card-title">FACILISIS LIGULA</h6>
                <p className="card-text">
                  Morbi quis lectus non nunc varius arius sed nec neque.
                  Vestibulum ante ipsum primis in faucibus
                </p>
              </div>
              <div className="card-body">
                <h6 className="card-title">DAEU MORBI QUILECTUS</h6>
                <p className="card-text">
                  Morbi quis lectus non nunc varius arius sed nec neque.
                  Vestibulum ante ipsum primis in faucibus
                </p>
              </div>
            </div>
            <div className="text-center">
              <img
                src="/images/page.jpg"
                width="100%"
                height="100%"
                alt="hex pix"
              />
            </div>
            <div className="text-center">
              <div className="card-body">
                <h6 className="card-title">FACILISIS LIGULA</h6>
                <p className="card-text">
                  Morbi quis lectus non nunc varius arius sed nec neque.
                  Vestibulum ante ipsum primis in faucibus
                </p>
              </div>
              <div className="card-body">
                <h6 className="card-title">DAEU MORBI QUILECTUS</h6>
                <p className="card-text">
                  Morbi quis lectus non nunc varius arius sed nec neque.
                  Vestibulum ante ipsum primis in faucibus
                </p>
              </div>
            </div>
          </div>
        </div>
      </IntroWrap>
    </>
  );
}
