import ContinueButton from '@/components/ContinueButton';
import { MyText } from '@/components/MyText';
import SignupSlideshow from '@/components/SignupSlideshow';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  useWindowDimensions,
  type ImageSourcePropType,
} from 'react-native';
import Animated, {
  cancelAnimation,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

interface infoItem {
  text: string;
  image: ImageSourcePropType;
  extraText?: string[];
}

const data: infoItem[] = [
  {
    text: 'Unlock the Welcome Bonus and other great promotions',
    image: require('@/assets/Singup/1.png'),
    extraText: ['BET £10', 'GET £30', 'IN FREE BETS'],
  },
  {
    text: 'Get the industry leading odds with SBK Price Plus',
    image: require('@/assets/Singup/2.png'),
  },
  {
    text: 'Build and customise your bets for top events',
    image: require('@/assets/Singup/3.png'),
  },
  {
    text: 'See what other people are betting on',
    image: require('@/assets/Singup/4.png'),
  },
];

export default function index() {
  const WIDTH = useWindowDimensions().width;
  const ITEM_WIDTH = WIDTH * 0.9;
  const flatListRef = useRef<FlatList<infoItem>>(null);
  const progress = useSharedValue(0);
  const [selectIndex, setSelectIndex] = useState(0);

  const nextSlide = () => {
    cancelAnimation(progress);
    setSelectIndex(selectIndex === data.length - 1 ? 0 : selectIndex + 1);
    flatListRef.current?.scrollToIndex({
      index: selectIndex === data.length - 1 ? 0 : selectIndex + 1,
      animated: true,
    });
    progress.value = 0;
    startLoading();
  };

  const startLoading = () => {
    progress.value = withTiming(100, { duration: 5000 }, (e) => {
      if (e) {
        runOnJS(nextSlide)();
      }
    });
  };

  useEffect(() => {
    startLoading();
  });

  const handleCancelAnimation = () => {
    cancelAnimation(progress);
  };

  const imagePress = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      handleCancelAnimation();
      progress.value = 0;
      flatListRef.current?.scrollToIndex({
        index: selectIndex === data.length - 1 ? 0 : selectIndex + 1,
        animated: true,
      });
      setSelectIndex(selectIndex === data.length - 1 ? 0 : selectIndex + 1);
      startLoading();
    }
    if (direction === 'prev') {
      handleCancelAnimation();
      progress.value = 0;
      flatListRef.current?.scrollToIndex({
        index: selectIndex === 0 ? 0 : selectIndex - 1,
        animated: true,
      });
      setSelectIndex(selectIndex === 0 ? 0 : selectIndex - 1);
      startLoading();
    }
  };

  const rStyleLoader = (index: number) =>
    useAnimatedStyle(() => {
      return {
        width: index === selectIndex ? `${progress.value}%` : `${index < selectIndex ? 100 : 0}%`,
        backgroundColor: index <= selectIndex ? Colors.sbkWhite : Colors.sbkLightGrey,
      };
    });

  return (
    <SafeAreaView style={defaultStyles.Container}>
      <StatusBar style="auto" hidden={true} />
      {/* SBK title */}
      {/* SBK Loader */}
      <View style={styles.headerContainer}>
        <MyText style={styles.title}>SBK</MyText>
        <View style={styles.loaderContainer}>
          {Array.from({ length: 4 }).map((_, index) => (
            <View
              key={`loader_${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                index
              }`} // Better key naming convention
              style={styles.loader}>
              <View style={styles.overloader} />
              <Animated.View style={[styles.underLoader, rStyleLoader(index)]} />
            </View>
          ))}
        </View>
      </View>
      {/* middle content */}
      <View style={styles.contentContainer}>
        <FlatList
          ref={flatListRef}
          data={data}
          renderItem={({ item, index }) => {
            return (
              <SignupSlideshow
                item={item}
                index={index}
                width={ITEM_WIDTH}
                imagePress={imagePress}
              />
            );
          }}
          keyExtractor={(item) => item.text}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_WIDTH}
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          scrollEnabled={false}
        />
      </View>
      {/* footer with buttons */}
      <View style={styles.footerContainer}>
        <ContinueButton path="Signup/Phone" text="Join SBK now" />
        <MyText style={styles.footerText}>I already have an account.</MyText>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    height: '15%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginTop: 6,
    marginBottom: 32,
    fontWeight: 'bold',
    color: Colors.sbkWhite,
    textAlign: 'center',
  },
  loaderContainer: {
    marginVertical: 0,
    paddingVertical: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    width: '20%',
    height: 4,
    overflow: 'hidden',
    backgroundColor: Colors.sbkWhite,
    marginHorizontal: 5,
  },
  overloader: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.sbkLightGrey,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  underLoader: {
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  contentContainer: {
    height: '65%',
    width: '90%',
    marginTop: 12,
  },
  footerContainer: {
    height: '20%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: Colors.sbkGreen,
    fontSize: 14,
    marginTop: 10,
  },
});
