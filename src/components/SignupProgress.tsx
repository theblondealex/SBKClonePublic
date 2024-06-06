import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { MyText } from '@/components/MyText';

const SignupProgress = ({ page }: { page: number }) => {
  return (
    <View style={styles.progressContainer}>
      <View style={styles.progressBarSection}>
        <View
          style={[
            styles.progressBarFill,
            {
              backgroundColor: page >= 1 ? Colors.sbkGreen : Colors.sbkGrey,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            },
          ]}
        />
        <MyText
          style={[
            styles.progressText,
            {
              color: page >= 1 ? Colors.sbkWhite : Colors.sbkGrey,
            },
          ]}>
          1. Phone
        </MyText>
      </View>
      <View style={styles.progressBarSection}>
        <View
          style={[
            styles.progressBarFill,
            {
              backgroundColor: page >= 2 ? Colors.sbkGreen : Colors.sbkGrey,
            },
          ]}
        />
        <MyText
          style={[
            styles.progressText,
            {
              color: page >= 2 ? Colors.sbkWhite : Colors.sbkGrey,
            },
          ]}>
          2. Details
        </MyText>
      </View>
      <View style={styles.progressBarSection}>
        <View
          style={[
            styles.progressBarFill,
            {
              backgroundColor: page >= 3 ? Colors.sbkGreen : Colors.sbkGrey,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            },
          ]}
        />
        <View style={{ flexDirection: 'row', gap: 4 }}>
          <Ionicons
            style={{
              alignSelf: 'center',
              marginTop: 4,
              opacity: page === 3 ? 1 : 0.8,
            }}
            name="gift-outline"
            size={16}
            color={Colors.sbkPromo}
          />
          <MyText
            style={[
              styles.progressText,
              {
                color: Colors.sbkPromo,
                opacity: page === 3 ? 1 : 0.8,
                alignSelf: 'center',
              },
            ]}>
            Promo
          </MyText>
        </View>
      </View>
    </View>
  );
};
export default SignupProgress;
const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  progressBarSection: {
    width: '30%',
    height: 40,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  progressBarFill: {
    width: '100%',
    height: 8,
  },
  progressText: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
