import React from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import UsersContext from '../context/usersContext'

export default props => {

    const { state } = React.useContext(UsersContext)

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuario', 'Deseja excluir o usuario?', [
            {
                text: 'Sim',
                onPress() {

                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm')}
                key={user.id}>
                <Avatar
                    title={user.name}
                    Subtitle={user.email}
                    source={{ uri: user.avatarUrl }}
                />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                    onPress={() => {
                        props.navigation.navigate('UserForm', user);
                    }}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => { confirmUserDeletion(user) }}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </ListItem>
        )
    }
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}