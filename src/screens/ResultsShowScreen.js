import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const [result, setResult] = useState(null)
    console.log('result of detals is ', result);
    // console.log('id is ', id);
    const getResult = async (id) => {
        const res = await yelp.get(`/${id}`)
        console.log(res.data);
        setResult(res.data)
    }

    useEffect(() => {
        getResult(id)
    }, [])
    if (!result) {
        return null
    }
    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
})
export default ResultsShowScreen