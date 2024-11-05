import {Button} from "../Button/Button.jsx";
import styles from "./TodoItem.module.css"

export function TodoItem({name, done, onDeleteButtonClick, onDoneButtonClick}) {
    return (
        <li className={styles.item}>
            <span className={`${styles.name} ${done ? styles.done : ""}`}>{name}</span>
            {!done && <Button onClick={onDoneButtonClick}>Zrobione</Button>}
            <Button onClick={onDeleteButtonClick}>Usuń</Button>
        </li>
    );
}