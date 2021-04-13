import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Authentication from './src/Components/Authentication/Authentication';
import Main from './src/Components/Main/Main';
import ChangeInfo from './src/Components/ChangeInfo/ChangeInfo';
import OrderHistory from './src/Components/OrderHistory/OrderHistory';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MAIN"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="MAIN" component={MainScreen} />
        <Stack.Screen name="AUTHENTICATION" component={AuthenticationScreen} />
        <Stack.Screen name="CHANGE_INFO" component={ChangeInfoScreen} />
        <Stack.Screen name="ORDER_HISTORY" component={OrderHistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}


function MainScreen({ navigation }) {
  return (
    <Main navigation={navigation} />
  );
}

function AuthenticationScreen({ navigation }) {
  return (
    <Authentication navigation={navigation} />
  );
}
function ChangeInfoScreen({ navigation }) {
  return (
    <ChangeInfo navigation={navigation} />
  );
}
function OrderHistoryScreen({ navigation }) {
  return (
    <OrderHistory navigation={navigation} />
  );
}

