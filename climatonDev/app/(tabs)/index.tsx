import { View, Text, Image } from 'react-native';
import { homeStyles } from '../../src/styles/home.styles';
import { Button } from '../../components/Button';
import { router } from 'expo-router';

export default function SplashScreen() {
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.logoContainer}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
          }}
          style={homeStyles.logo}
        />

        <Text style={homeStyles.title}>Climaton</Text>

        <Text style={homeStyles.subtitle}>
          Conectando você ao infinito do céu
        </Text>
      </View>

      <Button
        title="Entrar"
        onPress={() => router.push('../MenuScreen')}
      />
    </View>
  );
}