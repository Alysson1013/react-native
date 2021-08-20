import React from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

const UserForm = ({route, navigation}) => {
    const [user, setUser] = React.useState(route.params ? route.params : {})
    return (
        <View style={style.form}>
            <Text>Name</Text>
            <TextInput 
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o Nome" 
                value={user.name}
            />
            <Text>Email</Text>
            <TextInput 
                style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o E-mail" 
                value={user.email}
            />
            <Text>URL Avatar</Text>
            <TextInput 
                style={style.input}
                onChangeText={avatar => setUser({...user, avatar})}
                placeholder="Informe a" 
                value={user.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    },
    form: {
        padding: 12
    }
})

export default UserForm
