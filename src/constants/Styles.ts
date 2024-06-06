import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const defaultStyles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.sbkBlack,
  },
  headerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  KeyboardViewStyle: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    width: '90%',
    marginTop: 28,
  },
  footerContainer: {
    flex: 1,
    height: '20%',
    width: '95%',
    justifyContent: 'flex-end',
    marginBottom: 20,
    alignItems: 'center',
  },
});
