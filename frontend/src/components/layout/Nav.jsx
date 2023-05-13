import "../../styles/nav.css";

export function Nav() {
    return (
      <nav className="navbar navbar-expand-md bg-light shadow fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand ms-2 navbar_logo text-secondary" href="/">
            <span className="color_violet">O</span>pen<span className="color_violet">T</span>ecnology
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item h5 mx-2 mb-0">
                <a className="nav-link" aria-current="page" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item h5 mx-2 mb-0">
                <a className="nav-link" href="/cursos">
                  Cursos
                </a>
              </li>
              <li className="nav-item h5 mx-2 mb-0">
                <a className="nav-link" href="/novedades">
                  Novedades
                </a>
              </li>
              <li className="nav-item h5 mx-2 mb-0">
                <a className="nav-link" href="/contacto">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  