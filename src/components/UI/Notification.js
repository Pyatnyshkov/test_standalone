import React from "react";

import { useSelector } from 'react-redux';

const Notification = () => {
	const { type, title, text } = useSelector(state => state.app.notify);
	return (
		<div class={`notification ${type ? 'notification_visible' : ''} notification_${type} notification_right`}>
			<div class="notification__icon">
				<span class={`icon icon_${type}`}></span>
			</div>
			<div class="notification__title">{title}</div>
			<div class="notification__content">{text}</div>
		</div>
	);
};

export default Notification;
