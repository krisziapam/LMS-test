# PUP eMabini LMS Static Prototype

This is a simple static HTML/CSS/JavaScript prototype for testing homepage improvements for the PUP eMabini LMS.

## Files

- `index.html` - main webpage
- `styles.css` - visual design and responsive layout
- `script.js` - menu, tutorial search/filter, and FAQ accordion
- `.nojekyll` - disables Jekyll processing on GitHub Pages

## How to upload to GitHub

1. Create a new GitHub repository.
2. Upload these files directly to the root of the repository:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `.nojekyll`
3. Commit the files.
4. Go to **Settings**.
5. Go to **Pages**.
6. Under **Build and deployment**, select:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
7. Save.
8. GitHub will publish the site at a URL similar to:
   `https://your-username.github.io/your-repository-name/`

## Notes for testing

This prototype intentionally avoids:

- large homepage image sliders
- external icon libraries
- external fonts
- video embeds on first load
- heavy frameworks

This makes it useful for testing faster perceived loading and clearer navigation.
