import React,{Component} from 'react';
import Img from './no_images.png';


class Display extends Component{

	constructor(props) {
		super(props);
		console.log('props', props);
		this.state = {


		}
	}



	render()
	{

		console.log('props inside render', this.props.array);
		console.log('images', this.props.image);

		return(

			<div> 

			{this.props.array.map((value,key) =>

				<div key={ key }>
					<div className="name-design"> { key+1 } - Artist Name : {value.name} </div>
					<div className="listener-design"> Listeners : {value.listeners} </div>
					<a className="url-design" href={value.url}> Artist Profile </a>
					<div className="img-design">
						<img src= {value.image[2][Object.keys(value.image[0])[0]] != '' ? value.image[2][Object.keys(value.image[0])[0]] : Img } className="img-design" />
					</div>
				</div>

			)}

			</div>


		)
	}



}

export default Display;