import { create } from 'zustand';

type PhoneNumberStore = {
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
};

const usePhoneNumberStore = create<PhoneNumberStore>((set) => ({
  phoneNumber: '',
  setPhoneNumber: (phoneNumber) => set((state) => ({ phoneNumber: phoneNumber })),
}));

export default usePhoneNumberStore;
