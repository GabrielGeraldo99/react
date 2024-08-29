import PropTypes from "prop-types";
import ProfileSection from "./ProfileSection";
import styles from "./styles.module.css";
import LinkButton from "../LinkButton";
import Title from "../Title";
import { useState } from "react";

export default function Profile(props) {
  const [followText, setFollowText] = useState("Follow");

  function handleClick() { // Remover 'ev' se não for usar
    alert("Você agora está seguindo!");
    setFollowText("Following");
  }

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button
          className={styles.followButton}
          onClick={handleClick}
        >
          {followText}
        </button>
      </Title>

      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
        className={styles.links}
        id="links-section"
        data-test="some value"
        aria-label="social links"
      >
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
