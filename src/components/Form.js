import React, { Component } from 'react'
import { StyleSheet, TextInput, Image, View, Text , Pressable} from 'react-native'
import { GoogleSigninButton } from '@react-native-community/google-signin';
import facebookLib from '../lib/loginFacebook'
import googleLib from '../lib/loginGoogle'

class Form extends Component{

    render(){ 
        return (<View style={style.Container}>
                    <Text style={style.headerContainer}>
                        Crear cuenta
                    </Text>

                    <View style={style.inputsContainer}>
                        <TextInput style={style.inputs}
                                placeholder="USUARIO"    
                        />
                        <TextInput placeholder="INTRODUCE TU CONTRASEÑA" 
                                style={style.inputs}
                        />
                        <TextInput style={style.inputs}
                                placeholder="NUMERO DE TELEFONO"
                        />
                    </View>

                    <View style={style.direction}>
                            <Text style={style.span}>
                                {`Crear  `} 
                                <Image 
                                    source={require('../assets/flecha.png')}
                                    style={style.svgs}
                                />
                            </Text>
                        </View>

                        <View style={style.lines}>
                        </View>

                        <View style={style.center}>
                            <View style={style.plataformIcons}>
                                <Pressable onPress={()=>{facebookLib.loginFacebook(this.props)}}>
                                    <Image style={style.margin} 
                                        source={require('../assets/facebook.png')}/>
                                </Pressable>
                                <Pressable onPress={()=>googleLib.signIn(this.props)}>
                                    <Image style={style.margin} source={require('../assets/gmail.png')}/>
                                </Pressable>
                                <Image style={style.margin} source={require('../assets/twitter.png')}/>
                            </View>
                        </View>
                
            </View>)
    }
}

const style = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: '#FFF',
        borderTopRightRadius: 45,
        borderTopLeftRadius: 45,
        paddingRight: '10%',
        paddingLeft: '10%'
    },
    headerContainer:{
        color: '#476758',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: '5%',
        textAlign: 'center',
    },
    inputsContainer:{
        marginTop: '8%',
    },
    inputs:{
        borderRadius: 12,
        marginBottom: '7%',
        textAlign: 'center',
        backgroundColor: '#f7f7f7',
        color: '#656565',
        fontSize: 15,
        letterSpacing: .6,
        position:'relative',
        paddingTop: '4%',
        paddingBottom: '4%'
    },  
    span:{
        textAlign: 'right',
        color: '#D7AF58',
        fontSize: 21,
        fontWeight: 'bold',
        marginBottom: '8%'
    },
    svgs:{
        width: 20,
        height: 20,
    },
    lines:{
        borderBottomWidth: .9,
        borderBottomColor: 'black',
        marginBottom: '8%'
    },
    plataformIcons:{
        flexDirection: 'row',
        width: 'auto'
    },
    center:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    margin:{
        marginLeft: 15,
        marginRight: 15,
        width: 30,
        height: 30,
    }
})

export default Form