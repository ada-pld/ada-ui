import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
        headless: true,
      },
    },
    {
      name: 'Firefox',
      use: {
        browserName: 'firefox',
        headless: true,
      },
    },
    {
      name: 'WebKit',
      use: {
        browserName: 'webkit',
        headless: true,
      },
    },
  ],
  use: {
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retry-with-video',
  },
  reporter: [
    ['dot'],
    [
      'html',
      {
        outputFile: 'playwright-report/report.html',
      },
    ],
  ],
  webServer: {
    command: 'npm run test:start',
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
};

export default config;