import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native';
import sucess from './sucess';

function TaskForm({navegation}){
    function navegar(){
        navegation.navigate('sucess')
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = (txtEmail) => {
        setEmail(txtEmail)
    }
    const onChangePassword = (txtPassword) => {
        setPassword(txtPassword)
    }
    /*const Cadastration = () => {
        firebase.auth().createUserWithEmailAndPassword(email,password).then(() =>{
            navegar()
        }).catch(()=>{

        })
    }*/

    return(
        <View>
            <Text>Cadastro de Usuário</Text>
            <Text>E-mail</Text>
            <TextInput
            value={email}
            onChangeText = { txtEmail  => onChangeEmail(txtEmail)}>

            </TextInput>
            <Text>Senha</Text>
            <TextInput
            value={password}
            onChangeText = { txtPassword  => onChangePassword(txtPassword)}>

                
            </TextInput>
            <Button>
                title='Cadastrar'
                onPress={Cadastration}
            </Button>
        </View>
    );

}

const Stack = createNativeStackNavigator();

function CadastrationForm() {
return (
    <Stack.Navigator>
        <Stack.Screen name="TaskForm" component={TaskForm} />
        <Stack.Screen name="sucess" component={sucess} />
    </Stack.Navigator>

);
}

export default CadastrationForm;