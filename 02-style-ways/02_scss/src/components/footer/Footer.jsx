import styles from './Footer.module.scss';
function Footer() {
    return (
      <footer>
        © {new Date().getFullYear()} Название компании. Все права защищены.
      </footer>
    );
   }

export default Footer;