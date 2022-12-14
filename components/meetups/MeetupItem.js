import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router';

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  return (
    <>
    <h3 className={classes.h3}>{props.title}</h3>
    <li className={classes.item}>
      <section className = {classes.section}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </section>
    </li>
    </>
    
  );
}

export default MeetupItem;
