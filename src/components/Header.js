import React from "react";
import I18n from "i18n-js";

import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../store/reducers/app";

export default function Header() {
  const dispatch = useDispatch();
  const { currentStep, language, user } = useSelector(state => state.app);
  const steps = {
    order: "Order",
    basket: "Basket",
    customer: "Customer",
    send: "Send options"
  };

  return (
    <div className="header">
      <div className="header_info">{I18n.t(steps[currentStep])}</div>
      <div className="header_right">
        {user && <div className="header-user">{user}</div>}
        <div className="header_control-elem">
          <span
            className={`header_control-icon header_control-icon-${language}`}
            onClick={() => dispatch(changeLanguage())}
          />
          <span className="header_control-hover">{I18n.t('Change language')}</span>
        </div>
        {user && (
          <div className="header_control-elem">
            <span
              className="header_control-icon header_control-icon-logout"
            />
            <span className="header_control-hover">{I18n.t("Logout")}</span>
          </div>
        )}
      </div>
    </div>
  );
}
