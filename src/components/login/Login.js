import React, { Component } from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize";
import FormLogin from './FormLogin'

class Login extends Component{

    state = {
        loading:false
    }

    handlerLogin= async (data, normal=null)=>{
        this.setState({loading: true})
        let messageError;
        let url = 'https://backend-blush-five.vercel.app/user/login';
        if(normal){
            url = 'https://backend-blush-five.vercel.app/user/login/lessNetwork'
            messageError = 'No existe ninguna cuenta o tu contraseña no es correcta'
        }else{
            const {name, id} = data
            data = {name, id}
            messageError = 'Tu cuenta social no a sido vinculada'
        }
        try{
            const response =  await  fetch(url,{
                    method: 'POST',
                    headers:{
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
            
            try{
                const user = await response.json()
                this.props.navigation.navigate('home', user)
            }catch(err){
                alert(messageError)
                this.setState({
                    loading: false
                })
            }
            

        }catch(err){
            alert('Error intenta de nuevo')
            this.setState({
                loading:false
            })
        }
    }

 
    renderContent=()=>{
        if(this.state.loading){
            return(
                <View style={style.loaderContainer}>
                    <Image style={style.loader} source={require('../../assets/loader.gif')}/>
                </View>
            )
        }else{
            return(
                <>
                    <Text style={style.header}>
                        Hola!
                    </Text>
                    <Image style={style.logo} source={require('../../assets/logo-2.png')} />      
                    <FormLogin navigation={this.props.navigation} handlerLogin={this.handlerLogin}/>
                </>   
            )
        }
    }
    render(){
        return(
            <View style={style.page}>
                {this.renderContent()}
             </View>
        )   
    }
}

const style = StyleSheet.create({
    header:{
        fontSize: RFPercentage(16),
        fontWeight: 'bold',
        marginTop: RFPercentage(4),
        marginLeft: RFPercentage(4),
        color: '#FFF',
        height: RFPercentage(35)
    },
    page:{
        backgroundColor: '#101F5A',
        flex: 1
    }, 
    loaderContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loader:{
        width: RFPercentage(16),
        height: RFPercentage(16)
    },
    logo:{
        position: 'absolute',
        top: RFPercentage(18),
        right: 0
    }
})

export default Login