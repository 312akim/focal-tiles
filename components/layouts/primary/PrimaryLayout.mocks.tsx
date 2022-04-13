import { IPrimaryLayout } from './PrimaryLayout';
import styles from './PrimaryLayout.module.css';

const MockComponent = () => {
  return <main className={styles.mockContainer}>Mock Component Main</main>;
};

const base: IPrimaryLayout = {
  children: <MockComponent />,
};

export const mockPrimaryLayoutProps = {
  base,
};
