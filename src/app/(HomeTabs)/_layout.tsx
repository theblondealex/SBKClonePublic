import Colors from '@/constants/Colors';
import { AntDesign, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.sbkGrey, paddingBottom: 10 }}>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.sbkGreen,
          headerShown: false,
          tabBarStyle: {
            paddingTop: 10,
            shadowOffset: {
              width: 0,
              height: -26,
            },
            shadowOpacity: 0.2,
            borderTopWidth: 0,
            borderColor: Colors.sbkGrey,
            shadowRadius: 16.0,
            elevation: 24,
            backgroundColor: Colors.sbkGrey,
            position: 'absolute',
            bottom: 0,
            width: '100%',
          },
          tabBarLabelStyle: {
            fontWeight: 'light',
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            lazy: false,
            title: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="Search"
          options={{
            lazy: false,
            title: 'Search',
            tabBarIcon: ({ color }) => <Ionicons size={24} name="search-outline" color={color} />,
          }}
        />
        <Tabs.Screen
          name="Wallet"
          options={{
            lazy: false,
            title: 'Wallet',
            tabBarIcon: ({ color }) => <AntDesign size={24} name="creditcard" color={color} />,
          }}
        />
        <Tabs.Screen
          name="(MyBets)"
          options={{
            lazy: false,
            title: 'My Bets',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons size={24} name="ticket" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Account"
          options={{
            lazy: false,
            title: 'Account',
            tabBarIcon: ({ color }) => <Octicons size={24} name="person" color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}
