import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha-foto.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Gustavo Bento, estudante de
          Front-end. Aqui compartilho vários conhecimentos, espero que
          aprenda algo novo :
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          alt="imagem de um circulo colorido"
          src={circuloColorido}
          aria-hidden={true}
        />

        <img  className={styles.minhaFoto} src={minhaFoto} alt="uma foto do Gustavo" />

      </div>
    </div>
  );
}
