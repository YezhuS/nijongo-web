import {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'nijongo',
  webDir: 'docs/',
  server: {
    androidScheme: 'https',
  },
};

export default config;
