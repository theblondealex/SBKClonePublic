import EndOfDemo from '@/components/EndOfDemo';
import { MyText } from '@/components/MyText';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { gamesData, type game } from '@/data/GamesData';
import * as ExpoIcon from '@expo/vector-icons';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const GameButton = ({ item }: { item: game }) => {
  // Dynamically select the correct icon set based on item.iconType
  const IconComponent = ExpoIcon[item.iconType];

  return (
    <TouchableOpacity style={styles.gameButton}>
      {/* Render the icon using the selected icon set */}
      <IconComponent name={item.iconName as string} size={24} color={Colors.sbkGreen} />
      <MyText style={styles.gameButtonText}>{item.name}</MyText>
    </TouchableOpacity>
  );
};
export default function Tab() {
  return (
    <SafeAreaView style={[defaultStyles.Container, { backgroundColor: Colors.sbkGrey }]}>
      <View style={{ flex: 1, backgroundColor: Colors.sbkBlack }}>
        {/* headerbar */}
        <View style={styles.headerBar}>
          <MyText style={styles.title}>SBK</MyText>
          <View style={styles.rightHeaderItems}>
            <TouchableOpacity>
              <ExpoIcon.MaterialCommunityIcons
                name="lightbulb-outline"
                size={24}
                color={Colors.sbkWhite}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <ExpoIcon.Ionicons name="gift-outline" size={24} color={Colors.sbkWhite} />
            </TouchableOpacity>
            <TouchableOpacity>
              <ExpoIcon.FontAwesome name="bell-o" size={24} color={Colors.sbkWhite} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.sbkBlack,
          }}>
          <FlatList
            horizontal={true}
            data={gamesData}
            renderItem={({ item }) => <GameButton item={item} />}
            keyExtractor={(item) => item.name}
            style={{ height: 80 }}
            contentContainerStyle={{
              justifyContent: 'center',
              paddingHorizontal: 10,
              marginVertical: 10,
            }}
          />
          <EndOfDemo marginTop={80} heightModifier={0.5} />
        </ScrollView>
      </View>
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
  gameButton: {
    marginHorizontal: 15,
    marginVertical: 5,
    gap: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameButtonText: {
    color: Colors.sbkLightGrey,
    marginTop: 4,
    fontSize: 12,
    fontWeight: '300',
  },
});
