import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class ScanScreen extends React.Component{
    constructor() {
        super()
        this.state = {
            hasCameraPermissions:null,
            scanned:false,
            scannedData:'',
            buttonState:'normal'
        }
    }
getCameraPermissions = async ()=>{
    const{status} = await Permissions.askAsync(Permissions.CAMERA)
    this.setState = {
        hasCameraPermissions:status === 'granted',
        buttonState:'clicked',
        scannedData:false
    }
}

handleBarCodeScanner = async({type,data})=>{
    this.setState = ({
        //hasCameraPermissions: status === "granted",
        buttonState: 'clicked',
        scanned: false
      })
}

render() {
  const hasCameraPermissions = this.state.hasCameraPermissions;
      const scanned = this.state.scanned;
      const buttonState = this.state.buttonState;
   if(buttonState === "clicked" && this.getCameraPermissions){
       return(
           <BarCodeScanner
           onBarCodeScanned = { scanned?undefined:this.handleBarCodeScanner}
           style = {StyleSheet.absoluteFillObject}
           />
       )
   }
   else if (buttonState === "normal"){
return(
    <View style={styles.container}>
    <Text style = {styles.displayText}>{
      hasCameraPermissions === true?this.state.scannedData:"request camera permission"
    }</Text>

  <TouchableOpacity
  onPress = {this.getCameraPermissions}
   style = {styles.scanButton}>
    <Text style = {styles.buttonText}>Scan QR code</Text>
  </TouchableOpacity>

  <Image
  source={require("../assets/220px-Barcode-scanner.jpg")}
  style={{width:200,height:200}}/>

  </View>
)
   }
}

}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    displayText:{
      fontSize:20,
      textDecorationLine:'underline',
    },
    scanButton:{
      backgroundColor:"blue",
      padding:10,
      margin:10
    },
    buttonText:{
      fontSize:20
    }
  })