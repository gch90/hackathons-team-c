import React from 'react'
import { getUserValue } from '../hooks/useUserStorage'

export const useHandlePageAccess = (history) => {
	const page = ['form', 'game', 'payment'];
	const location = history.location.pathname;
	const currentPageName = location.replace('/', '');
	const currentState = getUserValue('state');

	if (currentState === null && page[0] != currentPageName) {
		history.push('/');
	}

	if (page.includes(currentPageName)) {
		const currentPagePosition = page.indexOf(currentPageName);
		const statePosition = page.indexOf(currentState);

		if (currentPagePosition < statePosition) {
			history.push(`/${currentState}`);
		}
	}
}
