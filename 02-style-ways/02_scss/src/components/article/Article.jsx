import styles from './Article.module.scss';

function Article({post}) {


    return (
      <article>
        <h2>{post.title}</h2>
        <p>{post.text}</p>
      </article>
    );
   }

   export default Article;