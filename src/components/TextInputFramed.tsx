import Colors from '@/constants/Colors';
import type React from 'react';
import { useState } from 'react';
import { LogBox, StyleSheet, View, type ViewStyle } from 'react-native';
import { MyText } from '@/components/MyText';
import { TextInput } from 'react-native-paper';
import type { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

//this is a result of a bug in react-native-paper
LogBox.ignoreLogs([
  'Warning: TextInput.Icon: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.',
]);

const TextInputFramed = ({
  width,
  stateSetter,
  value,
  label,
  borderColor,
  setWhichIsFocused,
  isError,
  errorText,
  secure,
  rightIconName,
  hasIcon,
  IconColor,
}: {
  width: number;
  stateSetter: React.Dispatch<React.SetStateAction<string | undefined>>;
  value: string | undefined;
  label: string;
  borderColor?: string | ViewStyle['borderColor'];
  setWhichIsFocused: React.Dispatch<React.SetStateAction<string>>;
  isError?: boolean;
  errorText?: string;
  secure?: boolean;
  rightIconName?: 'check-circle' | 'close-circle' | 'eye' | 'eye-off';
  hasIcon?: boolean;
  IconColor?: string;
}) => {
  const [show, setShow] = useState(false);
  const rightIconHandled = secure ? (show ? 'eye-off' : 'eye') : rightIconName;

  const handlePressDown = () => {
    setShow(true);
  };

  const handlePressUp = () => {
    setShow(false);
  };

  return (
    <View style={[styles.container, { width: `${width}%` }]}>
      <View style={[styles.inputContainer, { borderColor: borderColor }]}>
        <TextInput
          textColor="#fff"
          underlineStyle={{
            height: 0,
          }}
          secureTextEntry={secure ? !show : false}
          activeUnderlineColor={Colors.sbkGrey}
          style={[
            styles.inputField,
            {
              color: Colors.sbkWhite,
            },
          ]}
          cursorColor={Colors.sbkGreen}
          label={label}
          mode="flat"
          value={value}
          onChangeText={(text) => {
            stateSetter(text);
          }}
          onFocus={() => {
            setWhichIsFocused(label);
          }}
          right={
            hasIcon ? (
              <TextInput.Icon
                icon={rightIconHandled as IconSource}
                color={IconColor}
                onTouchStart={handlePressDown}
                onTouchEnd={handlePressUp}
              />
            ) : null
          }
        />
      </View>
      <View style={styles.errorContainer}>
        {isError ? <MyText style={styles.errorText}>{errorText}</MyText> : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  inputContainer: {
    justifyContent: 'center',
    height: 60,
    backgroundColor: Colors.sbkLightBlack,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
  },
  inputField: {
    backgroundColor: Colors.sbkLightBlack,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  errorContainer: {
    height: 20,
  },
  errorText: {
    paddingVertical: 4,
    color: Colors.sbkRed,
    fontSize: 12,
    fontWeight: 'light',
  },
});

export default TextInputFramed;
