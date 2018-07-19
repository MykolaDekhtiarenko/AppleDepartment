'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');


class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {items: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/items'}).done(response => {
			this.setState({items: response.entity._embedded.items});
		});
	}

	render() {
		return (
			<ItemList items={this.state.items}/>
		)
	}
}

class ItemList extends React.Component{
	render() {
		var items = this.props.items.map(item =>
			<Item key={item._links.self.href} item={item}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Item</th>
					</tr>
					{items}
				</tbody>
			</table>
		)
	}
}


class Item extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.item.name}</td>
			</tr>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)