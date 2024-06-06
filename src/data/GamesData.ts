import type * as ExpoIcon from '@expo/vector-icons';

export type game = {
  name: string;
  iconName: string;
  iconType: keyof typeof ExpoIcon;
};

export const gamesData: game[] = [
  {
    name: 'In-Play',
    iconName: 'stopwatch',
    iconType: 'Fontisto',
  },
  {
    name: 'Football',
    iconName: 'football',
    iconType: 'Ionicons',
  },
  {
    name: 'Racing',
    iconName: 'horse-head',
    iconType: 'FontAwesome6',
  },
  {
    name: 'Tennis',
    iconName: 'tennisball-outline',
    iconType: 'Ionicons',
  },
  {
    name: 'Golf',
    iconName: 'golf-sharp',
    iconType: 'Ionicons',
  },
  {
    name: 'Greyhound',
    iconName: 'dog',
    iconType: 'FontAwesome5',
  },
  {
    name: 'Am. Football',
    iconName: 'football',
    iconType: 'Ionicons',
  },
  {
    name: 'Aus. Football',
    iconName: 'football',
    iconType: 'Ionicons',
  },
  {
    name: 'Baseball',
    iconName: 'baseball',
    iconType: 'Ionicons',
  },
  {
    name: 'Basketball',
    iconName: 'basketball',
    iconType: 'Ionicons',
  },
  {
    name: 'Boxing',
    iconName: 'boxing-glove',
    iconType: 'MaterialCommunityIcons',
  },
  {
    name: 'Cricket',
    iconName: 'cricket',
    iconType: 'MaterialCommunityIcons',
  },
  {
    name: 'Current Af...',
    iconName: 'briefcase',
    iconType: 'FontAwesome',
  },
  {
    name: 'Cycling',
    iconName: 'bicycle',
    iconType: 'Ionicons',
  },
  {
    name: 'Esports',
    iconName: 'gamepad',
    iconType: 'FontAwesome',
  },
  {
    name: 'Handball',
    iconName: 'volleyball',
    iconType: 'FontAwesome6',
  },
  {
    name: 'Ice Hockey',
    iconName: 'sports-hockey',
    iconType: 'MaterialIcons',
  },
  {
    name: 'MMA',
    iconName: 'boxing-glove',
    iconType: 'MaterialCommunityIcons',
  },
  {
    name: 'Motorsport',
    iconName: 'flag-checkered',
    iconType: 'FontAwesome',
  },
  {
    name: 'Politics',
    iconName: 'building-columns',
    iconType: 'FontAwesome6',
  },
  {
    name: 'Rugby L.',
    iconName: 'rugby',
    iconType: 'MaterialCommunityIcons',
  },
  {
    name: 'Rugby U.',
    iconName: 'rugby',
    iconType: 'MaterialCommunityIcons',
  },
  {
    name: 'Snooker',
    iconName: 'billiards-rack',
    iconType: 'MaterialCommunityIcons',
  },
  {
    name: 'Table Ten...',
    iconName: 'table-tennis',
    iconType: 'FontAwesome5',
  },
  {
    name: 'TV and Sp...',
    iconName: 'film',
    iconType: 'Fontisto',
  },
  {
    name: 'Volleyball',
    iconName: 'volleyball',
    iconType: 'FontAwesome6',
  },
];
