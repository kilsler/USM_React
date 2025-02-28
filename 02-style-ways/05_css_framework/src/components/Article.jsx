function Article({post}) {


    return (
      <div class="flex justify-center items-center">
      <article class = " bg-white p-5 m-7 rounded-lg max-w-2xl">
        <h2 class = "text-gray-900">{post.title}</h2>
        <p class = "text-lg">{post.text}</p>
      </article></div>
    );
   }

   export default Article;