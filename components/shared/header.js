import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const StyledHeader = styled.div`
  .nav-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(1, 41, 72, 0.23);
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
    z-index: 20000;
  }
  .logo-container {
    display: flex;
    align-items: center;
  }
  .brand {
    padding: 0 12px;
    font-size: 27px;
    text-transform: capitalize;
    color: white;
    cursor: pointer;
    font-family: "Playball", cursive;
  }
  nav a {
    color: #fafafa;
    font-size: 19.2px;
    font-family: "Oswald", sans-serif;
    transition: 0.4s ease-in;
    padding: 20px;
    text-transform: capitalize;
    font-weight: 400;
    text-decoration: none;
  }
  nav a:hover {
    color: #40acff;
    z-index: 1;
    transition: 0.3s ease all;
  }
`;

export default function Header() {
  return (
    <>
      <StyledHeader>
        <div className="nav-content">
          <div className="logo-container">
            <Image
              src="/images/brand_img.png"
              alt="brand pix"
              width={55}
              height={55}
            />
            <Link href="/">
              <span className="brand">cleaning services</span>
            </Link>
          </div>
          <nav>
            <span>
              <Link href="/">
                <a>Home</a>
              </Link>
            </span>
            <span>
              <Link href="/about">
                <a>About us</a>
              </Link>
            </span>
            <span>
              <Link href="/">
                <a>Services</a>
              </Link>
            </span>
            <span className="">
              <Link href="/">
                <a>Customer Care</a>
              </Link>
            </span>
            <span className="">
              <Link href="/">
                <a>Contact</a>
              </Link>
            </span>
          </nav>
        </div>
      </StyledHeader>
    </>
  );
}
