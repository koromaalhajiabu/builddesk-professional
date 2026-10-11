BuildDesk Professional — Installable Offline Web App

Files included:
- index.html: website entry point
- BuildDesk-Professional.html: main app
- manifest.webmanifest: app name, icon and installation settings
- service-worker.js: caches the app shell for offline reopening
- icons/: Android app icons

DEPLOYMENT
Upload all files and the icons folder to the ROOT of the existing GitHub repository used by Render. Keep the existing repository and Render site. Ensure the Render publish directory is the repository root (.). Commit the new/updated files and wait for deployment to become Live.

INSTALL ON ANDROID
1. Open the HTTPS Render website in Chrome while connected to the internet.
2. Allow it to finish loading once so the offline files can be cached.
3. Open Chrome menu (three dots) and choose “Install app” or “Add to Home screen” if shown.
4. Launch BuildDesk from the new home-screen icon. Test offline by turning off mobile data/Wi-Fi after the first successful load.

DATA NOTE
Business data is stored in browser localStorage. The installed website and a separately opened downloaded HTML file may use different storage. Keep regular backups. This browser-based prototype is not strong security for sensitive records.
