import {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'nijongo',
  webDir: 'dist/nijongo/browser',
  server: {
    androidScheme: 'https',
  },
};

export default config;
