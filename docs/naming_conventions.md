# Asset Naming Conventions

This document outlines the naming conventions for assets on the website to ensure consistency and ease of maintenance. Adhering to these conventions is crucial for the maintainability of the site.

## General Rules

1. All asset filenames should be lowercase.
2. Words should be separated by underscores (`_`) instead of spaces.
3. Include the `assetPrefix` defined in the shared dependencies before the actual name of the asset.
4. File extensions should be appropriate to the type of asset (e.g., `.jpg` for images, `.css` for stylesheets).

## Examples

- Images: `${assetPrefix}_image_name.jpg`
- Stylesheets: `${assetPrefix}_stylesheet_name.css`
- Scripts: `${assetPrefix}_script_name.js`
- Documents: `${assetPrefix}_document_name.pdf`

## Asset Types and Prefixes

The `assetPrefix` is a short, descriptive identifier related to the type of asset. Below are the prefixes for different asset types:

- Images: `img`
- Stylesheets: `css`
- Scripts: `js`
- Documents: `doc`

## Validation

Before uploading any asset, use the `validateAssetName` function to ensure the name adheres to our conventions. This function checks the filename against the `AssetNamingSchema`.

```javascript
validateAssetName(filename);
```

If the asset name does not meet the criteria, the function will return an error message, and you will need to rename the asset accordingly.

## Renaming Assets

If you encounter an asset that does not follow these conventions, please rename it according to the rules outlined above. Refer to `docs/uploading.md` for instructions on how to upload the renamed asset.

## Further Information

For more details on the upload process, please see `docs/uploading.md`. For information on how to include these assets in your code with the correct links, refer to `docs/linking_assets.md`. The `generateLink` function can be used to create the correct path for an asset.

Remember, consistency in asset naming is key to a well-maintained website. Please adhere to these guidelines at all times.