import useCurrentCountryCodeStore from '@/StateManagement/CountryCodeStore';
import usePhoneNumberStore from '@/StateManagement/PhoneNumberStore';
import ContinueButton from '@/components/ContinueButton';
import { MyText } from '@/components/MyText';
import SignupHeader from '@/components/SignupHeader';
import SignupProgress from '@/components/SignupProgress';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { StatusBar } from 'expo-status-bar';
import {
  KeyboardAvoidingView,
  LogBox,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { OtpInput } from 'react-native-otp-entry';

//this is a result of a bug in react-native-paper
LogBox.ignoreLogs([
  'Warning: TextInput.Icon: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.',
]);

export default function ConfirmPhone() {
  const { CountryInfo } = useCurrentCountryCodeStore();
  const { phoneNumber } = usePhoneNumberStore();

  return (
    <SafeAreaView style={defaultStyles.Container}>
      <StatusBar style="auto" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={defaultStyles.KeyboardViewStyle}>
        <View style={defaultStyles.headerContainer}>
          <SignupHeader />
          <SignupProgress page={1} />
        </View>
        {/* middle content */}
        <View style={defaultStyles.contentContainer}>
          {/* sign up text */}
          <MyText style={styles.verificationText}>Enter the verification code</MyText>
          {/* phone box */}
          <MyText style={styles.infoText}>
            We've sent a text to{' '}
            <MyText style={{ color: Colors.sbkGreen }}>
              {CountryInfo.phoneCode}
              {phoneNumber.length > 0 ? phoneNumber : '7123123123'}
            </MyText>{' '}
            containing a 6-digit code. Do not share this code with anyone. It may take a few minutes
            to arrive.
          </MyText>
          <View style={styles.otpContainer}>
            <OtpInput
              autoFocus={false}
              numberOfDigits={6}
              focusColor={'#d4d4d4'}
              focusStickBlinkingDuration={500}
              theme={{
                pinCodeContainerStyle: styles.pinCodeContainer,
                pinCodeTextStyle: styles.pinCodeText,
              }}
            />
          </View>
          <TouchableOpacity>
            <MyText style={styles.resendText}>Resend code?</MyText>
          </TouchableOpacity>
          {/* already have an account */}
        </View>
        <View style={defaultStyles.footerContainer}>
          <ContinueButton path="Signup/Details" text="Continue" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.sbkWhite,
    textAlign: 'center',
  },
  verificationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.sbkWhite,
  },
  infoText: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: 'light',
    color: Colors.sbkLightGrey,
  },
  otpContainer: {
    width: '80%',
    marginVertical: 12,
  },
  pinCodeContainer: {
    marginHorizontal: 4,
    borderColor: Colors.sbkGrey,
    width: 45,
  },
  pinCodeText: {
    fontSize: 18,
    fontWeight: 'light',
    color: Colors.sbkWhite,
  },
  resendText: {
    marginTop: 8,
    fontSize: 10,
    color: Colors.sbkGreen,
  },
});
