import { MyText } from '@/components/MyText';
import Colors from '@/constants/Colors';
import { router } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

const ContinueButton = ({
  path,
  text,
  disabled,
}: {
  path: string;
  text: string;
  disabled?: boolean;
}) => {
  return (
    <TouchableOpacity
      disabled={disabled === undefined ? false : disabled}
      onPress={() => {
        router.navigate(path);
      }}
      style={[
        styles.ContinueButton,
        {
          backgroundColor: disabled ? Colors.sbkGrey : Colors.sbkGreen,
        },
      ]}>
      <MyText style={styles.ContinueText}>{text}</MyText>
    </TouchableOpacity>
  );
};
export default ContinueButton;
const styles = StyleSheet.create({
  ContinueButton: {
    backgroundColor: Colors.sbkGreen,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 10,
  },
  ContinueText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
