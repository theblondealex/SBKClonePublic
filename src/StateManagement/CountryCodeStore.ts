import { create } from 'zustand';

type CountryInfo = {
  name: string;
  isoCode: string;
  phoneCode: string;
};

type CurrentCountryInfoStore = {
  CountryInfo: CountryInfo;
  setCountryInfoName: (countryName: string) => void;
  setCountryInfoIsoCode: (countryIsoCode: string) => void;
  setCountryInfoPhoneCode: (countryPhoneCode: string) => void;
};

const useCurrentCountryInfoStore = create<CurrentCountryInfoStore>((set) => ({
  CountryInfo: {
    name: 'United Kingdom',
    isoCode: 'GB',
    phoneCode: '+44',
  },
  setCountryInfoName: (countryName) =>
    set((state) => ({ CountryInfo: { ...state.CountryInfo, name: countryName } })),
  setCountryInfoIsoCode: (countryIsoCode) =>
    set((state) => ({ CountryInfo: { ...state.CountryInfo, isoCode: countryIsoCode } })),
  setCountryInfoPhoneCode: (countryPhoneCode) =>
    set((state) => ({ CountryInfo: { ...state.CountryInfo, phoneCode: countryPhoneCode } })),
}));

export default useCurrentCountryInfoStore;
