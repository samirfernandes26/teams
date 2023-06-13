import { Provider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import * as SplashScreen from 'expo-splash-screen';
import theme from '@theme/theme';

import { Loading } from '@components/Loading';
import { Groups } from '@screens/Groups';


import {
  useFonts,
  Roboto_400Regular,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';
import { useCallback, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { NewGroup } from '@screens/NewGroup';
import { Players } from '@screens/Players';

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

    // if (!appIsReady && !fontsLoaded) {
    //     return <Loading/>;
    // }

    return (
        <View style={{flex:1}} onLayout={onLayoutRootView}>
            <Provider>
                <ThemeProvider theme={theme}>
                    <StatusBar backgroundColor={theme.colors.gray_600}
                        translucent
                        animated
                        barStyle='light-content'
                        networkActivityIndicatorVisible
                        hidden={false}
                    />
                    {fontsLoaded ? <Players/> : <Loading/>}  
                </ThemeProvider>
            </Provider>
        </View>
    );
}

