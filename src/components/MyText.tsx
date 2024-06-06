import { Text, type TextProps } from 'react-native';

// Define a custom Text component with font scaling disabled
export const MyText = (props: TextProps) => {
  return <Text {...props} allowFontScaling={false} />;
};
