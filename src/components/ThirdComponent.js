import React, { useState, useEffect } from 'react';

const ThirdComponent = () => {
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [posts, setPosts] = useState([]);

   // GET with Axios
   useEffect(() => {
      const fetchPost = async () => {
         let response = await client.get('?_limit=10');
         setPosts(response.data);
      };
      fetchPost();
   }, []);

   // Delete with Axios
   const deletePost = async (id) => {
      await client.delete(`${id}`);
      setPosts(
         posts.filter((post) => {
            return post.id !== id;
         })
      );
   };

   // Post with Axios
   const addPosts = async (title, body) => {
      let response = await client.post('', {
         title: title,
         body: body,
      });
      setPosts((posts) => [response.data, ...posts]);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      addPosts(title, body);
   };

   return (
    <>
    </>
      // ...
   );
};
export default ThirdComponent;