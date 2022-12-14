import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const option1InputRef = useRef();
  const option1DetailInputRef = useRef();
  const option2DetailInputRef = useRef();
  const option3DetailInputRef = useRef();
  const option4DetailInputRef = useRef();

  const option2InputRef = useRef();
  const option3InputRef = useRef();
  const option4InputRef = useRef();

  const phoneNumberInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const enteredOption1 = option1InputRef.current.value;
    const enteredOption2 = option2InputRef.current.value;
    const enteredOption3 = option3InputRef.current.value;
    const enteredOption4 = option4InputRef.current.value;

    const enteredOption1Detail = option1DetailInputRef.current.value;
    const enteredOption2Detail = option2DetailInputRef.current.value;
    const enteredOption3Detail = option3DetailInputRef.current.value;
    const enteredOption4Detail = option4DetailInputRef.current.value;

    const enteredPhoneNumber = phoneNumberInputRef.current.value;

    const meetupData = {
      meetingId: enteredTitle,
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
      option1: enteredOption1,
      option2: enteredOption2,
      option3: enteredOption3,
      option4: enteredOption4,
      option1Detail: enteredOption1Detail,
      option2Detail: enteredOption2Detail,
      option3Detail: enteredOption3Detail,
      option4Detail: enteredOption4Detail,
      phoneNumber: enteredPhoneNumber,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card className={classes.card}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">
            Meetup Title (must be unique: it's the meeting ID)
          </label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="option1">Option 1</label>
          <textarea
            id="option1"
            required
            rows="1"
            ref={option1InputRef}
          ></textarea>

          <label htmlFor="option1">Details</label>
          <textarea
            id="option1Detail"
            required
            rows="4"
            ref={option1DetailInputRef}
          ></textarea>
        </div>

        <div className={classes.control}>
          <label htmlFor="option2">Option 2</label>
          <textarea
            id="option2"
            required
            rows="1"
            ref={option2InputRef}
          ></textarea>

          <label htmlFor="option2">Details</label>
          <textarea
            id="option2Detail"
            required
            rows="4"
            ref={option2DetailInputRef}
          ></textarea>
        </div>

        <div className={classes.control}>
          <label htmlFor="option3">Option 3</label>
          <textarea
            id="option3"
            required
            rows="1"
            ref={option3InputRef}
          ></textarea>
          <label htmlFor="option2">Details</label>
          <textarea
            id="option3Detail"
            required
            rows="4"
            ref={option3DetailInputRef}
          ></textarea>
        </div>

        <div className={classes.control}>
          <label htmlFor="option4">Option 4</label>
          <textarea
            id="option4"
            required
            rows="1"
            ref={option4InputRef}
          ></textarea>
          <label htmlFor="option4">Details</label>
          <textarea
            id="option4Detail"
            required
            rows="4"
            ref={option4DetailInputRef}
          ></textarea>
        </div>

        <div className={classes.control}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <textarea
            id="phoneNumber"
            required
            rows="1"
            ref={phoneNumberInputRef}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
