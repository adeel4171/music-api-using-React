import React,{Component} from 'react';
import Display from './Display';
import './App.css'

class App extends Component{


	constructor(props) {
		super(props);
		this.state = {

			query: '',
			collection: []
		}
	}



	serachArtist()
	{
		console.log('here');
		console.log(this.state.query);

		let replaced_query = this.state.query.replace(' ','+')
		const BASE_URL = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist='
		const FETCH_URL =  BASE_URL + replaced_query + '&api_key=36f6f7120c2f8f6d23366bd9467abbea&format=json'

		console.log('FETCH_URL', FETCH_URL);

		fetch(FETCH_URL, {

			method : 'GET',
			'Content-Type': 'application/json',
        	'Accept': 'application/json'

		})
		.then(response => response.json())
		.then(json => {

			const array = json.results.artistmatches.artist;
			this.setState({collection: array});

		})


	}



	render()
	{

		return(

			<div className="App">
				<h2 className="title"> Search Artist from Last.fm Api using React </h2>
				<div className="input-field">
					Search Artist 
					<input className="design-field" type="text" placeholder="e.g Atif Aslam" onChange={event => this.setState({query: event.target.value})}  />
					<button className="button-design" onClick={ () => this.serachArtist() } > search </button>
				</div>
				<Display array= {this.state.collection}></Display>
			</div>

			)



	}


}

export default App;