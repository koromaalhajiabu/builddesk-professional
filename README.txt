BuildDesk Professional — Starter Prototype
============================================

This is an early, local-only prototype for Android/browser testing.

Files:
- BuildDesk-Professional.html: open this file in a browser.
- README.txt: this guide.

Safe test steps:
1. Extract the ZIP to a folder on your Android phone.
2. Open BuildDesk-Professional.html in Chrome or another browser.
3. Add a fictional product (example: Cement 50kg, cost SLE 100, price SLE 130, stock 20).
4. Record a small fictional sale and verify the stock decreases.
5. Open Backup and download a JSON backup.
6. Do not use real customer or business records.

Important limitations:
- Records are stored in localStorage in the browser on this device.
- No online database, secure account system, cross-device sync, tested restore, or service-worker offline installation is included yet.
- This is not production-ready accounting software. Reports are basic estimates and are not audited profit/loss.
- Do not use it for real business records or claim secure online/offline syncing until those features are built and tested.

Next development stages:
1. Validate core workflows with fictional data.
2. Add proper authentication, roles and audit logs.
3. Build secure backend with separate business tenants and encrypted transport.
4. Add tested export/restore, backup policy and offline sync conflict handling.
5. Add PWA manifest/service worker and test hosted offline behavior.
6. Add receipts/printing and more complete stock, credit, and accounting workflows.
