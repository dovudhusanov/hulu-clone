import styles from "../styles/OtherStyle.module.css"
import Link from "next/link";

function NotFound() {
    return (
        <div className={styles.notFound}>
            <h1>404 | Not Found</h1>
            <Link href="/">back to Home</Link>
        </div>
    );
}

export default NotFound;