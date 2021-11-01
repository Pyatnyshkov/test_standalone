import React, {useRef, useEffect, FC, useMemo, useCallback} from "react";

import Menu from "./Menu";
import Header from "./Header";
import Notification from "./UI/Notification";
import { Order } from "./Order";
import { Basket } from "./basket/Basket";
import { Customer } from "./customer/Customer";
import { Send } from "./Send";

import { useAppSelector, useAppDispatch } from "../helpers/redux-hooks";
import { setLanguage, setCurrentStep, showSend, setUser } from "../store/reducers/app";
import { fetchShops } from "../store/reducers/ActionCreators";

import "../media/css/main.css";

interface Props {
  /** Interface language */
  language: string;
  /** Display send step */
  show_send: boolean;
  /** User */
  user?: string;
}

const App: FC<Props> = (props: Props) => {
  const dispatch = useAppDispatch();
  const { currentStep, language } = useAppSelector(state => state.app);

  const orderRef = useRef();
  const basketRef = useRef();
  const customerRef = useRef();
  const sendRef = useRef();

  const steps: any = useMemo(() => ({
    order: orderRef,
    basket: basketRef,
    customer: customerRef
  }), []);

  useEffect(() => {
    if (props.show_send) {
      steps.send = sendRef;
      dispatch(showSend());
    }
    props.user && dispatch(setUser(props.user));
    let initialStep = window.location.pathname.slice(1);
    dispatch(setCurrentStep(steps[initialStep] ? initialStep : 'order'));
    dispatch(setLanguage(props.language));
  }, [props, steps, dispatch]);

  const scrollToStep = useCallback((step: string) => {
    const position = steps[step].current.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top: position });
  }, [steps]);

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
    window.addEventListener("scroll", getPosition);

    return () => {
      window.removeEventListener("scroll", getLocationStep);
      window.removeEventListener("scroll", getPosition);
    };
  }, [currentStep, dispatch, scrollToStep, steps]);

  useEffect(() => {
    language && dispatch(fetchShops());
  }, [language, dispatch]);

  // обработка нажатия навигации
  const handleStep = (step: string) => {
    window.history.pushState("", "", "/" + step);
    scrollToStep(step);
  };

  return (
      <div className="register_page">
        <Menu handleStep={handleStep} />
        <div className="main_page">
          <Header />
          <div className="content_container">
            <div className="content">
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
