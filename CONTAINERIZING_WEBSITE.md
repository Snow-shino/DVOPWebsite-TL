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

## Section 4: Rebuild and Retest After the Fix

Stop old container and rerun with the fixed image:

```powershell
docker ps
docker stop <container_id>
docker build -t my-simple-website .
docker run -d -p 8080:80 my-simple-website
```

Refresh: http://localhost:8080

Expected result:
- Full site renders correctly with CSS/JS/assets loaded.

Screenshot needed for submission:
- Capture a screenshot of the corrected page and save it as `screenshot-after-fix.png`.

## Section 5: Submission Packaging Checklist

Include these files in one ZIP:
- `Dockerfile` (final fixed version)
- `screenshot-before-fix.png`
- `screenshot-after-fix.png`
- Website source files used in the assignment

Create ZIP in PowerShell:

```powershell
Compress-Archive -Path .\* -DestinationPath .\containerized-website-submission.zip -Force
```
