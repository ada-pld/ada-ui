import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'Default',
      use: {
        baseURL: 'http://localhost:3000',
        // More browser options can be added here.
      },
    },
  ],
  webServer: {
    command: 'npm run dev',
    port: 3000,
    timeout: 120 * 1000, // 2 minutes should be enough for the server to start.
  },
};

export default config;