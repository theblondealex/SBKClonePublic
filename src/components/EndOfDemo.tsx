import { MyText } from '@/components/MyText';
import Colors from '@/constants/Colors';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity, View, useWindowDimensions } from 'react-native';

export default function EndOfDemo({
  heightModifier,
  marginTop,
}: {
  heightModifier: number;
  marginTop: number;
}) {
  const height = useWindowDimensions().height;
  return (
    <View style={[styles.endSummaryContainer, { height: height * heightModifier, marginTop }]}>
      <MyText style={styles.SBKText}>SBK</MyText>
      <View>
        <MyText style={styles.endTitle}>Thank you!</MyText>
        <MyText style={styles.endText}>
          You have reached the end of the demo. I would love to work for Smarkets. Click below to
          see my website.
        </MyText>
      </View>
      <TouchableOpacity
        onPress={() => WebBrowser.openBrowserAsync('https://www.theblondealex.com')}
        style={styles.endButtonContainer}>
        <MyText style={styles.endButtonText}>Alexander Clay</MyText>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  endSummaryContainer: {
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.sbkGrey,
    borderRadius: 20,
    padding: 20,
  },
  SBKText: {
    marginTop: 8,
    fontSize: 38,
    fontWeight: 'bold',
    color: Colors.sbkLightGrey,
    textAlign: 'center',
  },
  endTitle: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.sbkWhite,
  },
  endText: {
    marginTop: 8,
    fontSize: 18,
    textAlign: 'center',
    color: Colors.sbkLightGrey,
  },
  endButtonContainer: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.sbkGreen,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  endButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.sbkBlack,
  },
});
