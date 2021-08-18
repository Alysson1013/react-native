import React from 'react'
import { View, Button } from 'react-native'

export default props => (
    <View style={{ flex: 1 }}>
        <View>
            {props.avancar 
                ? <Button
                    title='Avançar'
                    onPress={() => {
                        props.navigation.navigate(props.avancar)
                    }}
                />
                : false
            }
        </View>
        <View style={{ flex: 1 }}>
            {props.children}
        </View>
    </View>
)