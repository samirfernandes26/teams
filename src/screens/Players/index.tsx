import React, { useState } from 'react'
import { FlatList, ScrollView } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

import { Container, ScrollHorizontalContainer, SubContainer, TextContador, ViewContador } from './styles';

import { Button_P } from '@components/Button_P';
import { MiniCarde } from '@components/Cards/MiniCard';
import { Header } from '@components/Header';
import { Input } from '@components/TextInput';
import { Title } from '@components/Title';
import { PaperImput } from '@components/TextInput/styles';
import { useTheme } from 'styled-components/native';
import { ListEmpty } from '@components/ListEmpty';
import { Button_G } from '@components/Button_G';

export function Players() {
    const theme = useTheme();
    const [times, setTimes] = useState<string[]>(['Time 1', 'Time 2', 'Time 3', 'Time 4', 'Time 5']);
    const [players, setPlayers] = useState(['samir', 'joao', 'amanda', 'bruna'])
    const [timeSelecionado, setTimeSelecionado] = useState<number>(-1);

    const handleTimeSelecionado = (index:number) => {
        if(timeSelecionado === index){
            setTimeSelecionado(-1);
        }else{
            setTimeSelecionado(index);
        }
    }

    return (
        <Container>
            <SubContainer>
                <Header/>
            </SubContainer>

            <Title
                titleBold='Aqui vai ficar o nome da turma'
                titleRegular='Adicione a galera e separe os times '
            />

            <Input
                placeholder='Nome do participante'
                right ={
                    <PaperImput.Icon 
                        icon='plus'
                        size={RFValue(24)}
                        style={{backgroundColor: theme.colors.greem_700, marginTop: RFValue(10), marginRight: RFValue(10)}}
                    />
                }
            />

            <ScrollHorizontalContainer>
                <ScrollView  horizontal >
                    {times.map((time, index) => 
                        <Button_P
                            key={index}
                            nomeButton={time}
                            isActive={timeSelecionado === index}
                            onPress={() => handleTimeSelecionado(index)}
                            
                        />
                    )}
                </ScrollView>

                <ViewContador>
                    <TextContador>
                        {players.length || 0}
                    </TextContador>
                </ViewContador>

            </ScrollHorizontalContainer>

            



            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({item}) =>( <MiniCarde textButton={item}/> )}
                ListEmptyComponent={() => ( <ListEmpty mensagem='Nenhuma player cadastrado!!'/> )}
                style={{ width:'100%'}}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={players.length === 0 && {paddingBottom: RFValue(100)}}           
            />

            <Button_G
                nomeButton='Remover turma'
                colorButton={theme.colors.red_dark}
            />
            {/* <Input/>
            <Header/>
            <Button_P/>
            <MiniCarde/>
            <Title/> */}

        </Container>
    );
}

