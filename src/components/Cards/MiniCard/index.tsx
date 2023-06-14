import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ButtonCard, CardComponent, Icone, SubContainer, TextCard } from './styles';
import { useTheme } from 'styled-components';


interface Iprops extends TouchableOpacityProps {
    textButton: string;
}

export function MiniCarde({textButton, ...rest}:Iprops){
    const theme = useTheme();
    
    
    return (
        <CardComponent>

            <SubContainer>
                <Icone 
                    name='emoji-people'
                    color={theme.colors.gray_100}
                    size={RFValue(24)}
                />

                <TextCard>
                    {textButton}
                </TextCard>
            </SubContainer>

            <ButtonCard {...rest}>
                <Icone 
                    name='close'
                    color={theme.colors.red_dark}
                    size={RFValue(24)}

                />
            </ButtonCard>
            
        </CardComponent>
    )
    
}