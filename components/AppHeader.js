import * as React from 'react';
import {Text,View,StyleSheet} from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style={styles.textContainer}>
      <Text style={styles.text}>Quiz Buzzer App</Text>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  textContainer:{
    backgroundColor:'pink'

  },
  text:{
    color:'black',
    padding:15,
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  }
})
export default AppHeader;
