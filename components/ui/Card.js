import classes from '../meetups/MeetupList';

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
