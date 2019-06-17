import React, { Component, Fragment } from 'react';
import './Background.css';

class Background extends Component {
	render() {
		return (
			<Fragment>
				<div className='background__bg'></div>
				<div className='background__bg2'></div>
			</Fragment>
		);
	}
}

export default Background;