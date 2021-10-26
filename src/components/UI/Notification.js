import React from "react";

import { useSelector } from 'react-redux';

const Notification = () => {
	const { type, title, text } = useSelector(state => state.app.notify);
	return (
		<div className={`notification ${type ? 'notification_visible' : ''} notification_${type} notification_right`}>
			<div className="notification__icon">
				<span className={`icon icon_${type}`}></span>
			</div>
			<div className="notification__title">{title}</div>
			<div className="notification__content">{text}</div>
		</div>
	);
};

export default Notification;
