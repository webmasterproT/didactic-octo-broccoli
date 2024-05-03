# Linking Assets in Code

When developing a website, it's crucial to reference assets correctly in your code to ensure they load properly on your website. This document outlines the process of linking assets using the shared dependencies we have established.

## Using `baseURL` and `assetPrefix`

To construct a valid link for an asset, you should use the `baseURL` and `assetPrefix` variables. This ensures that all asset links are consistent and relative to the root URL of the website.

### Example:

```javascript
const assetLink = baseURL + assetPrefix + 'image.png';
```

## Function: `generateLink`

The `generateLink` function is a utility to create correct links for assets. It takes the filename of the asset as an argument and returns the full URL.

### Usage:

```javascript
const linkToAsset = generateLink('logo.svg');
```

### Implementation:

```javascript
function generateLink(filename) {
  return baseURL + assetPrefix + filename;
}
```

## Validating Asset Names

Before linking an asset, it's important to validate its name using the `validateAssetName` function. This ensures that the asset name follows our `AssetNamingSchema`.

### Example:

```javascript
if (validateAssetName('new-background.jpg')) {
  const assetLink = generateLink('new-background.jpg');
  // Use assetLink in your code
}
```

## Including Links in HTML

When including assets in your HTML, use the generated link as the `src` for images, `href` for anchors, or the appropriate attribute for other tags.

### Example:

```html
<img src="generateLink('image.png')" alt="Descriptive text for the image">
```

## Including Links in CSS

For CSS, you can include the generated link in the `url()` function for background images or other properties that require a URL.

### Example:

```css
background-image: url('generateLink("background.jpg")');
```

## Including Links in JavaScript

In JavaScript, you can assign the generated link to a variable or directly use it when setting properties or attributes.

### Example:

```javascript
document.getElementById('someImage').src = generateLink('dynamic-image.png');
```

Remember to always validate asset names and use the `generateLink` function to ensure consistency across your website. For more information on naming conventions, refer to `docs/naming_conventions.md`. For details on uploading assets, see `docs/uploading.md`.