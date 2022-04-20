import { createAppContainer } from 'react-navigation-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createNavigationContainer, createStackNavigator } from 'react-navigation';
import Login from '../login/Login';
import Register from '../login/Register';
import { Stack } from 'react-native-router-flux';

const Stack = createNativeStackNavigator()

const screens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.screen
                    name = 'Login'
                    component = { Login }
                />
                <Stack.screen
                    name = 'Register'
                    component = { Register }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
