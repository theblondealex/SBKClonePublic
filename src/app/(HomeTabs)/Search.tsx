import { MyText } from '@/components/MyText';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { gamesData, type game } from '@/data/GamesData';
import * as ExpoIcon from '@expo/vector-icons';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const GameLine = ({ item }: { item: game }) => {
  const IconComponent = ExpoIcon[item.iconType];

  return (
    <TouchableOpacity style={styles.gameButton}>
      <View style={styles.gameButtonSplitContainer}>
        <IconComponent name={item.iconName as string} size={24} color={Colors.sbkGreen} />
        <MyText style={styles.gameButtonText}>{item.name}</MyText>
      </View>
      <View style={styles.gameButtonSplitContainer}>
        <View style={styles.gameButtonAmountContainer}>
          <MyText style={styles.gameButtonAmountText}>{Math.floor(Math.random() * 401)}</MyText>
        </View>
        <ExpoIcon.AntDesign name="staro" size={20} color={Colors.sbkGrey} />
      </View>
    </TouchableOpacity>
  );
};

export default function Tab() {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={[defaultStyles.Container, { backgroundColor: Colors.sbkGrey }]}>
      {/* headerbar */}
      <View style={styles.headerBar}>
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={18} color={Colors.sbkGrey} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search events or people"
            placeholderTextColor={Colors.sbkGrey}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
        <TouchableOpacity>
          <FontAwesome name="bell-o" size={24} color={Colors.sbkWhite} />
        </TouchableOpacity>
      </View>
      <View style={styles.inPlayContainer}>
        <MyText style={styles.inPlayText}>In-Play</MyText>
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          data={gamesData}
          renderItem={({ item }) => <GameLine item={item} />}
          keyExtractor={(item) => item.name}
          showsHorizontalScrollIndicator={false}
        />
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
  searchContainer: {
    width: '90%',
    backgroundColor: Colors.sbkLightBlack,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  searchInput: {
    flex: 1,
    color: Colors.sbkLightGrey,
  },
  inPlayContainer: {
    width: '100%',
    height: 40,
    backgroundColor: Colors.sbkGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inPlayText: {
    fontSize: 18,
    fontWeight: '300',
    color: Colors.sbkWhite,
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.sbkBlack,
  },
  gameButton: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderColor: Colors.sbkGrey,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 1,
  },
  gameButtonSplitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  gameButtonText: {
    fontSize: 16,
    fontWeight: '300',
    color: Colors.sbkWhite,
  },
  gameButtonAmountContainer: {
    backgroundColor: Colors.sbkGrey,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
    alignItems: 'center',
  },
  gameButtonAmountText: {
    fontSize: 12,
    fontWeight: '300',
    color: Colors.sbkLightGrey,
  },
});
