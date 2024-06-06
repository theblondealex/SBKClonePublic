import useCurrentCountryCodeStore from '@/StateManagement/CountryCodeStore';
import usePhoneNumberStore from '@/StateManagement/PhoneNumberStore';
import ContinueButton from '@/components/ContinueButton';
import { MyText } from '@/components/MyText';
import SignupHeader from '@/components/SignupHeader';
import SignupProgress from '@/components/SignupProgress';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';
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
import CountryFlag from 'react-native-country-flag';
import { TextInput } from 'react-native-paper';

//this is a result of a bug in react-native-paper
LogBox.ignoreLogs([
  'Warning: TextInput.Icon: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.',
]);

export default function Phone() {
  const { CountryInfo } = useCurrentCountryCodeStore();
  const { phoneNumber, setPhoneNumber } = usePhoneNumberStore();

  const [isValid, setIsValid] = useState<boolean | null>(null);

  const checkValidity = (text: string): boolean => {
    const isTenDigits = /^\d{10}$/.test(text);
    return isTenDigits;
  };

  const handleInputChange = (text: string) => {
    setIsValid(checkValidity(text));
    setPhoneNumber(text);
  };

  const onFocus = () => {
    setIsValid(checkValidity(phoneNumber));
  };

  return (
    <SafeAreaView style={defaultStyles.Container}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={defaultStyles.KeyboardViewStyle}>
        <StatusBar style="light" hidden={true} />
        <View style={defaultStyles.headerContainer}>
          <SignupHeader />
          <SignupProgress page={1} />
        </View>
        {/* middle content */}
        <View style={defaultStyles.contentContainer}>
          {/* sign up text */}
          <MyText style={styles.signUpText}>Sign up to SBK</MyText>
          {/* phone box */}
          <View
            style={[
              styles.phoneBox,
              {
                borderColor:
                  isValid === true ? Colors.sbkGreen : isValid === false ? '#ae0000' : '#646464',
              },
            ]}>
            <Link href="/Signup/CountriesSelect" asChild>
              <TouchableOpacity style={styles.countryCode}>
                <CountryFlag isoCode={CountryInfo.isoCode} size={8} />
                <MyText style={styles.countryCodeText}>{CountryInfo.phoneCode}</MyText>
                <AntDesign
                  name="down"
                  size={12}
                  color={Colors.sbkWhite}
                  style={{
                    opacity: 0.4,
                  }}
                />
              </TouchableOpacity>
            </Link>
            <View style={styles.phoneInputContainer}>
              <TextInput
                textColor="#fff"
                underlineStyle={{
                  height: 0,
                }}
                activeUnderlineColor={Colors.sbkGrey}
                style={[styles.phoneInput, { color: Colors.sbkWhite }]}
                cursorColor={Colors.sbkGreen}
                label="Phone [10 DIGITS]"
                mode="flat"
                value={phoneNumber}
                onChangeText={(text) => {
                  handleInputChange(text);
                }}
                onFocus={onFocus}
              />
            </View>
          </View>
          {/* info text */}
          <View style={styles.infoContainer}>
            <Ionicons name="information-circle-outline" size={20} color={Colors.sbkGreen} />
            <MyText style={styles.infoText}>Your number is used to keep your account secure</MyText>
          </View>
          <TouchableOpacity>
            <MyText style={styles.loginText}>Already have an account? Log in</MyText>
          </TouchableOpacity>
          {/* already have an account */}
        </View>
        <View style={defaultStyles.footerContainer}>
          <MyText style={styles.footerText}>
            By tapping "Continue" I accept the
            <MyText
              onPress={() => {
                WebBrowser.openBrowserAsync(
                  'https://www.sbk.com/terms-of-use/?utm_source=sbk-clone&utm_medium=app&utm_campaign=sbk-clone'
                );
              }}
              style={{ color: Colors.sbkGreen }}>
              {' '}
              Terms{' '}
            </MyText>
            &
            <MyText
              style={{ color: Colors.sbkGreen }}
              onPress={() => WebBrowser.openBrowserAsync('https://www.sbk.com/privacy-policy/')}>
              {' '}
              Privacy Policy{' '}
            </MyText>
            and confirm that I am 18 years or older.
          </MyText>
          <ContinueButton path="Signup/ConfirmPhone" text="Continue" />
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
  signUpText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.sbkWhite,
  },
  phoneBox: {
    width: '100%',
    marginVertical: 12,
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.sbkGrey,
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  countryCode: {
    flexDirection: 'row',
    width: '20%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    gap: 4,
    alignItems: 'center',
    borderRightWidth: 1,
    backgroundColor: Colors.sbkGrey,
  },
  countryCodeText: {
    fontSize: 12,
    fontWeight: 'light',
    color: Colors.sbkWhite,
  },
  phoneInputContainer: {
    flex: 1,
    backgroundColor: Colors.sbkLightBlack,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  phoneInput: {
    flex: 1,
    width: '95%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: Colors.sbkLightBlack,
    justifyContent: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 6,
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 10,
    fontSize: 12,
    fontWeight: 'light',
    color: Colors.sbkGrey,
  },
  loginText: {
    marginTop: 8,
    fontSize: 12,
    color: Colors.sbkGreen,
  },
  footerText: {
    color: Colors.sbkGrey,
    fontSize: 14,
    marginBottom: 16,
  },
});
