import styled from "styled-components";
const ArticleWrapper = styled.article`
        max-width: 600px;
      margin: 10px auto;
      background: white;
      padding: 7px;
      border-radius: 10px;

    `;

const P = styled.p`
    font-size: 16px;
    color: #201919;
`;
const H2 = styled.h2`
    color: #333;
`;
function Article({post}) {
    

    return (
      <ArticleWrapper>
        <H2>{post.title}</H2>
        <P>{post.text}</P>
      </ArticleWrapper>
    );
   }

   export default Article;