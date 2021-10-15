import React from 'react';
import I18n from '../i18n/i18n';

export default function Header(props) {
	const steps = {
		order: "Order",
		basket: "Basket",
		contacts: "Customer",
		send: 'Send options'
	}
	return (
		<div className="header">
			<div className="header_info">
				{I18n.t(steps[props.step])}
			</div>
			<div className="header_control">
				<div className="header_control-elem">
					Выбор языка
				</div>
				<div className="header_control-elem">
					Выйти
				</div>
			</div>
		</div>
	)
}