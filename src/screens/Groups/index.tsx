import { Button_G } from '@components/Button_G';
import { Button_P } from '@components/Button_P';
import { Carde } from '@components/Cards/Card';
import { MiniCarde } from '@components/Cards/MiniCard';
import { Header } from '@components/Header';
import { Input } from '@components/TextInput';
import { Title } from '@components/Title';
import { StyleSheet, Text, View } from 'react-native';

export function Groups() {
    return (
        <View style={styles.container}>
            <Input/>
            <Header/>
            <Button_G/>
            <Button_P/>
            <Carde/>
            <MiniCarde/>
            <Title/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202024',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

