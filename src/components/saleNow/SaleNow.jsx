import React from "react";
import promoImg from "../../img/images/promo-img.jpg";
import "./saleNow.css";

const SaleNow = () => {
  return (
    <section className="sale">
      <div className="container">
        <div className="sale__content">
          <div className="sale__img">
            <img src={promoImg} alt="Promo" />
          </div>
          <div className="sale__info-bg">
            <div className="sale__info">
              <div className="sale__title">
                <span className="highlight highlight-mini">
                  <span>PAYDAY</span>
                </span>
                SALE NOW
              </div>
              <div className="sale__text">
                Spend minimal $100 get 30% off voucher code for your next
                purchase
              </div>
              <div className="sale__text-date">1 June - 10 June 2021</div>
              <div className="sale__text-date-bottom">
                *Terms & Conditions apply
              </div>

              <div className="sale__btn-wrapper">
                <a href="#!" className="sale__btn">
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleNow;
