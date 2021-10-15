import React, {forwardRef} from 'react';

export const Order = forwardRef((props, ref) => (
	<div className="content_elem" ref={ref}>
		Order
	</div>
))