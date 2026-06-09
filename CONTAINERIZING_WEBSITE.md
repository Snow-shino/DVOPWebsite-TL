# Containerizing Your Website - Assignment Notes

## Section 2: Reproduce the Intentional Bug

Use these commands from the project root:

```powershell
docker build -t my-simple-website .
docker run -d -p 8080:80 my-simple-website
```

Open: http://localhost:8080

Expected issue:
- HTML loads, but styles/scripts/assets may be missing.
- Browser DevTools may show 404 errors for files like `styles.css` or `scripts.js`.

Screenshot needed for submission:
- Capture a screenshot of the broken page and save it as `screenshot-before-fix.png`.
