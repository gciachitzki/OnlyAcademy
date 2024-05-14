import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import User from './src/User'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"> {Login}
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} /> {Login}
        <Stack.Screen name="User" component={User} options={{ title: 'Perfil do Usuário' }} /> {User}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
