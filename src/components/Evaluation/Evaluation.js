import React, { Component } from 'react';
import Icon from 'components/Icon';
import './Evaluation.css';

class Evaluation extends Component {
	renderIcons = () => {
		const components = [];
		const icons = [
			{
				type : 'thumb_up',
				desc : '좋아요',
				number : 103
			},
			{
				type : 'thumb_down',
				desc : '싫어요',
				number : 24
			},
			{
				type : 'comment',
				desc : '코멘트',
				number : 51
			},
			{
				type : 'monetization',
				desc : '포인트',
				number : 1050
			},
		];

		icons.forEach((el, i) => {
			components.push(
				<Icon
					key={i}
					type={el.type}
					desc={el.desc}
					number={el.number}
				/>
			);
		});
	
		return components;

	}

	render() {
		const {renderIcons} = this;
		return (
			<div className='evaluation__bg'>
				<div className='evaluation__result'>
					{renderIcons()}
				</div>
			</div>
		);
	}
}

export default Evaluation;