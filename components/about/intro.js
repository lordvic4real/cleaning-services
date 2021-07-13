import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 5%;
  .title {
    text-align: center;
    font-family: "Playball", cursive;
    padding-top: 120px;

    font-size: 36px;
  }
  .intro-wrap {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    justify-content: center;
    grid-gap: 20px;
    padding: 3% 5%;
    font-family: "Inter", sans-serif;
    @media (max-width: 768px) {
      grid-template-columns: 2fr;
      padding: 3%;
      font-size: 120%;
    }
  }
`;
export default function Intro() {
  return (
    <>
      <Wrapper>
        <h3 className="title">who we are</h3>
        <div className="intro-wrap">
          <div>
            <h5>CURSUSTORTOR MALESUADA </h5>
            <p>
              Praesent non sapien cursus, blandit turpis lacinia, vestibulum
              lectus. In purus ipsum, aliquet eget elit vel, laoreet viverra mi.
              Aenean non congue ex. In dictum libero id consectetur tincidunt.
              Nulla sed euismod velit. Etiam fringilla, nibh auctor efficitur
              sollicitudin, nunc dolor pulvinar erat
              <br /> <br />
              Praesent non sapien cursus, blandit turpis lacinia, vestibulum
              lectus. In purus ipsum, aliquet eget elit vel, laoreet viverra mi.
              Aenean non congue ex. In dictum libero id consectetur tincidunt.
              Nulla sed euismod velit. Etiam fringilla, nibh auctor efficitur
              sollicitudin, nunc dolor pulvinar erat
            </p>
          </div>
          <div>
            <h5>CURSUSTORTOR MALESUADA </h5>
            <p>
              Praesent non sapien cursus, blandit turpis lacinia, vestibulum
              lectus. In purus ipsum, aliquet eget elit vel, laoreet viverra mi.
              Aenean non congue ex. In dictum libero id consectetur tincidunt.
              Nulla sed euismod velit. Etiam fringilla, nibh auctor efficitur
              sollicitudin, nunc dolor pulvinar erat
              <br /> <br />
              Praesent non sapien cursus, blandit turpis lacinia, vestibulum
              lectus. In purus ipsum, aliquet eget elit vel, laoreet viverra mi.
              Aenean non congue ex. In dictum libero id consectetur tincidunt.
              Nulla sed euismod velit. Etiam fringilla, nibh auctor efficitur
              sollicitudin, nunc dolor pulvinar erat
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
