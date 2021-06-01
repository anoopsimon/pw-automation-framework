module.exports = {
    rootDir: '.',
    preset: "jest-playwright-preset",
    testMatch: 
    [
    "<rootDir>/src/__tests__/*.spec.ts"    
    ],
    transform: {
        "^.+\\.(ts)$": "ts-jest",
    },
    testTimeout: 600000,
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
            //browsers: ["chromium", "firefox", "webkit"],
            launchOptions: {
                headless: true,
                //slowMo: 0,
                devtools: false,

            }
           
        }
    }
};