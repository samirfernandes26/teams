import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { ButtonCard, CardComponent, Icone, SubContainer, TextCard } from './styles';
import { useTheme } from 'styled-components';


export function MiniCarde(){
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
                    testando aqui a fonte
                </TextCard>
            </SubContainer>
            <ButtonCard>
                <Icone 
                    name='close'
                    color={theme.colors.red_dark}
                    size={RFValue(24)}

                />
            </ButtonCard>
        </CardComponent>
    )
    
}