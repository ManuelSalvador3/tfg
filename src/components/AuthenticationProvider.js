import React, { useState } from 'react';
import * as SecureStore from 'expo-secure-store';


export const LoggedContext = React.createContext({
    isLogged: false,
    setIsLogged: () => {}
});

export const AuthenticationProvider = (props) => {
    const [isLogged, setIsLogged] = useState(false);
    
    // Listening to changes of while in run-time
    React.useEffect(() => {
        (async () => {
            console.log("Test")
            let  jwt = await SecureStore.getItemAsync('secure_token')
            if(jwt == null) {
              setIsLogged(false)
              console.log("User not registered App.js")
            }else {
              setIsLogged(true)
            }
        })();
    }, []);

    const defaultContext = {
        isLogged,
        setIsLogged
    };

    return (
        <LoggedContext.Provider value={defaultContext}>
            {props.children}
        </LoggedContext.Provider>
    );
};

// Custom hook to get the theme object returns {isDark, colors, setScheme}
export const useAuthentication = () => React.useContext(LoggedContext);
export default AuthenticationProvider;