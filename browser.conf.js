const playwright = require('playwright');

process.env.CHROME_BIN = playwright.chromium.executablePath();
