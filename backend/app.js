// Modulos
const express = require("express");
const path = require("path");
const logger = require("morgan");
const session = require("express-session");
const fileUpload = require("express-fileupload");
const cors = require("cors");

// DataBase
const pool = require("./db");

// Server
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// Rutas
const loginRouter = require("./routes/admin/login");
const novedadesRouter = require("./routes/admin/novedades");
const apiRouter = require("./routes/api/novedades");
const contactRouter = require("./routes/api/contacto");

// Middelwares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/temp/",
  })
);
app.use(
  session({
    secret: "123",
    resave: true,
    saveUninitialized: true,
  })
);

const secured = async (req, res, next) => {
  if (req.session.user_id) {
    next();
  } else {
    res.redirect("/admin/login");
    res.end();
  }
};

app.use("/api", cors(), apiRouter);
app.use("/admin/novedades", secured);
app.use(loginRouter);
app.use(novedadesRouter);
app.use(apiRouter);
app.use(contactRouter);

app.listen(3000);
