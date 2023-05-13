import "../../styles/banner.css";

export function HomeBanner() {
  return (
    <div className="container-fluid contenedor_banner ps-5">
      <div className="row row-cols-1 col-12 col-md-6 col-xxl-4 offset-xxl-1 rounded-3 mt-3 p-3 shadow-lg banner_card">
        <div className="col py-4">
          <h2 className="h2 banner_title">Informate y Aprendé</h2>
        </div>
        <div className="col pb-5 banner_text">
          Los mejores cursos y la principales novedades
          <br />
          acerca del mundo de la tecnología. <br />
          <br />
          Conocé todo lo que podemos
          <br />
          ofrecerte de manera gratuita.
        </div>
        <div className="col pb-4">
          <a
            className="h5 py-2 border rounded-3 text-white banner_button_1"
            href="/cursos"
          >
            Cursos
          </a>
          <a className="py-2 rounded-3 banner_button_2" href="/novedades">
            Novedades
          </a>
        </div>
      </div>
    </div>
  );
}
