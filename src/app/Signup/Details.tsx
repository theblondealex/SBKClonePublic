import ContinueButton from '@/components/ContinueButton';
import { MyText } from '@/components/MyText';
import SignupHeader from '@/components/SignupHeader';
import SignupProgress from '@/components/SignupProgress';
import TextInputFramed from '@/components/TextInputFramed';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
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
export default function Details() {
  const [whichIsFocused, setWhichIsFocused] = useState('');
  const [FirstName, setFirstName] = useState<string | undefined>(undefined);
  const [LastName, setLastName] = useState<string | undefined>(undefined);
  const [Birthday, setBirthday] = useState<string | undefined>(undefined);

  const checkLongerTwoChars = (text: string): boolean => {
    const isTwoDigits = text.length > 2;
    return isTwoDigits;
  };

  //valideate if the age is older than 18
  const validateBirthday = (text: string): boolean => {
    // Check if the input matches the DD/MM/YYYY format
    const isValidFormat = text.match(/^\d{2}\/\d{2}\/\d{4}$/);
    if (!isValidFormat) return false;

    const [day, month, year] = text.split('/').map(Number);

    // Check if the date is valid
    const birthday = new Date(year, month - 1, day);
    if (
      birthday.getDate() !== day ||
      birthday.getMonth() !== month - 1 ||
      birthday.getFullYear() !== year
    ) {
      return false;
    }

    // Calculate the age
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const monthDifference = today.getMonth() - birthday.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }

    // Check if age is greater than or equal to 18
    return age >= 18;
  };

  return (
    <SafeAreaView style={defaultStyles.Container}>
      <StatusBar style="light" hidden />
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
          <MyText style={styles.titleText}>Enter the your details</MyText>
          <View style={styles.userDetailsContainer}>
            <View style={styles.userNameContainer}>
              <TextInputFramed
                width={48}
                stateSetter={setFirstName}
                value={FirstName}
                label="First Name"
                hasIcon={true}
                rightIconName={
                  FirstName
                    ? checkLongerTwoChars(FirstName)
                      ? 'check-circle'
                      : 'close-circle'
                    : undefined
                }
                IconColor={
                  FirstName
                    ? checkLongerTwoChars(FirstName)
                      ? Colors.sbkGreen
                      : Colors.sbkRed
                    : undefined
                }
                borderColor={
                  FirstName !== undefined || whichIsFocused === 'First Name'
                    ? FirstName
                      ? checkLongerTwoChars(FirstName)
                        ? Colors.sbkGreen
                        : Colors.sbkRed
                      : Colors.sbkWhite
                    : Colors.sbkGrey
                }
                setWhichIsFocused={setWhichIsFocused}
                isError={FirstName !== undefined && !checkLongerTwoChars(FirstName)}
                errorText="Must be 3 characters or more"
              />
              <TextInputFramed
                width={48}
                stateSetter={setLastName}
                value={LastName}
                label="Last Name"
                hasIcon={true}
                rightIconName={
                  LastName
                    ? checkLongerTwoChars(LastName)
                      ? 'check-circle'
                      : 'close-circle'
                    : undefined
                }
                IconColor={
                  LastName
                    ? checkLongerTwoChars(LastName)
                      ? Colors.sbkGreen
                      : Colors.sbkRed
                    : undefined
                }
                borderColor={
                  LastName !== undefined || whichIsFocused === 'Last Name'
                    ? LastName
                      ? checkLongerTwoChars(LastName)
                        ? Colors.sbkGreen
                        : Colors.sbkRed
                      : Colors.sbkWhite
                    : Colors.sbkGrey
                }
                setWhichIsFocused={setWhichIsFocused}
                isError={LastName !== undefined && !checkLongerTwoChars(LastName)}
                errorText="Must be 3 characters or more"
              />
            </View>
            <TextInputFramed
              width={100}
              stateSetter={setBirthday}
              value={Birthday}
              label="Date of Birth (DD/MM/YYYY)"
              hasIcon={true}
              rightIconName={
                Birthday
                  ? validateBirthday(Birthday)
                    ? 'check-circle'
                    : 'close-circle'
                  : undefined
              }
              IconColor={
                Birthday
                  ? validateBirthday(Birthday)
                    ? Colors.sbkGreen
                    : Colors.sbkRed
                  : undefined
              }
              borderColor={
                Birthday !== undefined || whichIsFocused === 'Date of Birth (DD/MM/YYYY)'
                  ? Birthday
                    ? validateBirthday(Birthday)
                      ? Colors.sbkGreen
                      : Colors.sbkRed
                    : Colors.sbkWhite
                  : Colors.sbkGrey
              }
              setWhichIsFocused={setWhichIsFocused}
              isError={Birthday !== undefined && !validateBirthday(Birthday)}
              errorText="Must be over the age of 18"
            />
          </View>
        </View>
        <View style={defaultStyles.footerContainer}>
          <ContinueButton path="Signup/EmailPass" text="Continue" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.sbkWhite,
    marginBottom: 12,
  },
  userDetailsContainer: {
    height: '50%',
    gap: 6,
    flexDirection: 'column',
  },
  userNameContainer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
