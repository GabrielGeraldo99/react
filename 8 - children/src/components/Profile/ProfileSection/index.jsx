import PropTypes from "prop-types"; // Importe o PropTypes
import styles from "./styles.module.css";

// Defina o componente ProfileSection
export default function ProfileSection(props) {
  return <div className={styles.wrapper}>{props.children}</div>;
}

// Adicione a definição de PropTypes para validar as propriedades esperadas
ProfileSection.propTypes = {
  children: PropTypes.node.isRequired, // Validação de prop para children
};
