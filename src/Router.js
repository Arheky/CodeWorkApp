import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Jobs from './pages/Jobs/Jobs';
import FavoriteJobs from './pages/FavoriteJobs/FavoriteJobs';
import JobsDetail from './pages/JobsDetail/JobsDetail';
import UserProvider from './context/Provider';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root () {
    return(
        <Drawer.Navigator
         initialRouteName='Jobs'
         screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: '#FF4D4D',
            drawerActiveBackgroundColor: '#FF4D4D',
            drawerActiveTintColor: 'white',
         }}
        >
            <Drawer.Screen
             name="Jobs"
             component={Jobs}
             options={{
                headerTitle: 'Jobs',
             }} 
            />
            <Drawer.Screen
             name="Favorite Jobs"
             component={FavoriteJobs} 
             options={{
                headerTitle: 'Favorite Jobs',
             }}
            />
        </Drawer.Navigator>
    );
}

function Router() {
    return(
        <UserProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                     name="RootPage"
                     component={Root}
                     options={{
                        headerShown: false,
                     }}
                    />
                    <Stack.Screen
                     name="JobsDetailPage"
                     component={JobsDetail}
                     options={{
                        headerTitle: 'Implementation Consultant',
                        headerTintColor: '#FF5C58',
                        drawerItemStyle: {display: 'none'},
                     }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
}

export default Router;
