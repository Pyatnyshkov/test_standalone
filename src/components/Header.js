import React from "react";
import I18n from "i18n-js";

import { useSelector, useDispatch } from "react-redux";
import {changeLanguage} from "../store/reducers/app";

export default function Header() {
	const dispatch = useDispatch();
	const {currentStep, language} = useSelector(state => state.app);
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
				<div className="header_control-elem" onClick={() => dispatch(changeLanguage())}>{language}</div>
				<div className="header_control-elem">Выйти</div>
			</div>
		</div>
	);
}