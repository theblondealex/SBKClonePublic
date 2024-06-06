import ContinueButton from '@/components/ContinueButton';
import { MyText } from '@/components/MyText';
import SignupHeader from '@/components/SignupHeader';
import SignupProgress from '@/components/SignupProgress';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export default function Promo() {
  const scale = useSharedValue(0.9);

  useEffect(() => {
    scale.value = withRepeat(withTiming(1.1, { duration: 1000 }), -1, true);
  });

  //pulsing circle
  const rStyleCircle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
      ],
    };
  });

  return (
    <SafeAreaView style={defaultStyles.Container}>
      <StatusBar style="light" hidden />
      <View style={defaultStyles.headerContainer}>
        <SignupHeader />
        <SignupProgress page={3} />
      </View>
      {/* middle content */}
      <View style={defaultStyles.contentContainer}>
        {/* pulsing checkmark */}
        <View style={styles.checkmarkContainer}>
          <Animated.View style={[styles.outerCircle, rStyleCircle]} />
          <AntDesign
            style={{ position: 'absolute', top: 25 }}
            name="checkcircle"
            size={50}
            color={Colors.sbkGreen}
          />
        </View>
        {/* Title */}
        <MyText style={styles.title}>Welcome to SBK</MyText>
        {/* box with text */}
        <View style={styles.promoBox}>
          <View style={styles.promoTextContainer}>
            <Ionicons name="gift-outline" size={20} color={Colors.sbkPromo} />
            <MyText style={styles.promoText}>Welcome Promotion</MyText>
          </View>
          <MyText
            style={{
              color: Colors.sbkWhite,
              fontSize: 16,
              marginVertical: 12,
              fontWeight: 'bold',
            }}>
            Bet £10, get £30 and in free bets
          </MyText>
          <MyText
            style={{
              color: Colors.sbkLightGrey,
              fontSize: 12,
              marginVertical: 6,
            }}>
            Deposit and bte to qualify for the bonus. Min £10 first deposit using Debit Card or
            Instant Bank Transferr.
          </MyText>
          <MyText
            style={{
              color: Colors.sbkWhite,
              fontSize: 12,
              marginVertical: 6,
            }}>
            Gamble responsible.{' '}
            <MyText
              onPress={() => {
                WebBrowser.openBrowserAsync('https://www.gambleaware.org/');
              }}
              style={{
                color: Colors.sbkGreen,
              }}>
              BeGambleAware.org. T&C's
            </MyText>{' '}
            apply.
          </MyText>
        </View>
      </View>
      <View style={defaultStyles.footerContainer}>
        <ContinueButton path="(HomeTabs)" text="Get promo now" />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  checkmarkContainer: {
    alignItems: 'center',
    marginVertical: 18,
  },
  outerCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#4e8e6bb0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.sbkWhite,
    textAlign: 'center',
    marginBottom: 12,
  },
  promoBox: {
    borderRadius: 10,
    width: '100%',
    backgroundColor: Colors.sbkLightBlack,
    paddingHorizontal: 18,
    paddingVertical: 24,
  },
  promoTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  promoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.sbkPromo,
  },
});
