import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
  return (
    <Nav className="d-flex justify-content-center align-items-center">
      <div className="container-fluid ">
        <div className="row">
          {" "}
          <div className="col-2 p-2">logo</div>
          <div className="nav-container col-lg-8 ">
            <div className="d-flex  justify-content-center align-items-center">
              <List className="d-flex m-0 justify-content-between align-items-center">
                <Link className="link" to="/">
                  <div className="list-item-container d-flex flex-column justify-content-center align-items-center">
                    <li className="px-2">home</li>
                    <div className="underline-container">
                      <div className="underline"></div>
                    </div>
                  </div>
                </Link>
                <Link className="link" to="/about">
                  <div className="list-item-container d-flex flex-column justify-content-center align-items-center">
                    <li className="px-2">about</li>
                    <div className="underline-container">
                      <div className="underline"></div>
                    </div>
                  </div>
                </Link>
                <Link className="link" to="/projects">
                  <div className="list-item-container d-flex flex-column justify-content-center align-items-center">
                    <li className="px-2">react projects</li>
                    <div className="underline-container">
                      <div className="underline"></div>
                    </div>
                  </div>
                </Link>
              </List>
            </div>
          </div>
        </div>
      </div>
      <GiHamburgerMenu className="aside-btn" />
    </Nav>
  );
}

const Nav = styled.nav`
  color: white;
  background-color: #171b1f;
  height: 10vh;
`;

const List = styled.ul`
  width: 50%;
  list-style: none;
`;
