import React, { Component } from 'react';
import './Introduction.css';

class Introduction extends Component {
	render() {
		return (
			<div className='intro__bg'>
				<h2 className='intro__title'>최고의 서비스로 모시겠습니다.</h2>
				<p className='intro__sub'>사랑합니다. 고객님! 오늘도 애플을 찾아주셔서 감사합니다. 더 좋은 서비스로 최선을 다해 노력하는 홍길동이 되겠습니다.</p>
			</div>
		);
	}
}

export default Introduction;