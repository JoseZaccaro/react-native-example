import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'
import storage from '../utils/asyncStorage';

const Home = (props) => {
    // console.log(props);
    const [count, setCount] = useState(0)
    async function handleCount() {
        setCount(count + 1)
        await storage.save({ key: 'count', data: count + 1 })
    }
    return (
        <View style={styles.container}>
            <TouchableHighlight activeOpacity={0.7} underlayColor="#555" onPress={() => props.navigation.navigate('Mangas')}>
                <Text style={styles.texto} >
                    Go to Mangas!
                </Text>
            </TouchableHighlight>

            <TouchableOpacity activeOpacity={0.7} onPress={handleCount}>
                <Text style={styles.texto} >
                    Count: {count}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    texto: {
        fontSize: 32
    },
    container: {
        flex: 1,
        // justifyContent:'center',
        // alignItems:'center'
    },
})
export default Home