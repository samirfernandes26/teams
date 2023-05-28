import { Input } from '@components/TextInput';
import { StyleSheet, Text, View } from 'react-native';

export function Groups() {
    return (
        <View style={styles.container}>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

