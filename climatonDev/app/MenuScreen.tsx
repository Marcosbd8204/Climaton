import { View, Text, StyleSheet, Button } from 'react-native';
import { useTheme } from '../src/theme/ThemeProvider';

export default function MenuScreen() {
  // Corrigido: desestruturando o objeto retornado pelo hook
  const { theme, toggleTheme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <Text style={[styles.title, { color: theme.colors.text }]}>
        Menu de Climas ☁️
      </Text>

      <View style={styles.cardsContainer}>
        <View style={[styles.card, { backgroundColor: theme.colors.primary }]}>
          <Text style={styles.cardText}>☀️ Ensolarado</Text>
        </View>

        <View style={[styles.card, { backgroundColor: theme.colors.secondary }]}>
          <Text style={styles.cardText}>🌧️ Chuvoso</Text>
        </View>

        <View style={[styles.card, { backgroundColor: theme.colors.button }]}>
          <Text style={styles.cardText}>⛅ Nublado</Text>
        </View>
      </View>

      {/* Exemplo de uso do toggleTheme */}
      <Button title="Alternar Tema" onPress={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 40,
  },

  cardsContainer: {
    marginTop: 40,
    width: '100%',
    gap: 16,
  },

  card: {
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },

  cardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
