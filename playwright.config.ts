import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  //fullyParallel: false,
  reporter: 'html',

  expect: {
    timeout: 5000
  },
  use: {
    
    headless: false,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
   
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    
  ],


});
