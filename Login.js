import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native';
import Logado from './logado';
import failedLogin from './failedlogin';



function HomeLogin({navigation}){
    function navegarSucess(){
        navigation.navigate('Logado')
    }
    function navegarFailed(){
        navigation.navigate('failedLogin')
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = (txtEmail) => {
        setEmail(txtEmail)
    }
    const onChangePassword = (txtPassword) => {
        setEmail(txtPassword)
    }
    /*
    const login =  () =>{
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
            navegarSucess()
        }).catch(()=> {
            navegarFailed()
        })
    }*/
    return(
        <View>
            <Text>Login de user</Text>
            <Text>E-mail</Text>
            <TextInput
                value={email}
                onChangeText={txtEmail => onChangeEmail(txtEmail)}>
            </TextInput>

            <Text>Senha</Text>
            <TextInput
                value={password}
                onChangePassword={txtPassword => onChangePassword(txtPassword)}>
            </TextInput>
            <Button
            tittle="Entrar"
            onPress={login}/>
        </View>
    );
}
    
    const Stack = createNativeStackNavigator();

function LoginForm() {
return (
    <Stack.Navigator>
        <Stack.Screen name="HomeLogin" component={HomeLogin} />
        <Stack.Screen name="logado" component={Logado} />
        <Stack.Screen name="failedLogin" component={failedLogin} />
    </Stack.Navigator>

);
}

export default LoginForm;