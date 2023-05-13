import "../../styles/homeCards.css";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { HomeBenefitsCard } from "./HomeBenefitsCard";

export function HomeBenefits() {
  return (
    <section>
      <div className="container-fluid col-10 text-center mt-5 mb-4 pb-2 border-bottom border-2">
        <p className="h2 color_violet">Beneficios</p>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <HomeBenefitsCard
            title="Cursos Certificados"
            description="Aprobados por el Instituto de Educación"
            icon="bi bi-patch-check beneficios_icon"
          />
          <HomeBenefitsCard
            title="Cursada Asincronica"
            description="Mira las clases en cualquier momento"
            icon="bi bi-calendar beneficios_icon"
          />
          <HomeBenefitsCard
            title="Modalidad Online"
            description="Cursá desde la comodidad de tu casa"
            icon="bi bi-laptop beneficios_icon"
          />
          <HomeBenefitsCard
            title="Cursos Gratis"
            description="Sin ningun tipo de costo adicional"
            icon="bi bi-cash beneficios_icon"
          />
        </div>
      </div>
    </section>
  );
}
