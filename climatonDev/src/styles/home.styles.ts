import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal: 24,
  },

  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 24,
  },

  title: {
    fontSize: 36,
    fontWeight: '700',
    color: Colors.light.text,
  },

  subtitle: {
    marginTop: 12,
    fontSize: 16,
    color: Colors.light.textSecondary,
    textAlign: 'center',
    paddingHorizontal: 20,
  },

  button: {
    width: '100%',
    backgroundColor: Colors.light.button,
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',

    shadowColor: Colors.light.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,

    elevation: 8,
  },

  buttonText: {
    color: Colors.light.buttonText,
    fontSize: 18,
    fontWeight: '600',
  },
});