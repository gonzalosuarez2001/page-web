import "../../styles/footer.css";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css"

export function Footer() {
  return (
    <footer>
      <div className="container-fluid contenedor_footer">
        <div className="row align-items-center mt-5 py-3">
          <div className="col-12 col-sm-5 text-center">
            <i className="bi bi-whatsapp px-4 footer_icon"></i>
            <i className="bi bi-instagram px-4 footer_icon"></i>
            <i className="bi bi-facebook px-4 footer_icon"></i>
          </div>
          <div className="col-12 col-sm-7">
            <p className="mb-0 text-center footer_text">
              Copyright © 2022 OpenTecnology. Todos los Derechos Reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
