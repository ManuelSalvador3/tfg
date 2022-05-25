import * as SecureStore from 'expo-secure-store';

export async function handleToken() {
    try {
        const token = await SecureStore.getItemAsync('secure_token');
        return token
    } catch (error) {
        return ''
    }
   

}