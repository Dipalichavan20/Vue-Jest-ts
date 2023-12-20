module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.vue$": "@vue/vue3-jest",
        "^.+\\js$": "babel-jest",
        "^.+\\.ts?$": "ts-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts|jsx|tsx)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    coveragePathIgnorePatterns: ["/node_modules/", "/tests/"],
    coverageReporters: ["text", "json-summary"],
 
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
    },
    // optional 
    // collectCoverage : true,
    // coverageReporters:["lcov"],
    // coverageDirectory:"./output/code-coverge"
}