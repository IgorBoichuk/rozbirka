import React from 'react';
import { PopularCategories } from '../components/PopularCategories';
import { MarketingActivity } from '../components/MarketingActivity';

export const Home = () => {
	return (
		<div>
			<MarketingActivity />
			<PopularCategories />
		</div>
	);
};
