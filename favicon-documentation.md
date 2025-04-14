# AXYN Favicon Implementation

This document explains the favicon implementation for the AXYN website, focusing on achieving rounded corners across different browsers.

## Implementation Overview

The AXYN favicon uses a multi-layered approach to ensure compatibility across browsers while maintaining rounded corners:

1. **SVG Favicon (Primary)**: Vector-based icon with rounded rectangle background
2. **ICO Favicon (Fallback)**: For older browsers that don't support SVG
3. **Web App Manifest**: For progressive web app support

## File Structure

- `axyn-favicon.svg` - Main SVG favicon with rounded corners (100px radius)
- `AXYN.ico` - Fallback ICO file for older browsers
- `axyn-favicon-manifest.json` - Web App Manifest for PWA support

## HTML Implementation

The favicon is implemented in the `<head>` section of HTML files with this structure:

```html
<!-- Favicon setup with rounded corners -->
<link rel="icon" href="axyn-favicon.svg" type="image/svg+xml">
<link rel="shortcut icon" href="AXYN.ico">
<link rel="apple-touch-icon" href="axyn-favicon.svg">
<link rel="manifest" href="axyn-favicon-manifest.json">
<meta name="theme-color" content="#0e0d0e">
```

## SVG Approach

The SVG favicon uses several techniques to ensure consistent display:

1. **Vector Paths Instead of Text**: Text elements in SVG can render inconsistently across browsers due to font availability. Using vector paths ensures the exact same appearance everywhere.

2. **Explicit Dimensions**: The SVG has explicit width/height (512x512) for optimal scaling.

3. **Rounded Rectangle Background**: Using `rx="100"` on the rectangle creates rounded corners with a 100px radius.

4. **Proper Centering**: The AXYN text is carefully positioned and scaled using the transform attribute.

## Browser Support

- **Modern Browsers** (Chrome, Firefox, Safari, Edge): Full support for SVG with rounded corners
- **Older Browsers**: Fallback to ICO format (without rounded corners)
- **Mobile Devices**: Apple Touch Icon support for iOS devices
- **PWA Support**: Web App Manifest for installation as app

## Testing

Use the `test-favicon.html` file to verify favicon appearance across different browsers.

## Modifying the Favicon

If you need to update the favicon:

1. Edit the `axyn-favicon.svg` file to make visual changes
2. Keep the rounded rectangle background with 100px radius
3. Ensure the paths maintain proper spacing and proportion
4. Test in multiple browsers to verify appearance

## Best Practices

- Keep the same color scheme (dark background: #0e0d0e, light text: #f5f3ee)
- Maintain the same rounded corner radius (100px) for brand consistency
- Always provide the ICO fallback for older browsers
- Update both the SVG and manifest when making changes 