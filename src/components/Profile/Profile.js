import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
	render() {
		return (
			<div className='profile-image__bg'>
				<span className='profile-image'></span>
				<p className='profile-name'>홍길동</p>
				<p className='profile-shop'>Apple 가로수길점</p>
			</div>
		);
	}
}

export default Profile;