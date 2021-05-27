import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

const Header = () => {
  const { dispatchAuth } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    dispatchAuth({ type: "LOGOUT" });
  };

  return (
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <Link className="navbar-brand brand-logo mr-5" to="/user">
          <img src="/lib/images/logo.svg" className="mr-2" alt="logo" />
        </Link>
        <Link className="navbar-brand brand-logo-mini" to="/user">
          <img src="/lib/images/logo-mini.svg" alt="logo" />
        </Link>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span className="ti-view-list"></span>
        </button>
        <ul className="navbar-nav mr-lg-2">
          <li className="nav-item nav-search d-none d-lg-block">
            <div className="input-group">
              <div
                className="input-group-prepend hover-cursor"
                id="navbar-search-icon"
              >
                <span className="input-group-text" id="search">
                  <i className="ti-search"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                id="navbar-search-input"
                placeholder="Search now"
                aria-label="search"
                aria-describedby="search"
              />
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item dropdown mr-1">
            <div
              className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
              id="messageDropdown"
              data-toggle="dropdown"
              style={{ cursor: "pointer" }}
            >
              <i className="ti-email mx-0"></i>
            </div>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown"
              aria-labelledby="messageDropdown"
            >
              <p className="mb-0 font-weight-normal float-left dropdown-header">
                Messages
              </p>
              <div style={{ cursor: "pointer" }} className="dropdown-item">
                <div className="item-thumbnail">
                  <img
                    src="/lib/images/faces/face4.jpg"
                    alt="anh ava"
                    className="profile-pic"
                  />
                </div>
                <div className="item-content flex-grow">
                  <h6 className="ellipsis font-weight-normal">David Grey</h6>
                  <p className="font-weight-light small-text text-muted mb-0">
                    The meeting is cancelled
                  </p>
                </div>
              </div>
              <div style={{ cursor: "pointer" }} className="dropdown-item">
                <div className="item-thumbnail">
                  <img
                    src="/lib/images/faces/face2.jpg"
                    alt="anh ava"
                    className="profile-pic"
                  />
                </div>
                <div className="item-content flex-grow">
                  <h6 className="ellipsis font-weight-normal">Tim Cook</h6>
                  <p className="font-weight-light small-text text-muted mb-0">
                    New product launch
                  </p>
                </div>
              </div>
              <div style={{ cursor: "pointer" }} className="dropdown-item">
                <div className="item-thumbnail">
                  <img
                    src="./lib/images/faces/face3.jpg"
                    alt="anh ava"
                    className="profile-pic"
                  />
                </div>
                <div className="item-content flex-grow">
                  <h6 className="ellipsis font-weight-normal"> Johnson</h6>
                  <p className="font-weight-light small-text text-muted mb-0">
                    Upcoming board meeting
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <div
              style={{ cursor: "pointer" }}
              className="nav-link count-indicator dropdown-toggle"
              id="notificationDropdown"
              data-toggle="dropdown"
            >
              <i className="ti-bell mx-0"></i>
              <span className="count"></span>
            </div>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown"
              aria-labelledby="notificationDropdown"
            >
              <p className="mb-0 font-weight-normal float-left dropdown-header">
                Notifications
              </p>
              <div style={{ cursor: "pointer" }} className="dropdown-item">
                <div className="item-thumbnail">
                  <div className="item-icon bg-success">
                    <i className="ti-info-alt mx-0"></i>
                  </div>
                </div>
                <div className="item-content">
                  <h6 className="font-weight-normal">Application Error</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    Just now
                  </p>
                </div>
              </div>
              <div style={{ cursor: "pointer" }} className="dropdown-item">
                <div className="item-thumbnail">
                  <div className="item-icon bg-warning">
                    <i className="ti-settings mx-0"></i>
                  </div>
                </div>
                <div className="item-content">
                  <h6 className="font-weight-normal">Settings</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    Private message
                  </p>
                </div>
              </div>
              <div style={{ cursor: "pointer" }} className="dropdown-item">
                <div className="item-thumbnail">
                  <div className="item-icon bg-info">
                    <i className="ti-user mx-0"></i>
                  </div>
                </div>
                <div className="item-content">
                  <h6 className="font-weight-normal">New user registration</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    2 days ago
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item nav-profile dropdown">
            <div
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              id="profileDropdown"
              style={{ cursor: "pointer" }}
            >
              <img src="/lib/images/faces/face28.jpg" alt="profile" />
            </div>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown"
              aria-labelledby="profileDropdown"
            >
              <Link to="#" className="dropdown-item">
                <i className="ti-settings text-primary"></i>
                Settings
              </Link>
              <button className="dropdown-item" onClick={handleLogout}>
                <i className="ti-power-off text-primary"></i>
                Logout
              </button>
            </div>
          </li>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="ti-view-list"></span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
