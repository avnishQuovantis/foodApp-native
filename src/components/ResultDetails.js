import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const ResultDetails = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    imageStyle: {
        width: 249,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14,

    }
})

export default ResultDetails