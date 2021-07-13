import React from "react";
import styled from "styled-components";
import Image from "next/image";
const IntroWrap = styled.div`
  .mybg {
    min-height: 300px;
    background: #40acff70;
  }
  .title {
    text-align: center;
    font-family: "Playball", cursive;
    padding-top: 50px;
    color: white;
    font-size: 36px;
  }
  .value-wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    grid-gap: 20px;
    padding: 3% 5%;
    font-family: "Inter", sans-serif;
    color: white;
    @media (max-width: 768px) {
      grid-template-columns: 2fr;
    }
  }
  .text {
    font-family: "Inter", sans-serif;
    color: #fff;
    font-size: 15px;
    padding: 3%;
    @media (max-width: 768px) {
      font-size: 177%;
    }
  }
`;

export default function Intro() {
  return (
    <>
      <IntroWrap>
        <div className="mybg">
          <div className="text-center">
            <h3 className="title">Our Core Values</h3>
            <p className="text">
              Vestibulum facilisis ligula urna, vitae cursus tortor malesuada
              eu.Vestibul Morbi quis um ante ipsum primis in <br />
              ultrices posuere lectus non nunc varius sed nec neque.
            </p>
          </div>
          <div className="value-wrap">
            <div className="text-center">
              <Image
                src="/images/hex.png"
                width={110}
                height={110}
                alt="hex pix"
              />
              <div className="card-body">
                <h6 className="card-title">VESTIBULUM FACILISIS LIGULA</h6>
                <p className="card-text">
                  Vestibulum facilisis ligula urna, vitae cursus
                  <br /> tortor malesuada eu. Morbi quis lectus non nunc lectus
                  non nunc
                </p>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/images/hex.png"
                width={110}
                height={110}
                alt="hex pix"
              />
              <div className="card-body">
                <h6 className="card-title">VESTIBULUM FACILISIS LIGULA</h6>
                <p className="card-text">
                  Vestibulum facilisis ligula urna, vitae cursus
                  <br /> tortor malesuada eu. Morbi quis lectus non nunc lectus
                  non nunc
                </p>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/images/hex.png"
                width={110}
                height={110}
                alt="hex pix"
              />
              <div className="card-body">
                <h6 className="card-title">VESTIBULUM FACILISIS LIGULA</h6>
                <p className="card-text">
                  Vestibulum facilisis ligula urna, vitae cursus
                  <br /> tortor malesuada eu. Morbi quis lectus non nunc lectus
                  non nunc
                </p>
              </div>
            </div>
          </div>
        </div>
      </IntroWrap>
    </>
  );
}
