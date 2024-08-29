import PropTypes from "prop-types";
import ProfileSection from "./ProfileSection";
import styles from "./styles.module.css";
import LinkButton from "../LinkButton";
import Title from "../Title";

export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>{props.name}</Title> {/* Ajuste de children */}
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection>
        <div className={styles.links}>
          <LinkButton href={props.githubUrl}>GitHub</LinkButton>
          <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
          <LinkButton href={props.instagramUrl}>Instagram</LinkButton>
        </div>
      </ProfileSection>
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
