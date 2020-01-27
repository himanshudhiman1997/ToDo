import React, {useState, Component} from 'react'
import {StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'

export default function App()
{
	const [todos, setTodos] = useState([
		{text: 'buy a coffee', key: '1'},
		{text: 'create an app', key: '2'},
		{text: 'play on the switch', key: '3'}
	]);
	const pressHandler = (key) => {
		setTodos((prevTodos) => {
			return prevTodos.filter(todo => todo.key != key)
		})
	}

	const submitHandler = (text) => {
		if (text.length > 3)
		{
			setTodos((prevTodos) => {
				return [
					{text: text, key: Math.random()},
					...prevTodos
				]
			})
		}
		else
		{
			Alert.alert('OOPS!!', 'This is very small', [{text: 'Understood', onPress: () => console.log('Closed')}])
		}
	}

		return(
			<TouchableWithoutFeedback onPress = {() => {
				Keyboard.dismiss()
			}}>
				<View style = {styles.container}>
					{ /* header */ }
					<Header/>
					<View style = {styles.content}>
						{/* to do form */}
						<AddTodo submitHandler = {submitHandler}/>
						<View style = {styles.list}>
							<FlatList
								data = {todos}
								renderItem = {({item}) => (
									<TodoItem item = {item} pressHandler = {pressHandler}/>
								)}
							/>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	content: {
		padding: 40
	},
	list: {
		marginTop: 20
	}
});