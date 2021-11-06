import React from "react";
import I18n from "i18n-js";

import { useAppDispatch, useAppSelector} from "../helpers/redux-hooks";
import { changeLanguage } from "../store/reducers/app";

const Header = () => {
  const dispatch = useAppDispatch();
  const { currentStep, language, user } = useAppSelector(state => state.app);
  const steps: {[key: string]: string} = {
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
};

export default Header;