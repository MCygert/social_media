import React from 'react';
import { Friend } from './DashBoard';

export const Post = ({ posts, firstName, lastName }: Friend) => {
	return (
		<div>
			<article>
				<h1>{firstName + ' ' + lastName}</h1>
				<p>{posts[0]}</p>
			</article>
		</div>
	);
};
