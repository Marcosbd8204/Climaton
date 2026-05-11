import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: Colors.light.text,
  },
});