import "./msg.css";
//import msg from './msg';

const mensagem = function mensagens({ mensagem, visualizado, remetente }) {
  let _visualizado = "visualized";
  if (visualizado === true) {
    _visualizado = "visualized yes";
  } else {
    _visualizado = "visualized";
  }

  let _remetente = "message";
  if (remetente === true) {
    _remetente = "message";
  } else {
    _remetente = "message me";
  }
  return (
    <>
      <li className={_remetente}>
        <button className="options">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </button>
        <span className={_visualizado}>
        <svg className="visto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"/></svg>
        </span>
        <p>{mensagem}</p>
      </li>
    </>
  );
};

export default mensagem;
