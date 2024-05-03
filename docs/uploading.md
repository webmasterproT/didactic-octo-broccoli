# Uploading Assets to the Website

This document provides instructions on how to upload assets to the website using the `uploadForm` and ensuring that assets are named according to the `AssetNamingSchema`.

## Prerequisites

Before uploading any assets, make sure you have read and understood the naming conventions outlined in [Naming Conventions](naming_conventions.md).

## Uploading Process

1. Navigate to the administration dashboard and locate the `uploadForm` element.
2. Ensure that the asset you are about to upload adheres to the `AssetNamingSchema`. Use the `validateAssetName` function to check the asset name:

   ```javascript
   if (!validateAssetName(assetName)) {
       alert(UploadErrorMessage);
       return;
   }
   ```

3. Select the file you wish to upload by using the file input control within the `uploadForm`.
4. Submit the form. Upon successful upload, the server will respond with a success message:

   ```javascript
   alert(UploadSuccessMessage);
   ```

   In case of an error during the upload process, an error message will be displayed:

   ```javascript
   alert(UploadErrorMessage);
   ```

## Asset Linking

After uploading the asset, you will need to include it in the website's code. Use the `generateLink` function to create the correct link. Here's an example of how to use it:

```javascript
const assetLink = generateLink(baseURL, assetPrefix, assetName);
```

You can then use `assetLink` in your HTML or CSS files to reference the uploaded asset.

## Additional Information

For more details on the structure of the website, refer to [Structure Documentation](structure.md). To learn about maintaining the website, please see [Maintenance Documentation](maintenance.md).

Remember to log any maintenance activities, including uploads, using the `logMaintenanceActivity` function as described in [Maintenance Documentation](maintenance.md).