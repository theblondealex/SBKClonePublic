import { MyText } from '@/components/MyText';
import Colors from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const SignupHeader = () => {
  return (
    <View style={styles.headerBar}>
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}>
        <AntDesign name="arrowleft" size={24} color={Colors.sbkWhite} />
      </TouchableOpacity>
      <MyText style={styles.title}>SBK</MyText>
      <View style={{ width: 24 }} />
    </View>
  );
};
export default SignupHeader;
const styles = StyleSheet.create({
  headerBar: {
    width: '100%',
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.sbkWhite,
    textAlign: 'center',
  },
});
