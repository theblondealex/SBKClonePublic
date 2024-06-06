import EndOfDemo from '@/components/EndOfDemo';
import { defaultStyles } from '@/constants/Styles';
import { View } from 'react-native';

export default function Tab() {
  return (
    <View style={[defaultStyles.Container, { justifyContent: 'center', alignItems: 'center' }]}>
      <EndOfDemo marginTop={-20} heightModifier={0.5} />
    </View>
  );
}
