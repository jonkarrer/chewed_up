# Summary

## Set-up Prisma and DB

1. install prisma

   ```bash
   npm i -D prisma
   ```

2. Need the prisma client

   ```bash
   npm i @prisma/client
   ```

3. Initialize prisma

   ```bash
   npx prisma init
   ```

4. Change schema

   ```javascript
   datasource db {
     provider = "sqlite"
     url      = "file:./dev.db"
   }
   ```

5. Create a model for the post in the schema

   ```javascript
   model Post {
     id String @id @default(cuid())
     title String
     body String
   }
   ```

6. Migrate prisma to database, name migration 'init'

   ```bash
   npx prisma migrate dev --preview-feature
   ```

7. Go to prisma studio

   ```bash
   npx prisma studio
   ```

8. If I need to edit the model, refer to this site. Update model and run another migration in short. If it doesnt work, follow the prompt and run another migration until it says the data is floating. <https://www.prisma.io/docs/concepts/components/prisma-migrate/>

## Use prisma

1. Inside the studio I manually added data to use as a test.

2. I queried to the data in a similair way as my json website.

3. Using getServerSideProps, I created a way to query the data and display.

   ```javascript
   import { PrismaClient } from "@prisma/client";

   const prisma = new PrismaClient();

   export const getServerSideProps = async () => {
     const data = await prisma.post.findMany();

     return {
       props: { allPosts: data },
     };
   };
   ```

4. The 'prisma.post' part is the model I created inside the prisma database. findMany(); returns an array of all the post objects.

5. I used map() to display all the posts in the database

   ```javascript
   {
     allPosts.map((item) => (
       <Link href="/posts/k">
         <Post
           key={item.index}
           userId={item.userId}
           id={item.id}
           title={item.title}
           body={item.body}
         />
       </Link>
     ));
   }
   ```

## Creating Links to each post

1. Import the next.js Link component

   ```javascript
   import Link from "next/link";
   ```

2. I wrapped the post component with a link tag, and passed the desired path with href.

   ```javascript
   return (
     <>
       // Id comes from a prop on my Post Component.
       //All the Post components are map()'ed through in index.js
       <Link href={`/posts/${id}`}>
         <div className={styles.Post}>
   ```

3. Now each time a post is clicked, the route becomes '/posts/id' -of-clicked-post

## Dynamic paths and pages

1. I created a folder inside of pages called posts. In this directry I created a file called [id].tsx. This let next.js know that this path is dynamic. As in '/posts/6' or '/posts/35'.

2. I used the next.js tool to getStaticPaths. I set up a fetch request to get some test data.

   ```javascript
   export const getStaticPaths = async () => {
     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
     const data = await res.json();
   ```

3. I needed to digest this data in a 'next.js opionated way'

   ```javascript
   const paths = data.map((item) => {
       return {
         params: { id: item.id.toString() },
       };
     });

     return { paths, fallback: false };
   };
   ```

4. The 'data' is an array of objects. Thus I use the map() method to loop through each object. For each object, I want to capture my desired parameter. I want the id from each object, item.id, and stringify it. I store this in params.id and push it to the array. The map() method returns an array [params: { id: 1 }, params: { id: 2 }].

5. Then I return this array plus a fallback. getStaticPaths requires the return of a 'path';

6. Next I need to set up the single 'template/layput' that all the data will populate.

## Dynamic data

1. Next.js has a ssr tool for dynamic data called getStaticProps

   ```javascript
   export const getStaticProps = async (context) => {
     const id = context.params.id;
     const res = await fetch(
       "https://jsonplaceholder.typicode.com/posts/" + id
     );
     const data = await res.json();

     return {
       props: { posts: data },
     };
   };
   ```

2. The 'context' argument IS the return value of getStaticPaths.

3. The getStaticProps will run for every item in [params: { id: 1 }, params: { id: 2 }] array. For each item I want to capture the id.

4. I use the id to fetch the dynamic path data. Concating + id tells my program to fetch the info at this exact url.

5. Now for each item, I fetch each url, and next.js creates seperate HTML pages for each item/url.

6. getStaticProps needs a return object containg 'props:' this will hold a single item/url. Remember that each url is represented by an HTML page, so I need to pass the data to my layout/template.

   ```javascript
   const PostTemplate = ({ posts }) => {
     return (
       <div>
         <h1>{posts.title}</h1>
         <p>{posts.body}</p>
       </div>
     );
   };

   export default PostTemplate;
   ```

7. The posts argument comes from my getStaticProps function. Using this, I can pull apart the properties in each object to display on my page.

## Set up Prisma api

1. I relied heavily on prisma's github for next.js. Refer to this link <https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-nextjs-api-routes>

2. Putting post folder in the api folder was the gotcha. /api/post was used as the fetch destination in the admin page. the real path is api/post/index. Kinda odd.

## Build errors

1. Critical dependency: the request of a dependency is an expression
   10:41:28 PM: ./node_modules/@prisma/client/runtime/index.js

2. M: ./node_modules/next/dist/next-server/server/load-components.js
   10:41:28 PM: Critical dependency: the request of a dependency is an expression
   10:41:28 PM: ./node_modules/next/dist/next-server/server/load-components.js
   10:41:28 PM: Critical dependency: the request of a dependency is an expression
   10:41:28 PM: ./node_modules/next/dist/next-server/server/require.js
   10:41:28 PM: Critical dependency: the request of a dependency is an expression
   10:41:28 PM: ./node_modules/next/dist/next-server/server/require.js
   10:41:28 PM: Critical dependency: the request of a dependency is an expression
   10:41:28 PM: ./node_modules/next/dist/next-server/server/require.js

3. Critical dependency: the request of a dependency is an expression
   10:41:28 PM: ./node_modules/@prisma/client/runtime/index.js
   10:41:28 PM: Module not found: Can't resolve 'encoding' in '/opt/build/repo/node_modules/@prisma/client/runtime'
   10:41:28 PM: ./node_modules/node-fetch/lib/index.js
   10:41:28 PM: Module not found: Can't resolve 'encoding' in '/opt/build/repo/node_modules/node-fetch/lib'
