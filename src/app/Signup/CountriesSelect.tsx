import useCurrentCountryCodeStore from '@/StateManagement/CountryCodeStore';
import { MyText } from '@/components/MyText';
import Colors from '@/constants/Colors';
import { AllCountriesData, PopularCountriesData } from '@/data/CountriesData';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import CountryFlag from 'react-native-country-flag';

const CountryLine = ({
  country,
}: {
  country: { name: string; isoCode: string; phoneCode: string };
}) => {
  const { CountryInfo, setCountryInfoIsoCode, setCountryInfoPhoneCode, setCountryInfoName } =
    useCurrentCountryCodeStore();

  const onPress = () => {
    setCountryInfoIsoCode(country.isoCode);
    setCountryInfoPhoneCode(country.phoneCode);
    setCountryInfoName(country.name);
    router.back();
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.countryLine,
        {
          backgroundColor: CountryInfo.phoneCode === country.phoneCode ? '#2f2f2f' : 'transparent',
        },
      ]}>
      <View style={styles.countryLineContainer}>
        <CountryFlag isoCode={country.isoCode} size={12} />
        <MyText style={styles.countryName}>{country.name}</MyText>
        <MyText style={styles.phoneCode}>({country.phoneCode})</MyText>
      </View>
      {CountryInfo.phoneCode === country.phoneCode ? (
        <AntDesign
          name="checkcircle"
          size={16}
          color={'green'}
          style={{
            marginRight: 10,
          }}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default function CountriesSelect() {
  return (
    <View style={styles.container}>
      {/* top header with x in top right corner */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            router.back();
          }}>
          <MyText style={styles.backText}>X</MyText>
        </TouchableOpacity>
      </View>
      {/* Selext cOuntry code title */}
      <ScrollView scrollEnabled={true} contentContainerStyle={styles.ScrollView}>
        <MyText style={styles.title}>Select Country Code</MyText>
        {/* popular countries setion */}
        <View style={styles.popularContainer}>
          <MyText style={styles.popularText}>Popular Countries</MyText>
          {PopularCountriesData.map((country) => (
            // Use the CountryLine component
            <CountryLine key={country.name} country={country} />
          ))}
        </View>
        {/* Al countries setion */}
        <View style={styles.allContainer}>
          <MyText style={styles.allText}>All Countries</MyText>
          {AllCountriesData.map((country) => (
            // Use the CountryLine component
            <CountryLine key={country.name} country={country} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.sbkBlack,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  back: {
    marginRight: 10,
    marginTop: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    fontSize: 24,
    fontWeight: 'light',
    color: Colors.sbkWhite,
  },
  title: {
    fontSize: 24,
    marginTop: 6,
    fontWeight: 'light',
    color: Colors.sbkWhite,
    textAlign: 'left',
  },
  ScrollView: {
    marginVertical: 12,
    width: '100%',
    paddingHorizontal: 10,
  },
  popularContainer: {
    marginTop: 24,
  },
  popularText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.sbkWhite,
    marginBottom: 16,
  },
  countryLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBlockColor: Colors.sbkGrey,
    paddingVertical: 12,
  },
  countryLineContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
    gap: 8,
  },
  countryName: {
    fontSize: 16,
    fontWeight: 'light',
    color: Colors.sbkWhite,
  },
  phoneCode: {
    fontSize: 12,
    fontWeight: 'light',
    opacity: 0.4,
    color: Colors.sbkWhite,
  },
  allContainer: {
    marginVertical: 24,
  },
  allText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.sbkWhite,
    marginBottom: 16,
  },
});
