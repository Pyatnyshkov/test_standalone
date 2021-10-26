import React, { useRef, useEffect, FC } from "react";

import Menu from "./Menu";
import Header from "./Header";
import Notification from "./UI/Notification";
import { Order } from "./Order";
import { Basket } from "./basket/Basket";
import { Customer } from "./Customer";
import { Send } from "./Send";

import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, setCurrentStep, showSend } from "../store/reducers/app";
import { setShops } from "../store/actions/apiData";

// @ts-ignore
import I18n from "i18n-js";
import ru from "../i18n/ru.json";

import en from "../i18n/en.json";
import "../media/css/main.css";

interface Props {
  /** Interface language */
  language: string;
  /** Display send step */
  show_send: boolean;
}

const App: FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const { currentStep, language } = useSelector(
    (state: RootState) => state.app
  );

  const orderRef = useRef();
  const basketRef = useRef();
  const customerRef = useRef();
  const sendRef = useRef();

  const steps: any = {
    order: orderRef,
    basket: basketRef,
    customer: customerRef
  };

  useEffect(() => {
    if (props.show_send) {
      steps.send = sendRef;
      dispatch(showSend());
    }
    let initialStep = window.location.pathname.slice(1);
    dispatch(setCurrentStep(steps[initialStep] ? initialStep : 'order'));
    I18n.translations["en"] = en;
    I18n.translations["ru"] = ru;
  }, []);

  useEffect(() => {
    currentStep && scrollToStep(currentStep);
    window.history.pushState("", "", "/" + currentStep);

    //обработка работы со стрелочками в браузере
    const getLocationStep = (e: any) => {
      const step = e.currentTarget.location.pathname.slice(1);
      scrollToStep(step);
    };
    window.addEventListener("popstate", getLocationStep);

    const getPosition = () => {
      Object.keys(steps).forEach(step => {
        const pos = steps[step].current.getBoundingClientRect();
        const height = steps[step].current.offsetHeight;
        const offsetBottom = pos.bottom - height;
        if (offsetBottom > 0 && offsetBottom < 120 && step !== currentStep) {
          dispatch(setCurrentStep(step));
          window.history.pushState("", "", "/" + step);
        }
      })
    };
    // window.addEventListener("scroll", getPosition);

    return () => {
      window.removeEventListener("scroll", getLocationStep);
      window.removeEventListener("scroll", getPosition);
    };
  }, [currentStep]);

  useEffect(() => {
    console.log(language)
    I18n.locale = language || props.language;
    dispatch(setLanguage(language || props.language));
    // dispatch(setShops());
  }, [language]);

  // обработка нажатия навигации
  const handleStep = (step: string) => {
    window.history.pushState("", "", "/" + step);
    scrollToStep(step);
  };

  const scrollToStep = (step: string) => {
    const position =
      steps[step].current.getBoundingClientRect().top + window.pageYOffset - 110;
    window.scrollTo({ top: position });
  };

  return (
    <div className="register_page">
      <Menu handleStep={handleStep} />
      <div className="main_page">
        <Header />
        <div className="content_container">
          <div className="content">
            <div>{language}</div>
            <Order ref={orderRef} />
            <Basket ref={basketRef} />
            <Customer ref={customerRef} />
            {props.show_send && <Send ref={sendRef} />}
          </div>
        </div>
      </div>
      <Notification />
    </div>
  );
};

export default App;
