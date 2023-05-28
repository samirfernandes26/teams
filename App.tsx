import { Provider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import * as SplashScreen from 'expo-splash-screen';
import { Groups } from '@screens/Groups';
import theme from './src/theme/theme';


import {
  useFonts,
  Roboto_400Regular,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';
import { useCallback, useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_900Black,
    })

    useEffect(() => {
        async function prepare() {
            try {
                setAppIsReady(true)
            } catch (error) {
                console.warn(error);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady])

    if (!appIsReady && !fontsLoaded) {
        return;
    }

    return (
        <Provider>
            <ThemeProvider theme={theme}>
                <Groups/>
            </ThemeProvider>
        </Provider>
    );
}

