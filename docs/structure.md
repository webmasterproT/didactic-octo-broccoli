# Website Structure

This document outlines the structure of the website, detailing the organization of directories and files as per the `WebsiteStructureSchema`. Understanding this structure is crucial for effective uploading, administration, and maintenance of the website.

## Root Directory

The root directory of the website is defined by the `baseURL` variable. All paths referenced in this documentation are relative to this root.

```
/
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── fonts/
├── index.html
└── pages/
    ├── about.html
    ├── contact.html
    ├── faq.html
    └── terms.html
```

## Assets Directory

The `assets/` directory contains all the static files required by the website, such as stylesheets, JavaScript files, images, and fonts. The naming of these assets should follow the `AssetNamingSchema` as described in [naming_conventions.md](naming_conventions.md).

### CSS

All Cascading Style Sheets (CSS) files are stored within the `assets/css/` directory.

### JavaScript

JavaScript files are located within the `assets/js/` directory.

### Images

The `assets/images/` directory holds all the image files used across the website.

### Fonts

Custom fonts are stored within the `assets/fonts/` directory.

## Pages Directory

The `pages/` directory contains all the HTML files for the website's additional pages, excluding the `index.html` which is located in the root directory.

## Naming Conventions

Please refer to [naming_conventions.md](naming_conventions.md) for detailed guidelines on how to name files and assets consistently across the website.

## Linking Assets

When including assets in your HTML or CSS files, use the `generateLink` function to ensure that the links are correct and consistent. For more information, see [linking_assets.md](linking_assets.md).

## Further Documentation

For details on how to upload new content, refer to [uploading.md](uploading.md). To understand the administration of the website, consult [administration.md](administration.md). Maintenance procedures are documented in [maintenance.md](maintenance.md).

For information on deploying the website to the specified URL, see [deployment_guide.md](deployment_guide.md). Software requirements and dashboard details can be found in [software_requirements.md](software_requirements.md) and [dashboard_manual.md](dashboard_manual.md), respectively.