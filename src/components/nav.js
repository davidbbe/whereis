import React, { Component } from 'react';
import './nav.css';

export default class Nav extends Component {
  render() {
    return (
			<nav>
				<ul className={'nav-ul'}>
					<li>
						<a href="#">Where am I now</a>
					</li>
					<li>
						<img className={'nav-img'} src="http://travel.daveb.co/wp-content/themes/travelblog/images/profile-photo.jpg" alt="Picture of me" />
					</li>
					<li>
						<a href="#">Places Ive been</a>
					</li>
				</ul>
			</nav>
		)
	}
}
