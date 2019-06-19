import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Post extends Component {
	render() {
		const { data } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.content}>
					<View style={styles.boxHeader}>
						<Text style={styles.boxTitle}>{data.title}</Text>
						<Text style={styles.boxName}>{data.author} </Text>
					</View>
					<Text style={styles.contentText}> {data.content} </Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		marginVertical: 10,
		marginHorizontal: 20,
		borderRadius: 5
	},
	content: {
		padding: 20
	},
	boxHeader: {
		borderBottomWidth: 1,
		borderBottomColor: '#eee'
	},
	boxTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 2
	},
	boxName: {
		fontSize: 13,
		color: '#bababa',
		marginBottom: 10
	},
	contentText: {
		marginTop: 15,
		color: '#6b6b6b'
	}
});
