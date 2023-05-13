const express = require("express");
const router = express.Router();
const getUserByNameAndPassword = require("../../models/usuarios_model");

router.get("/admin/login", (req, res) => {
  res.render("admin/login", {
    layout: "admin/layoutLogin",
  });
});

router.post("/admin/login", async (req, res) => {
  try {
    let user = req.body.user;
    let password = req.body.password;
    let data = await getUserByNameAndPassword(user, password);
    if (data != undefined) {
      req.session.user_id = data.id;
      req.session.user_name = data.usuario;
      res.redirect("./novedades");
    } else {
      res.render("admin/login", {
        layout: "admin/layoutLogin",
        error: true,
      });
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
