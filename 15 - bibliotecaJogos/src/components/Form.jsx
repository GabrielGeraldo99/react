import { useState } from "react";
import PropTypes from "prop-types";

// Mova a definição de propTypes para após a declaração do componente
function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cover">Capa:</label>
        <input
          type="text"
          id="cover"
          value={cover}
          onChange={(ev) => setCover(ev.target.value)}
        />
      </div>
      <button type="submit">Adicionar</button>
    </form>
  );
}

// Adicione a validação das props aqui
NewGameForm.propTypes = {
  addGame: PropTypes.func.isRequired, // `isRequired` garante que a prop seja obrigatória
};

export default NewGameForm;
