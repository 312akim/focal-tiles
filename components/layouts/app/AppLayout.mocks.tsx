import { IAppLayout } from "./AppLayout";
import styles from './AppLayout.module.css'

const MockComponent = () => {
    return(
        <main className={styles.mockContainer}>Mock Component Main</main>
    )
}

const base: IAppLayout = {
    children: (<MockComponent />),
}

export const mockAppLayoutProps = {
    base,
}