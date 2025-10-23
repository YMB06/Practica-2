export default {
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  coverageAnalysis: "perTest",
  jest: {
    projectType: "custom",
    configFile: "jest.config.cjs",
    enableFindRelatedTests: true
  },
  mutate: [
    "*.ts",
    "!*.test.ts",
    "!*.config.ts"
  ],
  tsconfigFile: "tsconfig.json",
  plugins: [
    "@stryker-mutator/jest-runner",
    "@stryker-mutator/typescript-checker"
  ]
};