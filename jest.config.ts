export default {
  // Stop running tests after `n` failures
  bail: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest",

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],

  setupFilesAfterEnv: ["<rootDir>/__tests__/setup.ts"],

  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",

      {
        jsc: {
          parser: {
            syntax: "typescript",

            tsx: true,

            decorators: true,
          },

          keepClassNames: true,

          transform: {
            legacyDecorator: true,

            decoratorMetadata: true,

            react: {
              runtime: "automatic",
            },
          },
        },

        module: {
          type: "es6",

          noInterop: false,
        },
      },
    ],
  },

  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
};
