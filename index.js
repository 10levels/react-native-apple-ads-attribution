import { NativeModules } from 'react-native';

const { RNAppleAdsAttribution } = NativeModules;

class AppleAdsAttribution {
  getAttributionData() {
    return RNAppleAdsAttribution.getAttributionData();
  }
}

export const AppleAdsAttributionInstance = new AppleAdsAttribution();
