import PropTypes from "prop-types"; // Importe o PropTypes
import styles from "./styles.module.css";

// Defina o componente ProfileSection
export default function ProfileSection(props) {
  return (
    <div
      {...props}
      className={`${styles.wrapper} ${props.className}`}
    >
      {props.children}
    </div>
  );
}

// Adicione a definição de PropTypes para validar as propriedades esperadas
ProfileSection.propTypes = {
  children: PropTypes.node.isRequired, // Validação de prop para children
  className: PropTypes.string, // Validação de prop para className (opcional)
};
