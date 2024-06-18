import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink link={"/"} texto={"inicio"} />
        <MenuLink link={"/sobremim"} texto={"sobre mim"} />
      </nav>
    </header>
  );
}
