const express = require("express");
const router = express.Router();
const util = require("util");
const cloudinary = require("cloudinary").v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

const novedadesModel = require("../../models/novedad_model");

router.get("/admin/novedades", async (req, res) => {
  let novedades = await novedadesModel.getNovedades();

  novedades = novedades.map((novedad) => {
    if (novedad.img_id) {
      let imagen = cloudinary.image(novedad.img_id, {
      });
      return { ...novedad, imagen };
    } else {
      return { ...novedad, noImagen: true };
    }
  });
  res.render("admin/novedades", {
    layout: "admin/layoutNovedades",
    usuario: req.session.user_name,
    novedades: novedades,
  });
});

router.get("/admin/novedades/add", (req, res) => {
  res.render("admin/novedadesAdd", {
    layout: "admin/layoutNovedades",
  });
});

router.post("/admin/novedades/add", async (req, res) => {
  try {
    let img_id = "";
    if (req.files && Object.keys(req.files).length > 0) {
      let imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }
    if (
      req.body.titulo != "" &&
      req.body.subtitulo != "" &&
      req.body.cuerpo != ""
    ) {
      let data = [req.body.titulo, req.body.subtitulo, req.body.cuerpo, img_id];
      await novedadesModel.insertNovedad(data);
      res.redirect("/admin/novedades");
    } else {
      res.render("admin/novedadesAdd", {
        layout: "admin/layoutNovedades",
        error: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/admin/novedades/delete/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let novedad = await novedadesModel.getNovedadById(id);
    if (novedad.img_id) {
      await destroy(novedad.img_id);
    }
    await novedadesModel.deleteNovedad(id);
    res.redirect("/admin/novedades");
  } catch (error) {
    console.log(error);
  }
});

router.get("/admin/novedades/modificar/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let novedad = await novedadesModel.getNovedadById(id);
    res.render("admin/novedadesModify", {
      layout: "admin/layoutNovedades",
      novedad: novedad[0],
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/admin/novedades/modificar", async (req, res) => {
  try {
    let img_id = req.body.img_original;
    if (req.files && Object.keys(req.files).length > 0) {
      let imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
      if (req.body.img_original) {
        await destroy(req.body.img_original);
      }
    }
    let data = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
      img_id,
    };
    await novedadesModel.modifyNovedad(data, req.body.id);
    res.redirect("/admin/novedades");
  } catch (error) {
    console.log(error);
    res.render("admin/novedades/modificar/", {
      layout: "admin/layoutNovedades",
      error: true,
    });
  }
});

router.get("/admin/novedades/logout", (req, res) => {
  req.session.destroy();
  res.redirect("../login");
});

module.exports = router;
