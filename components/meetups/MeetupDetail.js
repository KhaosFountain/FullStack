import styles from "./MeetupDetail.module.css";
import React, { useState } from "react";

function MeetupDetail(props) {
  const [popup, setPopup] = useState(false);
  const Option1 = () => {
    setPopup(!popup);
  };

  const [popup2, setPopup2] = useState(false);
  const Option2 = () => {
    setPopup2(!popup2);
  };

  const [popup3, setPopup3] = useState(false);
  const Option3 = () => {
    setPopup3(!popup3);
  };

  const [popup4, setPopup4] = useState(false);
  const Option4 = () => {
    setPopup4(!popup4);
  };

  

  return (
    <>
      <section>
        <div className={styles.detail}>
          <img src={props.image} alt={props.title} />
          <h1>{props.title}</h1>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>

        <div className={styles.opt}>
          <div className={styles.priceCard} onClick={Option1}>
            <div className={styles.cardDetail}>
              <h4>
                <p>{props.option1}</p>
              </h4>
            </div>
          </div>
          {popup && (
            <div className={styles.popup}>
            <div className={styles.overlay }></div>
            <div className={styles.popupContent}>
                <h2>hello popup</h2>
                <p>{props.option1Detail}</p>
                <button className={styles.closeBtn} onClick={Option1}>CLOSE</button>
            </div>
          </div>
          )}

          <div className={styles.priceCard} onClick={Option2}>
            <div className={styles.cardDetail}>
              <div className={styles.cardDetail}>
                <h4>
                  <p>{props.option2}</p>
                </h4>
              </div>
            </div>
          </div>
          {popup2 && (
            <div className={styles.popup}>
            <div className={styles.overlay }></div>
            <div className={styles.popupContent}>
                <h2>hello popup</h2>
                <p>{props.option2Detail}</p>
                <button className={styles.closeBtn} onClick={Option2}>CLOSE</button>
            </div>
          </div>
          )}

          <div className={styles.priceCard} onClick={Option3}>
            <div className={styles.cardDetail}>
              <div className={styles.cardDetail}>
                <h4>
                  <p>{props.option3}</p>
                </h4>
              </div>
            </div>
          </div>
          {popup3 && (
            <div className={styles.popup}>
            <div className={styles.overlay }></div>
            <div className={styles.popupContent}>
                <h2>hello popup</h2>
                <p>{props.option3Detail}</p>
                <button className={styles.closeBtn} onClick={Option3}>CLOSE</button>
            </div>
          </div>
          )}

          <div className={styles.priceCard} onClick={Option4}>
            <div className={styles.cardDetail}>
              <div className={styles.cardDetail}>
                <h4>
                  <p>{props.option4}</p>
                </h4>
              </div>
            </div>
          </div>
        </div>
        {popup4 && (
            <div className={styles.popup}>
            <div className={styles.overlay }></div>
            <div className={styles.popupContent}>
                <h2>hello popup</h2>
                <p>{props.option4Detail}</p>
                <button className={styles.closeBtn} onClick={Option4}>CLOSE</button>
            </div>
          </div>
          )}


      </section>

      

    </>
  );
}

export default MeetupDetail;