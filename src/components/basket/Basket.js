import React, { forwardRef, useRef, useState } from "react";

import { BasketModal } from "./BasketModal";
import { BasketList } from "./BasketList";

import { useSelector } from "react-redux";

import { fadeIn, fadeOut } from "../../helpers/modal-fade";

import I18n from "i18n-js";

export const Basket = forwardRef((props, ref) => {
	const modalRef = useRef();
	const [modalActive, setModalActive] = useState(false);
	const { items } = useSelector((state) => state.basket);

	modalActive
		? fadeIn(modalRef.current, 200)
		: fadeOut(modalRef.current, 200);

	return (
		<div className="basket content_elem" ref={ref}>
			<div className="basket-header">
				<button
					type="button"
					className="open-modal-button"
					onClick={() => setModalActive(true)}
				>{I18n.t("Add to cart")}</button>
			</div>

			{Object.keys(items).length ? (
				<BasketList openModal={setModalActive} />
			) : (
				<span className="basket__title">{I18n.t("Empty basket")}</span>
			)}
			<BasketModal
				ref={modalRef}
				active={modalActive}
				openModal={setModalActive}
			/>
		</div>
	);
});
