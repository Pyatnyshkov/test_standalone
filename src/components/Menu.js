import React from 'react';
import I18n from '../i18n/i18n';

export default function Menu(props) {
	const steps = {
		order: "Order",
		basket: "Basket",
		contacts: "Customer"
	}
	if (props.show_send) {
		steps.send = 'Send options'
	}
	const handleMenu = e => {
		const step = e.target.value;
		props.handleStep(step);
	};
	const renderSteps = () => {
		return Object.keys(steps).map(step => (
			<label className="navigation_elem" key={step}>
	    		<input 
	    			className="navigation_radio" 
	    			type="radio" 
	    			name="menu" 
	    			value={step}
	    			onChange={handleMenu}
	    			checked={step === props.step}
	    		/>
	    		<div className="navigation_label">{I18n.t([steps[step]])}</div>
	    	</label>
		))
	}
	return (
		<div className="menu">
		    <div className="menu_logo"></div>
		    <div className="navigation">
		    	{renderSteps()}
		    </div>
		</div>
	)
}