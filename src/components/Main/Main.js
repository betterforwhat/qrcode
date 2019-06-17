import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
	render() {
		const { children } = this.props;

		return (
			<main className='main'>
				<section>
					{children}
				</section>
			</main>
		);
	}
}

export default Main;