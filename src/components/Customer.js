import React, {forwardRef} from 'react';

export const Customer = forwardRef((props, ref) => (
	<div className="content_elem" ref={ref}>
		Customer
	</div>
))