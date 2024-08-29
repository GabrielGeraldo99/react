import PropTypes from 'prop-types';
import styles from "./styles.module.css";

export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <h2 className={styles.name}>{props.name}</h2>
      <div>{props.bio}</div>
      <div>{props.phone}</div>
      <div>{props.email}</div>
      <div className={styles.links}>
        <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={props.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={props.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  githubUrl: PropTypes.string,
  linkedinUrl: PropTypes.string,
  instagramUrl: PropTypes.string,
};
