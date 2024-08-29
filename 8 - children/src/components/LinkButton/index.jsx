import PropTypes from "prop-types"; // Importe o PropTypes
import styles from "./styles.module.css";

// Defina o componente LinkButton
export default function LinkButton(props) {
  return (
    <a className={styles.wrapper} href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
}

// Adicione a definição de PropTypes para validar as propriedades esperadas
LinkButton.propTypes = {
  href: PropTypes.string.isRequired, // Validação de prop para href
  children: PropTypes.node.isRequired, // Validação de prop para children
};
