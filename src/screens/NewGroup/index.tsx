import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';

import { Container, Icon, NewGroupContainer, SubContainer } from './styles';

import { Button_G } from '@components/Button_G';
import { Header } from '@components/Header';
import { Input } from '@components/TextInput';
import { Title } from '@components/Title';
import { useTheme } from 'styled-components/native';

export function NewGroup() {
    const theme = useTheme();

    return (
        <Container>
            <SubContainer>
                <Header/>
            </SubContainer>

            <NewGroupContainer>
                <Icon 
                    name='people-outline'
                    size={RFValue(64)} 	
                    color={theme.colors.greem_500}
                />
                <Title
                    titleBold='Nova Turma'
                    titleRegular='Crie um turma para adicionar pessoas'
                />
                <Input
                    placeholder='Nome da turma'
                />

                <Button_G 
                    nomeButton='Criar'
                />
            </NewGroupContainer>
            
        </Container>
    );
}

