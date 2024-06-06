import { MyText } from '@/components/MyText';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Settled from './Settled';
import Upcoming from './Upcoming';

const Tab = createMaterialTopTabNavigator();

export default function MyBets() {
  return (
    <SafeAreaView style={[defaultStyles.Container, { backgroundColor: Colors.sbkGrey }]}>
      {/* headerbar */}
      <View style={styles.headerBar}>
        <MyText style={styles.title}>HISTORY</MyText>
        <View style={styles.middleHeaderItems}>
          <MyText style={styles.middleHeaderText}>My Bets</MyText>
          <View style={styles.betAmountContainer}>
            <MyText style={styles.middleHeaderText}>0</MyText>
          </View>
        </View>
        <View style={styles.fakeRightContainer} />
      </View>
      <View style={styles.screenContainer}>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: Colors.sbkGreen,
            tabBarIndicatorStyle: {
              backgroundColor: Colors.sbkGreen,
            },
            tabBarInactiveTintColor: Colors.sbkLightGrey,
            tabBarStyle: {
              backgroundColor: Colors.sbkGrey,
            },
          }}>
          <Tab.Screen
            name="Upcoming"
            component={Upcoming}
            options={{
              lazy: false,
              title: 'Upcoming',
            }}
          />
          <Tab.Screen
            name="Settled"
            component={Settled}
            options={{
              lazy: false,
              title: 'Settings',
            }}
          />
        </Tab.Navigator>
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
    borderBottomColor: Colors.sbkLightBlack,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.sbkWhite,
  },
  middleHeaderItems: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  middleHeaderText: {
    fontSize: 16,
    fontWeight: '300',
    color: Colors.sbkWhite,
  },
  betAmountContainer: {
    backgroundColor: Colors.sbkGreen,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  fakeRightContainer: {
    paddingRight: 60,
  },
  screenContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.sbkBlack,
  },
});
