const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require("./config/multer");

routes.post("/posts", multer().single('file'), (req, res) => {
   console.log(req.file);
  
    return res.json({ teste: "ok"  });
});

module.exports = routes;