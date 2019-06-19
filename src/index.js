import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Post from './components/Post';

export default class App extends Component {
	state = {
		posts: [
			{
				id: 1,
				title: 'Aprendendo React Native',
				author: 'Mateus Bezerra',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut commodo purus. Curabitur accumsan, mauris at aliquam imperdiet, augue ipsum convallis diam, sed tincidunt lectus metus in diam.'
			},
			{
				id: 2,
				title: 'Aprendendo React Native',
				author: 'Mateus Bezerra',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut commodo purus. Curabitur accumsan, mauris at aliquam imperdiet, augue ipsum convallis diam, sed tincidunt lectus metus in diam.'
			},
			{
				id: 3,
				title: 'Aprendendo React Native',
				author: 'Mateus Bezerra',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut commodo purus. Curabitur accumsan, mauris at aliquam imperdiet, augue ipsum convallis diam, sed tincidunt lectus metus in diam.'
			},
			{
				id: 4,
				title: 'Aprendendo React Native',
				author: 'Mateus Bezerra',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut commodo purus. Curabitur accumsan, mauris at aliquam imperdiet, augue ipsum convallis diam, sed tincidunt lectus metus in diam.'
			}
		]
	};
	render() {
		const { posts } = this.state;
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>GoNative App</Text>
				</View>
				<ScrollView>{posts.map((post) => <Post key={post.id} data={post} />)}</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ef7777'
	},
	header: {
		backgroundColor: '#fff',
		alignItems: 'center',
		height: 80
	},
	headerText: {
		fontSize: 16,
		fontWeight: 'bold',
		marginTop: 45
	}
});
