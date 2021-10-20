import React from "react";
import I18n from "i18n-js";

import { useSelector } from "react-redux";

export default function Menu(props) {
	const { currentStep, showSend } = useSelector((state) => state.app);

	const steps = {
		order: "Order",
		basket: "Basket",
		customer: "Customer",
	};
	if (showSend) {
		steps.send = "Send options";
	}
	const handleMenu = (e) => {
		props.handleStep(e.target.value);
	};
	const renderSteps = () => {
		return Object.keys(steps).map((step) => (
			<label className="navigation_elem" key={step}>
				<input
					className="navigation_radio"
					type="radio"
					name="menu"
					value={step}
					onChange={handleMenu}
					checked={step === currentStep}
				/>
				<div className="navigation_label">{I18n.t([steps[step]])}</div>
			</label>
		));
	};
	return (
		<div className="menu">
			<div className="menu_logo"></div>
			<div className="navigation">{renderSteps()}</div>
		</div>
	);
}