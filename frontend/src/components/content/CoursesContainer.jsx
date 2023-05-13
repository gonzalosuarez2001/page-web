import { CoursesCard } from "./CoursesCard";
import "../../styles/coursesContainer.css";
import js from "../../multimedia/js.jpg";
import html from "../../multimedia/html.jpg";
import css from "../../multimedia/css.jpg";
import bootstrap from "../../multimedia/bootstrap.jpg";
import react from "../../multimedia/react.jpg";
import node from "../../multimedia/node.jpg";
import express from "../../multimedia/express.jpg";
import sql from "../../multimedia/sql.jpg";

export function CoursesContainer() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center cursos_contenedor">
      <div className="col-9 align-self-center text-center mt-5 mb-4 pb-2 border-bottom border-2">
        <p className="h2 color_violet">Cursos Destacados</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <CoursesCard title="Curso JavasScript" price="$80.000" img={js}/>
        <CoursesCard title="Curso HTML" price="$60.000" img={html}/>
        <CoursesCard title="Curso CSS" price="$50.000" img={css}/>
        <CoursesCard title="Curso Bootstrap" price="$40.000" img={bootstrap}/>
        <CoursesCard title="Curso React" price="$120.000" img={react}/>
        <CoursesCard title="Curso NodeJS" price="$130.000" img={node}/>
        <CoursesCard title="Curso Express" price="$70.000" img={express}/>
        <CoursesCard title="Curso SQL" price="$90.000" img={sql}/>
      </div>
    </div>
  );
}


