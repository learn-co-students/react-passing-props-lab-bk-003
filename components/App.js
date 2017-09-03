const React = require('react');

const FruitBasket = require('./FruitBasket');

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fruit: [],
			filters: [],
			currentFilter: null,
		}

		this.handleFilterChange = this.handleFilterChange.bind(this);	
	}

	componentWillMount() {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit }));
    fetch('/api/fruit_types')
    	.then(res => res.json())
    	.then(filters => this.setState({ filters }))
  }

	handleFilterChange(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ currentFilter: e.target.value });
  }

  render() {
  	return(
    	<FruitBasket filters={this.state.filters} handleFilterChange={this.handleFilterChange} selectedFilter={this.state.currentFilter} fruit={this.state.fruit}/>
  	)
  }
}

module.exports = App;
