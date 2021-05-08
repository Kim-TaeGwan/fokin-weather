import React from 'react';
import {StatusBar, StyleSheet, Text, View} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const Loading = () => {

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>Getting the fucking weather</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        padding:20,
        // paddingHorizontal, paddingVertical 는 웹에는 없고 리엑트네이티브에만 있는 css이다.
        paddingHorizontal:30, // paddingHorizontal는 웹에는 없고 리엑트네이티브에만 있는 css이다.
        // paddingHorizontal는 paddingLeft, paddingRight를 모두 설정하는 것과 같다. 타입은 number, string
        paddingVertical:100,
        // paddingVertical paddingTop, paddingBottom 를 모두 설정하는 것과 같다. 타입은 number, string

        backgroundColor:"#FDF6AA"
    },
    text:{
        color:"#2c2c2c",
        fontSize:30,
    }
})

export default Loading;