// @ts-nocheck
// 
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  _comment: "This config was generated using 'stryker init'...",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  coverageAnalysis: "perTest",
  // Mutar los .ts en la raíz y subcarpetas (excluyendo tests)
  mutate: ["**/*.ts", "!**/*.test.ts", "!node_modules/**"],
  jest: {
    configFile: "jest.config.cjs"
  }
};
export default config;
