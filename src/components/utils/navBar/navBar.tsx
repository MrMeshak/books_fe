import { LogoIcon } from '../icons/icons';
import styles from './navBar.module.scss';

export interface INavBarProps {}

export default function NavBar(props: INavBarProps) {
  return (
    <div className={styles.navBar}>
      <a href="/">
        <LogoIcon />
        <h1>Luminary</h1>
      </a>
    </div>
  );
}
