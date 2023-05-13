const express = require("express");
const router = express.Router();
const novedadesModel = require("../../models/novedad_model");
const cloudinary = require("cloudinary").v2;

router.get("/api/novedades", async (req, res) => {
  let novedades = await novedadesModel.getNovedades();
  console.log(novedades)

  novedades = novedades.map(novedad => {
    if (novedad.img_id) {
      const imagen = cloudinary.url(novedad.img_id, {});
      return {
        ...novedad,
        imagen,
      };
    } else {
      return {
        ...novedad,
        imagen: "",
      };
    }
  });
  res.json(novedades);
});

module.exports = router;
