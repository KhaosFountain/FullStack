import styles from "./MeetupDetail.module.css";
import React, { useState } from "react";
import Popup from "reactjs-popup";

function MeetupDetail(props) {

    const [modal, setModal] = useState(false);
    const Option1 = () => {
        setModal(!modal);
    }

  return (
    <>
      <section>
        <div className={styles.detail}>
          <img src={props.image} alt={props.title} />
          <h1>{props.title}</h1>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>

        <div className={styles.carPrice}>
          <div className={styles.priceCard} onClick={Option1()}>
            <div className={styles.cardDetail}>
              <h4>
                <b>Option 1</b>
              </h4>
            </div>
          </div>

          <div className={styles.priceCard}>
            <div className={styles.cardDetail}>
              <h4>
                <b>Option 1</b>
              </h4>
            </div>
          </div>

          <div className={styles.priceCard}>
            <div className={styles.cardDetail}>
              <h4>
                <b>Option 1</b>
              </h4>
            </div>
          </div>

          <div className={styles.priceCard}>
            <div className={styles.cardDetail}>
              <h4>
                <b>Option 1</b>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MeetupDetail;
