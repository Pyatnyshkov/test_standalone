import React from "react";
import I18n from "i18n-js";

import { useAppSelector } from "../helpers/redux-hooks";

interface IMenu {
	handleStep: (step: string) => void
}

const Menu: React.FC<IMenu> = ({ handleStep }) => {
	const { currentStep, showSend } = useAppSelector(state => state.app);

	const steps: {[key: string]: string} = {
		order: "Order",
		basket: "Basket",
		customer: "Customer",
	};
	if (showSend) {
		steps.send = "Send options";
	}
	const handleMenu = (e: { target: HTMLInputElement }) => {
		handleStep(e.target.value);
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
			<div className="navigation">{renderSteps()}</div>
		</div>
	);
};

export default Menu;