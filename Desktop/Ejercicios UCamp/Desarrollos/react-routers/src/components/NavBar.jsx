import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/home">Home</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/customers">Customers</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/products">Products</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/use-state">UseState</NavLink>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeHolder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar