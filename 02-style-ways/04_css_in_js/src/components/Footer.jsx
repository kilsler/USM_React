import styled from 'styled-components';

const FootWrapper = styled.footer`
    background-color: #1b1313;
    color: white;
    padding: 10px;
    width: 100%;
  `;
function Footer() {
  
    return (
      <FootWrapper>
        © {new Date().getFullYear()} Название компании. Все права защищены.
      </FootWrapper>
    );
   }

export default Footer;