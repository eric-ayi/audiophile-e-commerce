import React from 'react';
import classes from "./header.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../../assets/shared/desktop/logo.svg";
import CartButton from "../Cart/CartButton";


const header = () => {
    return (
      <React.Fragment>
        <div className="header">
          <ReactLogo className="logo" />
          <nav>
            <ul>
              <li>
                <NavLink to="/" className="link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/headphones"
                  className="link"
                  activeClassName="active"
                >
                  Headphones
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/speakers"
                  className="active"
                  activeClassName="active"
                >
                  Speakers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/earphones"
                  className="link"
                  activeClassName="active"
                >
                  Earphones
                </NavLink>
              </li>
            </ul>
          </nav>
          <CartButton />
          <span className="line">&nbsp;</span>
        </div>
      </React.Fragment>
    );
  };



export default header;