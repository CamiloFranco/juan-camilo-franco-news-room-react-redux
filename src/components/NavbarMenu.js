import React from "react";
import { NavLink } from "react-router-dom";

const NavbarMenu = ({
  defaultCategory,
  onGetNews,
  onGetNewsCategory,
  onSearchNews
}) => {
  let input;

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark px-5 justify-content-between">
      <NavLink
        to="/"
        className="nav-link"
        activeClassName="active"
        onClick={() => onGetNews()}
      >
        <span
          className="navbar-brand font-weight-bold"
          style={{
            color: "#fff7f7",
            fontFamily: "Georgia",
            marginLeft: "-9px"
          }}
        >
          NEWS ROOM &nbsp;&nbsp;
          <i className="fa fa-newspaper-o" aria-hidden="true"></i>
        </span>
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto d-flex justify-content-end">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="https://"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categories
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink
                to="/politic"
                className="nav-link"
                activeClassName="active"
                onClick={() => onGetNewsCategory(1)}
              >
                <span className="dropdown-item">Política</span>
              </NavLink>
              <NavLink
                to="/international"
                className="nav-link"
                activeClassName="active"
                onClick={() => onGetNewsCategory(2)}
              >
                <span className="dropdown-item">Internacional</span>
              </NavLink>
              <NavLink
                to="/technology"
                className="nav-link"
                activeClassName="active"
                onClick={() => onGetNewsCategory(3)}
              >
                <span className="dropdown-item">Tecnología</span>
              </NavLink>
              <NavLink
                to="/entertaiment"
                className="nav-link"
                activeClassName="active"
                onClick={() => onGetNewsCategory(4)}
              >
                <span className="dropdown-item">Entretenimiento</span>
              </NavLink>
              <NavLink
                to="/sports"
                className="nav-link"
                activeClassName="active"
                onClick={() => onGetNewsCategory(5)}
              >
                <span className="dropdown-item">Deportes</span>
              </NavLink>
              <NavLink
                to="/design"
                className="nav-link"
                activeClassName="active"
                onClick={() => onGetNewsCategory(6)}
              >
                <span className="dropdown-item">Diseño</span>
              </NavLink>
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active"
                onClick={() => onGetNews()}
              >
                <div className="dropdown-divider"></div>
                <span className="dropdown-item">Home News</span>
              </NavLink>
            </div>
          </li>
        </ul>

        <form className="form-inline ">
          <div className="input-group my-3 mr-sm-2">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={() => onSearchNews(input.value)}
              >
                Search
              </button>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="input key word"
              aria-label=""
              aria-describedby="basic-addon1"
              defaultValue={defaultCategory}
              ref={(node) => (input = node)}
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default NavbarMenu;
