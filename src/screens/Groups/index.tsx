import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

import { Container, Logo, SubContainer } from './styles';

import logo from '@assets/logo.png'
import { Button_G } from '@components/Button_G';
import { Button_P } from '@components/Button_P';
import { Carde } from '@components/Cards/Card';
import { MiniCarde } from '@components/Cards/MiniCard';
import { Header } from '@components/Header';
import { Input } from '@components/TextInput';
import { Title } from '@components/Title';
import { IconeHeader } from '@components/Header/styles';

export function Groups() {
    const [groups, setGroups] = useState<string[]>(['galera do teste', 'fut'])


    return (
        <Container>
            <SubContainer>
                <Logo source={logo}/>

                <Title
                    titleBold='Turma'
                    titleRegular='jogue com a sua turma'
                />
            </SubContainer>


            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({item}) =>(
                    <Carde
                        textButton={item}
                    />

                )}
                style={{
                    flex:1,
                    width:'100%'
                }}
                
            
            />

            <Button_G />
            {/* <Input/>
            <Header/>
            <Button_P/>
            <MiniCarde/>
            <Title/> */}

        </Container>
    );
}

