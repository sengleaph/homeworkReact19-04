import React from "react";

export const Profile = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{}}>
        <div className="container-fluid">
            <img src="https://i.seadn.io/gcs/files/9f20d001dc2242cbec00a859b847d861.png" />
            <div className="navbar-brand" href="#"> Old Store</div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className= "navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">CCTV</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">PC</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Animal</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Wallpaper</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Book</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">TV</a>
                </li>
                
                
                {/* <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
                </li> */}
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    </header>
  );
};

export default Profile;
