import {  StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    form:{
        marginVertical:15,
        marginHorizontal:10,
        flexDirection:'row',
    },
    input:{
        width:'80%',
        height:45,
        marginHorizontal:10,
        borderWidth:1,
        borderColor:'#3fb8e0',
        borderRadius:20,
        backgroundColor:'#fff',
        paddingHorizontal:15,
    },
    button:{
        height:45,
        width:45,
        backgroundColor:'#209fc9',
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
    },
    plus:{
        fontWeight:500,
        fontSize:30,
        color:'#fff',
    },
});
export default styles