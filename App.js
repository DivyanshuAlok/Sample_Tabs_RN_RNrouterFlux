import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import SignUp from './components/SignUp';
import Main from './components/Main';
import Login from './components/Login'; 
import Reminder from './components/Reminder';
import Ricoh from './components/Ricoh';
import Try from './components/Try';
import Category from './components/Category';
 
type Props = {};
export default class App extends Component<Props> {
render() {
    return (
      <Router>
      <Scene key="root">

          <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#FFFFFF' }} title="tabber_101">
              <Scene key="osu" title="OS"> 
                <Scene key="Main"
                  component={Main}
                  title="Main"
                  hideNavBar={true}
                />
              </Scene>
              
              <Scene key="Login" 
                component={Login}
                title="Login"
                hideNavBar={true}
              />

              <Scene key="Category"
                component={Category}
                title="Category"
                hideNavBar={true}
              />

              <Scene key="Reminder"
                component={Reminder}
                title="Reminder"
                hideNavBar={true}
              />

          </Scene>  
        
        <Scene key="Ricoh"
          component={Ricoh}
          title="Ricoh"
          hideNavBar={true}
        />
        <Scene key="Try"
          component={Try}
          title="Try"
          hideNavBar={true}
        />

      </Scene>
      </Router>

      /*<View style={styles.container}>
        <Category/>
      </View>*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

