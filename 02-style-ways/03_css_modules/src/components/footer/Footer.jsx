import styles from './Footer.module.css';
function Footer() {
    return (
      <footer>
        © {new Date().getFullYear()} Название компании. Все права защищены.
      </footer>
    );
   }

export default Footer;