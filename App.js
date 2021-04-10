import * as React from 'react';
import { View,Text,Button} from 'react-native';
import Homescreen from './Screens/HomeScreen';
import Assignment from './Screens/Assignment'
import ClassWork from './Screens/ClassWork'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

 export default class App extends  React.Component{
  render(){
    return(
      <View>
   <AppContainer/>
      < View>
      <Button title='School Attandance'/>
         </View>
      </ View>
    )
  }
}
var AppNavigator = createSwitchNavigator({ 
  Homescreen:Homescreen,
  Assignment:Assignment,
  ClassWork:ClassWork
})
var AppContainer=createAppContainer(AppNavigator)
