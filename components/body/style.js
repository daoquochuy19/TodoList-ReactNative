import {  StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        backgroundColor:'#fff',
        marginVertical:10,
        paddingHorizontal:20,
        height:60,
        borderRadius:10,
        alignItems:'center',
    },
    square:{
        width:50,
        height:'70%',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    even:{
        backgroundColor:'#10eb35',
    },
    odd:{
        backgroundColor:'#347ff7',
    },
    number:{
        fontWeight:500,
        color:'#fff',
    },
    content:{
        width:'80%',
        marginHorizontal:15,
        fontWeight:500,
    },
});
export default styles