import "../../styles/coursesCard.css";

export function CoursesCard(props) {
  return (
    <section>
      <div className="p-0 shadow rounded m-4 cursos_card">
        <img src={props.img} alt="" className="border-bottom border-2" />
        <div className="row text-center justify-content-center">
          <h4 className="h4 col-12 pt-3 pb-1 color_violet">{props.title}</h4>
          <p className="text-secondary h4 mb-3">{props.price}</p>
          <p className="p-3 mb-2 rounded text-white cursos_button">Inscribirme</p>
        </div>
      </div>
    </section>
  );
}
