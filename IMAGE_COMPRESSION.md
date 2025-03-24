# Image Compression Script for Project Gallery

## Overview

This script provides an automated solution for compressing images in the project's gallery, generating optimized versions and blur placeholders to improve web performance and user experience.

## Features

- 🖼️ Compress images in the `public/gallery` directory
- 🔬 Resize images to a maximum width of 800px
- 🌐 Convert images to WebP format for better web performance
- 🌫️ Generate tiny blur placeholders for progressive image loading
- 🛡️ Handles multiple image formats (jpg, jpeg, png, webp, gif)

## Prerequisites

Before running the script, ensure you have the following:

- Node.js (v16+ recommended)
- npm (Node Package Manager)
- Project dependencies installed

## Installation

1. Install the required dependency:
   ```bash
   npm install sharp
   ```

## Script Location

The script is located at `scripts/compress-images.js`

## How It Works

### Image Compression Process

1. **Image Resizing**

   - Resize images to a maximum width of 800px
   - Preserve aspect ratio
   - Prevent upscaling of smaller images

2. **Format Conversion**

   - Convert images to WebP format
   - Compress with 80% quality for optimal balance between size and quality

3. **Blur Placeholder Generation**
   - Create a tiny 10px version of the image
   - Convert to base64 PNG format
   - Save alongside the original image

### Output Files

For each image `example.jpg` in the gallery:

- `example_tiny.jpg`: Compressed image
- `example_tiny.base64`: Base64 blur placeholder

## Usage

Run the script using the npm script:

```bash
npm run compress-images
```

### Script Details

```javascript
// Key compression logic
await sharp(inputPath)
  .resize({ width: 800, withoutEnlargement: true })
  .webp({ quality: 80 })
  .toFile(compressedPath);

// Blur placeholder generation
const blurBuffer = await sharp(inputPath).resize(10).toFormat("png").toBuffer();
```

## Customization

Modify the script to adjust:

- Resize dimensions
- Compression quality
- Supported file types

## Troubleshooting

- Ensure `public/gallery` directory exists
- Check file permissions
- Verify Node.js and npm are correctly installed

## Performance Considerations

- Process runs sequentially to prevent memory overload
- Skips non-image files
- Minimal performance impact

## Best Practices

- Run before deployment
- Version control original images
- Periodically review and update compression settings

## Contributing

Feel free to open issues or submit pull requests to improve the script.

## License

[Your Project License]

---

_Generated automatically for efficient image optimization_
