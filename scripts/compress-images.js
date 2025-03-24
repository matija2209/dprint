const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

async function compressImages(inputDir) {
  try {
    // Ensure the input directory exists
    if (!fs.existsSync(inputDir)) {
      console.error(`Directory ${inputDir} does not exist.`);
      return;
    }

    // Read all files in the directory
    const files = fs.readdirSync(inputDir);

    // Process each image file
    for (const file of files) {
      const inputPath = path.join(inputDir, file);
      const fileExt = path.extname(file);
      const fileName = path.basename(file, fileExt);

      // Skip non-image files
      if (
        ![".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(
          fileExt.toLowerCase()
        )
      ) {
        continue;
      }

      // Compressed image path
      const compressedPath = path.join(inputDir, `${fileName}_tiny${fileExt}`);
      const blurPlaceholderPath = path.join(
        inputDir,
        `${fileName}_tiny.base64`
      );

      // Compress image
      await sharp(inputPath)
        .resize({ width: 800, withoutEnlargement: true }) // Resize to max width of 800px
        .webp({ quality: 80 }) // Convert to WebP with 80% quality
        .toFile(compressedPath);

      // Generate blur placeholder
      const blurBuffer = await sharp(inputPath)
        .resize(10) // Resize to a very small size (e.g., 10px)
        .toFormat("png")
        .toBuffer();

      const blurBase64 = `data:image/png;base64,${blurBuffer.toString(
        "base64"
      )}`;

      // Write blur placeholder to file
      fs.writeFileSync(blurPlaceholderPath, blurBase64);

      console.log(
        `Processed: ${file} -> ${path.basename(
          compressedPath
        )} and ${path.basename(blurPlaceholderPath)}`
      );
    }
  } catch (error) {
    console.error("Error processing images:", error);
  }
}

// Run the script with the gallery directory
compressImages(path.join(__dirname, "..", "public", "gallery"));
