import React from 'react';
import {Link} from 'react-router-dom';
import {SocialIcon} from 'react-social-icons';
import './App.css';

function Thumbnail(props) {
	return (
		<div className="profile">
			<a href={props.link}>
				<div className="profile-image">
					<SocialIcon url={props.link} style={{ height: 150, width: 150 }} />
				</div>
			</a>	
		</div>

	);
} 

export default Thumbnail;