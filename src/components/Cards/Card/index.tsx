import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { CardComponent, Icone, TextCard } from './styles';
import { useTheme } from 'styled-components';


export function Carde(){
    const theme = useTheme();
    
    
    return (
       <CardComponent>
            <Icone 
                name='people'
                color={theme.colors.greem_700}
                size={RFValue(32)}

            />

            <TextCard>
                testando aqui a fonte
            </TextCard>
       
       </CardComponent>
    )
    
}