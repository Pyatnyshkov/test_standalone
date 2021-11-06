import React, { forwardRef } from "react";

import { useAppSelector, useAppDispatch } from "../helpers/redux-hooks";
import { setSendType } from "../store/reducers/app";

import I18n from "i18n-js";
import { register } from "../store/actionCreators/register";

const Send = forwardRef((props, ref: any) => {
  const dispatch = useAppDispatch();
  const { sendType } = useAppSelector(state => state.app);

  const handleSendType = (event: { target: HTMLInputElement }) => {
    const type: string = event.target.value;
    dispatch(setSendType(type));
  };

  return (
    <div ref={ref} className="send content__elem">
      <span className="title send__title">{I18n.t("Send options")}</span>
      <ul className="send-list">
        <li className="send__item">
          <label className="send__label">
            <input
              className="send__input"
              type="radio"
              name="send-link-radio"
              value="mail"
              onChange={handleSendType}
              checked={sendType === "mail"}
            />
            <p className={`send__parag mail`}>
              <span className="send-item__title">{I18n.t("Mail")}</span>
              <span className="send-item__subtitle">
                {I18n.t("Send link on email")}
              </span>
            </p>
          </label>
        </li>
        <li className="send__item">
          <label className="send__label">
            <input
              className="send__input"
              type="radio"
              name="send-link-radio"
              value="link"
              onChange={handleSendType}
              checked={sendType === "link"}
            />
            <p className={`send__parag link`}>
              <span className="send-item__title">{I18n.t("Link")}</span>
              <span className="send-item__subtitle">{I18n.t("Get link")}</span>
            </p>
          </label>
        </li>
      </ul>

      <div className="send-button-wrapp">
        <button type="button" className="submit__button" onClick={register}>
          <span className="submit__span">
            {sendType === "mail" ? I18n.t("Send") : I18n.t("Get")}
          </span>
        </button>
      </div>
    </div>
  );
});

export default Send;
