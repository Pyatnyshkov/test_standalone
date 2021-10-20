import React from "react";
import I18n from "i18n-js";

import { useSelector } from "react-redux";

export default function Header() {
	const {currentStep} = useSelector(state => state.app);
	const steps = {
		order: "Order",
		basket: "Basket",
		customer: "Customer",
		send: "Send options",
	};
	return (
		<div className="header">
			<div className="header_info">{I18n.t(steps[currentStep])}</div>
			<div className="header_control">
				<div className="header_control-elem">Выбор языка</div>
				<div className="header_control-elem">Выйти</div>
			</div>
		</div>
	);
}