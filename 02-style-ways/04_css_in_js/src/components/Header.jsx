import styled from "styled-components";

const HeaderWrapper = styled.header`
    background-color: #282121;
    color: white;
    padding: 14px;
    font-size: 24px;
`;

function Header() {
    return (
      <HeaderWrapper>
        <h1>Mini-Blog</h1>
      </HeaderWrapper>
    );
   }

export default Header;