import React from "react";

import {useAppSelector} from "../../helpers/redux-hooks";

const Notification = () => {
	const { type, title, text } = useAppSelector(state => state.app.notify);
	return (
		<div className={`notification ${type ? 'notification_visible' : ''} notification_${type} notification_right`}>
			<div className="notification__icon">
				<span className={`icon icon_${type}`} />
			</div>
			<div className="notification__title">{title}</div>
			<div className="notification__content">{text}</div>
		</div>
	);
};

export default Notification;
