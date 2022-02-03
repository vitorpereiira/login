// In App.js in a new project

import * as React from 'react';
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, StyleSheet, Animated, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-elements';
import Cadastro from './Cadastration';
import Login from './Login';
import { AntDesign, FontAwesome } from '@expo/vector-icons';



function HomeScreen({navigation}) {
  return (
    <Animated.View 
    style={[
    styles.container,
    {
    }
    ]}
    >
      <TextInput
      style={styles.input}
      placeholder="Usuário ou e-mail"
      autoCorrect={false}
      onChange={()=> {}}
      ><FontAwesome name="user" size={24} color="black" />
        </TextInput>


      <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChange={()=> {}}
        
      ><FontAwesome name="lock" size={24} color="black" />
        </TextInput>

      <Button
          buttonStyle={styles.button}
          title='Acessar'
          onPress={() => navigation.navigate('Login')}
      />
        <Button
          buttonStyle={styles.button}
          title='Criar uma conta gratuita'
          onPress={() => navigation.navigate('Cadastro')}
      />

    </Animated.View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: 5,
    backgroundColor: '#191919'
  },
  input:{
    backgroundColor: '#FFF',
    width: '85%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 10,
    padding: 10,
    
  },
  button: {
    backgroundColor: '#35AAFF',
      margin: 5,
      width: 280,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 40,
  },
})

export default App;