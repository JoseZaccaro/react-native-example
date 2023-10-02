import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import storage from '../utils/asyncStorage';

const Mangas = () => {
    const handleGetInfo = async ()=>{
        console.log(await storage.load({key:'count'}));
    }

    return (
        <View
            style={styles.container}
        >
            <Text style={styles.texto} onPress={handleGetInfo}>
                Mangas
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    texto: {
        fontSize: 32
    },
    container: {
        flex: 1,
    },
})
export default Mangas