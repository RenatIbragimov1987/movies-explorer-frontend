import './InfoTooltip.css';
import SuccessIcon from "../../images/iconsOк.svg";
import ErrorIcon from "../../images/ErrorIcon.svg";
import closeIcon from "../../images/iconsClose.svg";

function InfoTooltip({ isInfoToolTip, isSuccess, onClose }) {
  return (
    <div className={`popup popup_info-tooltip ${isInfoToolTip && "popup_opened"}`}>
      <div className="popup__container-tooltip">
        <img
					alt="pic"
          src={closeIcon}
          className="popup__close-icon"
          onClick={onClose}
        ></img>

        <img
					alt="pic"
          className="popup__tooltip-img"
          src={isSuccess ? SuccessIcon : ErrorIcon }
        />

        <h3 className={`popup__title popup__title-tooltip`}>
          {isSuccess
            ? "Отлично 😃"
            : "Ошибка 😭"}
        </h3>
      </div>
    </div>
  );
}

export default InfoTooltip;