import { Link, Outlet } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <>
            <h1 className={styles.title}>Stock Item</h1>
            <div className={styles.section}>
                <section style={{ paddingBottom: '20px' }}>
                    <Link to="/items">Todos os Itens</Link> {/* Corrigido para "/items" */}
                </section>
                <section>
                    <Link to="new">Novo Item</Link> {/* Corrigido para "new" */}
                </section>
            </div>
            <hr />
            <Outlet />
        </>
    );
}
