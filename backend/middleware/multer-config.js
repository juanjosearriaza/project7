const multer = require("multer");
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const ffprobe = require("@ffprobe-installer/ffprobe");
const fs = require("fs");

const ffmpeg = require("fluent-ffmpeg")()
  .setFfprobePath(ffprobe.path)
  .setFfmpegPath(ffmpegInstaller.path);

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "tmp");
  },
  filename: (req, file, callback) => {
    const name = Date.now() + file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name);
    let nameWithoutExtension = name.split(".")[0];
    ffmpeg
      .input(`../backend/tmp/${name}`)
      .withSize('600x400')
      .toFormat("mp4")      
      .outputOptions([
        "-pix_fmt yuv420p",
        "-c:v libx264",
        "-movflags +faststart",
        "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
      ])
      .output(`../backend/images/${nameWithoutExtension}.mp4`)
      .on("end", () => {
        fs.unlink("../backend/tmp/" + name, (error) => {
          if (error) {
            console.log(error);
          } else {
            console.log("successfully deleted local image");
          }
        });
        console.log("Finished");
      })
      .on("error", (e) => {
        console.log(e);
      })
      .run();
     
  },
});



module.exports = multer({ storage }).single("image");
