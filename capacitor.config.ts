import {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nijongo.app',
  appName: 'nijongo',
  webDir: 'docs/',
  server: {
    androidScheme: 'https',
  },
  // bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      androidScaleType: 'CENTER_CROP',
      splashImmersive: true,
      backgroundColor: '#231D20',
    },
  },
};

export default config;
