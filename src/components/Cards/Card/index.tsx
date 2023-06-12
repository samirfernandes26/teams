import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { CardComponent, Icone, TextCard } from './styles';
import { useTheme } from 'styled-components';

interface IProps extends TouchableOpacityProps {
    textButton: string;
}

export function Carde({textButton, ...rest}:IProps){
    const theme = useTheme();
    
    
    return (
       <CardComponent {...rest} >
            <Icone 
                name='people'
                color={theme.colors.greem_700}
                size={RFValue(32)}

            />

            <TextCard>
                {textButton}
            </TextCard>
       
       </CardComponent>
    )
    
}