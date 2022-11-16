

const NavBar = () => {
  return (
    <>
    {/* <!-- Navbar --> */}
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  {/* <!-- Container wrapper --> */}
  <div className="container-fluid">
    {/* <!-- Toggle button --> */}
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    {/* <!-- Collapsible wrapper --> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <!-- Navbar brand --> */}
      <a className="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="15"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      {/* <!-- Left links --> */}
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li>
       
        <form className="input-group w-auto my-auto d-none d-sm-flex">
            <input
            autocomplete="off"
            type="search"
            class="form-control rounded"
            placeholder="Search"
            //   style="min-width: 125px;"
            />
            <span className="input-group-text border-0 d-none d-lg-flex"></span>
            <button className="btn btn-success" type="submit" >
        Buscar
      </button> 
      </form>
      </ul>
      

      {/* <!-- Left links --> */}
    </div>
    {/* <!-- Collapsible wrapper --> */}

    {/* <!-- Right elements --> */}
    <div className="d-flex align-items-center">
      {/* <!-- Icon --> */}
      <a className="text-reset me-3" href="#">
        <i className="fas fa-shopping-cart"></i>
      </a>

      {/* <!-- Notifications --> */}
      <div className="dropdown">
        <a
          className="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-bell"></i>
          <span class="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >Name
          <li>
            <a className="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
      {/* <!-- Avatar --> */}
      <div className="dropdown">
        <a
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a className="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
    {/* <!-- Right elements --> */}
  </div>
  {/* <!-- Container wrapper --> */}
</nav>
{/* <!-- Navbar --> */}
</>
  )
}

export default NavBar