import "../../styles/homeCard.css";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

export function HomeBenefitsCard(props) {
  return (
    <div className="row col-11 col-md-5 border shadow m-3 py-4 rounded-3 align-items-center">
      <div className="col-3 text-center">
        <i className={props.icon}></i>
      </div>
      <div className="col-9">
        <p className="h4">{props.title}</p>
        <p className="m-0">{props.description}</p>
      </div>
    </div>
  );
}
