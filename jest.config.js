module.exports = {
    preset: "jest-playwright-preset",
    testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
    transform: {
        "^.+\\.(ts)$": "ts-jest",
    },
    reporters: [
        "default",
        ["jest-html-reporters", {
            "publicPath": "./html-report",
            "filename": "report.html",
            "expand": false,
            "openReport": true
        }]
    ],
    testEnvironmentOptions: {
        "jest-playwright":
        {
            browsers: ["chromium"],
            launchOptions: {
                headless: false,
                //slowMo: 0,
                devtools: false,

            }
           
        }
    }
};