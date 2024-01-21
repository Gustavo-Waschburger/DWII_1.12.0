import "./botao.css";
const botao = function botao() {
  return (
    <>
      <button className="bottao_titulo">
        <svg viewBox="0 0 54 54" width="154" height="154">
          <ellipse cx="8" cy="5" rx="3" ry="3" />
          <ellipse cx="8" cy="15" rx="3" ry="3" />
          <ellipse cx="8" cy="25" rx="3" ry="3" />
        </svg>
      </button>
    </>
  );
};

export default botao;
