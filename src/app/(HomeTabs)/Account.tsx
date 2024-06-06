import EndOfDemo from '@/components/EndOfDemo';
import { MyText } from '@/components/MyText';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tab() {
  return (
    <SafeAreaView style={[defaultStyles.Container, { backgroundColor: Colors.sbkGrey }]}>
      {/* headerbar */}
      <View style={styles.headerBar}>
        <MyText style={styles.title}>SBK</MyText>
        <View style={styles.rightHeaderItems}>
          <TouchableOpacity>
            <MaterialCommunityIcons name="lightbulb-outline" size={24} color={Colors.sbkWhite} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="gift-outline" size={24} color={Colors.sbkWhite} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="bell-o" size={24} color={Colors.sbkWhite} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={styles.contentContainer}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <EndOfDemo marginTop={120} heightModifier={0.5} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerBar: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.sbkGrey,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.sbkWhite,
  },
  rightHeaderItems: {
    gap: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  contentContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.sbkBlack,
  },
});
