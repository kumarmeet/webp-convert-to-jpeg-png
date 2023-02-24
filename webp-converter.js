const sharp = require("sharp");
const fs = require('fs');

// It will handle the file by multer middleware on the specific route, we must have to call this middleware after multer middleware
async function webpImageConvert(req, res, next) {
    await sharp(req.file.path)
      .webp({quality: 50})
      .toFile(req.file.path.split('.')[0]  + ".webp");

      //Delete JPG, PNG, JPEG Files
      fs.unlink(req.file.path, (err) => {
          if (err) {
              throw err;
          }
      });

      next()
  }
  
  module.exports = webpImageConvert;
