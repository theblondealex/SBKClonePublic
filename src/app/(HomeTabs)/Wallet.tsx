import EndOfDemo from '@/components/EndOfDemo';
import { MyText } from '@/components/MyText';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tab() {
  return (
    <SafeAreaView style={[defaultStyles.Container, { backgroundColor: Colors.sbkGrey }]}>
      {/* headerbar */}
      <View style={styles.headerBar}>
        <MyText style={styles.title}>My Funds</MyText>
      </View>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        style={styles.contentContainer}>
        <EndOfDemo marginTop={80} heightModifier={0.6} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerBar: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.sbkGrey,
  },
  title: {
    fontSize: 18,
    fontWeight: '300',
    color: Colors.sbkWhite,
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.sbkBlack,
  },
});
