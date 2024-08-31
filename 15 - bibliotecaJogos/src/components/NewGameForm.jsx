import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

// Defina propTypes após a declaração do componente
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
      <TextInput id="title" label="Título" value={title} onChange={(ev) => setTitle(ev.target.value)} />
      <TextInput id="cover" label="Capa" value={cover} onChange={(ev) => setCover(ev.target.value)} />
      <button type="submit">Adicionar</button>
    </form>
  );
}

// Adicione a validação das props aqui
NewGameForm.propTypes = {
  addGame: PropTypes.func.isRequired, // `isRequired` garante que a prop seja obrigatória
};

export default NewGameForm;
