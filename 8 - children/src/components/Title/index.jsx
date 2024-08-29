import PropTypes from "prop-types"; // Importe o PropTypes
import styles from "./styles.module.css";

// Defina o componente Title
export default function Title(props) {
  return <h2 className={styles.wrapper}>{props.children}</h2>;
}

// Adicione a definição de PropTypes para validar as propriedades esperadas
Title.propTypes = {
  children: PropTypes.node.isRequired, // Validação de prop para children
};
