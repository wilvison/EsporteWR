import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import NovaPartidaScreen from './src/screens/NovaPartidaScreen';
import PlacarScreen from './src/screens/PlacarScreen';
import JogadoresScreen from './src/screens/JogadoresScreen';
import CadastroJogadorScreen from './src/screens/CadastroJogadorScreen';
import ColetaScreen from './src/screens/ColetaScreen';
import HistoricoScreen from './src/screens/HistoricoScreen';
import DetalhesPartidaScreen from './src/screens/DetalhesPartidaScreen';
import ConfigScreen from './src/screens/ConfigScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'EsporteWR' }}
        />
        <Stack.Screen 
          name="NovaPartida" 
          component={NovaPartidaScreen}
          options={{ title: 'Nova Partida' }}
        />
        <Stack.Screen 
          name="Placar" 
          component={PlacarScreen}
          options={{ title: 'Placar' }}
        />
        <Stack.Screen 
          name="Jogadores" 
          component={JogadoresScreen}
          options={{ title: 'Jogadores' }}
        />
        <Stack.Screen 
          name="CadastroJogador" 
          component={CadastroJogadorScreen}
          options={{ title: 'Novo Jogador' }}
        />
        <Stack.Screen 
          name="Coleta" 
          component={ColetaScreen}
          options={{ title: 'Coleta de Pagamento' }}
        />
        <Stack.Screen 
          name="Historico" 
          component={HistoricoScreen}
          options={{ title: 'Histórico' }}
        />
        <Stack.Screen 
          name="DetalhesPartida" 
          component={DetalhesPartidaScreen}
          options={{ title: 'Detalhes da Partida' }}
        />
        <Stack.Screen 
          name="Config" 
          component={ConfigScreen}
          options={{ title: 'Configurações' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
