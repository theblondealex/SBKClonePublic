import ContinueButton from '@/components/ContinueButton';
import { MyText } from '@/components/MyText';
import SignupHeader from '@/components/SignupHeader';
import SignupProgress from '@/components/SignupProgress';
import TextInputFramed from '@/components/TextInputFramed';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  LogBox,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

//this is a result of a bug in react-native-paper
LogBox.ignoreLogs([
  'Warning: TextInput.Icon: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.',
]);

export default function EmailPass() {
  const [whichIsFocused, setWhichIsFocused] = useState('');

  const [Email, setEmail] = useState<string | undefined>(undefined);

  //OBVIOUSLY IN PROD THIS WOULD BE HIDDEN AND VALIDATED SERVER SIDE
  const [Password, setPassword] = useState<string | undefined>(undefined);

  const validateEmail = (Email: string) => {
    return String(Email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  //validate password against regex that it must be 8 characters containing a number, special character, capital
  const validatePassword = (Password: string) => {
    return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{8,}$/.test(
      Password
    );
  };

  //useEffect to reset to undefined when the char length is less than 2
  useEffect(() => {
    if (Email !== undefined && Email.length < 1) {
      setEmail(undefined);
    }
    if (Password !== undefined && Password.length < 1) {
      setPassword(undefined);
    }
  }, [Email, Password]);

  return (
    <SafeAreaView style={defaultStyles.Container}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={defaultStyles.KeyboardViewStyle}>
        <View style={defaultStyles.headerContainer}>
          <SignupHeader />
          <SignupProgress page={2} />
        </View>
        {/* middle content */}
        <View style={defaultStyles.contentContainer}>
          {/* sign up text */}
          <MyText style={styles.titleText}>Enter your email</MyText>
          <View style={styles.userDetailsContainer}>
            <View style={styles.emailContainer}>
              <TextInputFramed
                width={100}
                stateSetter={setEmail}
                value={Email}
                label="Email"
                hasIcon={true}
                rightIconName={
                  Email ? (validateEmail(Email) ? 'check-circle' : 'close-circle') : undefined
                }
                IconColor={
                  Email ? (validateEmail(Email) ? Colors.sbkGreen : Colors.sbkRed) : undefined
                }
                borderColor={
                  Email !== undefined || whichIsFocused === 'Email'
                    ? Email
                      ? validateEmail(Email)
                        ? Colors.sbkGreen
                        : Colors.sbkRed
                      : Colors.sbkWhite
                    : Colors.sbkGrey
                }
                setWhichIsFocused={setWhichIsFocused}
                isError={Email !== undefined && !validateEmail(Email)}
                errorText="Must be a valid email"
              />
            </View>
          </View>
          <MyText style={styles.titleText}>Create your password</MyText>
          <MyText style={styles.passwordSubText}>
            Your password will be used to log back in to the app
          </MyText>
          <View style={styles.userDetailsContainer}>
            <View style={styles.emailContainer}>
              <TextInputFramed
                width={100}
                stateSetter={setPassword}
                value={Password}
                label="Password"
                hasIcon={true}
                rightIconName={'eye'}
                IconColor={Colors.sbkGrey}
                borderColor={
                  Password !== undefined || whichIsFocused === 'Password'
                    ? Password
                      ? validatePassword(Password)
                        ? Colors.sbkGreen
                        : Colors.sbkRed
                      : Colors.sbkWhite
                    : Colors.sbkGrey
                }
                setWhichIsFocused={setWhichIsFocused}
                isError={Password !== undefined && !validatePassword(Password)}
                errorText="At least 8 characters containing number, special & capital"
                secure
              />
            </View>
          </View>
        </View>
        <View style={defaultStyles.footerContainer}>
          <ContinueButton
            disabled={validatePassword(Password as string) === false}
            path="Signup/Promo"
            text="Continue"
          />
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
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.sbkWhite,
    marginBottom: 12,
  },
  userDetailsContainer: {
    gap: 6,
    flexDirection: 'column',
  },
  emailContainer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  passwordSubText: {
    fontSize: 12,
    marginBottom: 6,
    fontWeight: 'light',
    color: Colors.sbkLightGrey,
  },
});
