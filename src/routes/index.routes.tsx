import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login"
import BottomRoutes from "./bottom.routes";


export default function Routes(){
    const Stack = createStackNavigator()
    
    return(
        <Stack.Navigator>

            <Stack.Screen
                name="Login"
                component={Login}>
            </Stack.Screen>

            <Stack.Screen
                name="BottomRoutes"
                component={BottomRoutes}>
            </Stack.Screen>
            
        </Stack.Navigator>
    )

}