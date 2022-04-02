// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>", "<rootDir>/.jest"],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '@components/(.*)$': '<rootDir>/components/$1',
    '@pages/(.*)$': '<rootDir>/pages/$1',
    "@constants/(.*)$": "<rootDir>/constants/$1",
    "@interfaces/(.*)$": "<rootDir>/interfaces/$1",
    "@lib/(.*)$": ["<rootDir>/lib/$1"],
    "@store/(.*)$": "<rootDir>/store/$1",
    "@utils/(.*)$": ["<rootDir>/utils/$1"]
  },
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    "/node_modules/",
    "/.next/"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/components/**/*.ts(x)?",
    "<rootDir>/lib/**/*.ts(x)?",
    "<rootDir>/store/**/*.ts(x)?",
    "<rootDir>/utils/**/*.ts(x)?"
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)


