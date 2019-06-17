import React, { Component } from 'react';
import './Icon.css';

class Icon extends Component {
	render() {
		const { type, desc, number} = this.props;

		return (
			<div className='icon__bg'>
				<span className={'icon ' + type}></span>
				<span className='icon__desc'>{desc}</span>
				<span className='icon__number'>{number}</span>
			</div>
		);
	}
}

export default Icon;