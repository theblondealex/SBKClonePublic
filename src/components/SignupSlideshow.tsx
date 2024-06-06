import { MyText } from '@/components/MyText';
import Colors from '@/constants/Colors';
import { Image, Pressable, StyleSheet, Text, View, type ImageSourcePropType } from 'react-native';

interface infoItem {
  text: string;
  image: ImageSourcePropType;
  extraText?: string[];
}

const SignupSlideshow = ({
  item,
  index,
  width,
  imagePress,
}: {
  item: infoItem;
  index: number;
  width: number;
  imagePress: (direction: 'next' | 'prev') => void;
}) => {
  const handlePress = (event: { nativeEvent: { pageX: number } }) => {
    if (event.nativeEvent.pageX < width / 2) {
      imagePress('prev');
    } else if (event.nativeEvent.pageX > width / 2) {
      imagePress('next');
    }
  };

  return (
    <Pressable style={[styles.container, { width }]} onPress={handlePress}>
      <MyText style={styles.text}>{item.text}</MyText>
      <View style={styles.imageContainer}>
        {item.extraText ? (
          <View style={styles.extraTextContainer}>
            {item.extraText.map((text, index) => (
              <MyText
                key={`${text}`}
                style={[
                  styles.extraText,
                  {
                    color: index % 2 !== 0 ? Colors.sbkGreen : Colors.sbkWhite,
                    fontSize: index % 2 !== 0 ? 64 : 38,
                  },
                ]}>
                {text}
              </MyText>
            ))}
          </View>
        ) : null}
        <Image
          source={item.image}
          style={{ flex: item.extraText ? 1 : 0.8 }}
          resizeMode="contain"
        />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginHorizontal: 6,
    fontWeight: 'bold',
    color: '#fff',
  },
  imageContainer: {
    flex: 1,
    width: '80%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  extraTextContainer: {
    flex: 1,
    gap: 0,
    justifyContent: 'center',
  },
  extraText: {
    fontFamily: 'sans-serif-medium',
    marginVertical: -4,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignupSlideshow;
