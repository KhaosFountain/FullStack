import styles from "./MeetupDetail.module.css";
import React, { useState } from "react";

function MeetupDetail(props) {
  const [modal, setModal] = useState(false);
  const Option1 = () => {
    setModal(!modal);
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

          <div className={styles.priceCard}>
            <div className={styles.cardDetail}>
              <div className={styles.cardDetail}>
                <h4>
                  <p>{props.option2}</p>
                </h4>
              </div>
            </div>
          </div>

          <div className={styles.priceCard}>
            <div className={styles.cardDetail}>
              <div className={styles.cardDetail}>
                <h4>
                  <p>{props.option3}</p>
                </h4>
              </div>
            </div>
          </div>

          <div className={styles.priceCard}>
            <div className={styles.cardDetail}>
              <div className={styles.cardDetail}>
                <h4>
                  <p>{props.option4}</p>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MeetupDetail;
