import "../../styles/novedadesCard.css";

export function NovedadesCard(props) {
  return (
    <div className="row rounded-3 shadow m-4 p-0 novedades_contenedor">
      <img src={props.image} alt="" className="col-4 col-sm-5 p-0 novedades_image" />
      <div className="col-xs-12 col-sm-7 d-flex flex-column align-items-center">
        <h3 className="pb-2 mt-2 pt-3 color_violet">{props.title}</h3>
        <p className="pb-2 h5">{props.subtitle}</p>
        <p className="p-2">{props.text}</p>
      </div>
    </div>
  );
}