import React from "react";
import styled from "styled-components";
import Link from "next/link";
import {
  YoutubeFilled,
  InstagramFilled,
  PhoneFilled,
  MailFilled,
  FacebookFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";

const StyledFooter = styled.div`
  min-height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .social {
    min-height: 76px;
    background: #00000075;
    /* background: rgba(1, 41, 72, 0.23); */
    color: white;
    text-align: center;
    display: grid;
    place-items: center;
  }
  .footer-content {
    display: grid;
    grid-template-columns: 2fr 3fr 1.3fr;
    /* align-items: center; */
    padding: 70px 100px;
    min-height: 250px;
    @media (max-width: 768px) {
      grid-template-columns: 2fr;
      height: auto;
      padding: 22px 5%;
      grid-gap: 30px;
    }
  }
  ul {
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  .icon-bg {
    transition: 0.4s ease all;
  }
  .icon-bg {
    background: transparent;
  }
  .icon-bg {
    width: 40px;
    height: 40px;
    background: #da3673;
    border-radius: 50%;
    visibility: visible;
    display: grid;
    place-items: center;
    /* transform: rotate(-10deg); */
    margin: 12px;
  }
  .icon-wrap {
    display: flex;
  }
  .round-bg {
    width: 50px;
    height: 50px;
    border: 1px solid #40acff;
    display: grid;
    place-items: center;
    border-radius: 100%;
    @media (max-width: 768px) {
      font-size: 100%;
      width: 40px;
      height: 40px;
    }
  }
  .wrap {
    display: inline-flex;
    align-items: center;
    min-height: 55px;
  }
  .text-capitalize {
    font-size: 22.2px;
    font-family: "Oswald", sans-serif;
    font-weight: 600.88888;
    color: #222222;
    @media (max-width: 768px) {
      font-size: 140%;
      padding-bottom: 15px;
    }
  }
  .round-bg,
  .icon-bg {
    background: #da3673;
    color: white;
    border: none;
    transition: 0.4s ease all;
  }
  .footer-content p,
  li {
    text-transform: capitalize;
    line-height: 30px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 110%;
      line-height: 28px;
    }
  }
  .sm {
    @media (max-width: 768px) {
      font-size: 115%;
      line-height: 28px;
    }
  }
  li {
    list-style: none;
    padding: 0px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div className="footer-content">
        <div>
          <h4 className="text-capitalize">cleaning service</h4>
          <p>
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
        <div>
          <h4 className="text-capitalize">services</h4>
          <ul>
            <Link href="/">
              <li>laundry</li>
            </Link>
            <Link href="/">
              <li>Paid Media</li>
            </Link>
            <Link href="/">
              <li>office & commercial cleaning</li>
            </Link>
            <Link href="/">
              <li>window & door cleaning</li>
            </Link>
            <Link href="/">
              <li>carpet & upholstery cleaning </li>
            </Link>
            <Link href="/">
              <li>house cleaning & maid service</li>
            </Link>
            <Link href="/">
              <li>fumigation services</li>
            </Link>
          </ul>
        </div>

        <div>
          <h4 className="text-capitalize">contact</h4>
          <div>
            <div className="wrap">
              <span className="round-bg mb-3 mr-2">
                <PhoneFilled />
              </span>
              <span className="pr-3 sm">
                <li>07060936070</li>
              </span>
            </div>

            <div className="wrap">
              <span className="round-bg">
                <MailFilled />
              </span>
              <span className="pl-2 sm">
                <li>hello@lordvic.com</li>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="social">
        <div className="icon-wrap">
          <span className="icon-bg">
            <YoutubeFilled />
          </span>
          <span className="icon-bg">
            <InstagramFilled />
          </span>
          <span className="icon-bg">
            <TwitterCircleFilled />
          </span>
          <span className="icon-bg">
            <FacebookFilled />
          </span>
        </div>
      </div>
    </StyledFooter>
  );
}
