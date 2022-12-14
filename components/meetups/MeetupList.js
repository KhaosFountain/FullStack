import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup._id}
          id={meetup.meetingId}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          option1={meetup.option1}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
