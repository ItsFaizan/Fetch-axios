import React, { useState, useEffect } from 'react';


export default function FirstComponent() {
  const [posts, setPosts] = useState([]);

  const deletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
       method: 'DELETE',
    }).then((response) => {
       if (response.status === 200) {
          setPosts(
             posts.filter((post) => {
                return post.id !== id;
             })
          );
       } else {
          return;
       }
    });
    };


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setPosts(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

    return (
      <div>
             {posts.map((post) => {
         return (
            <div className="post-card" key={post.id}>
               <h2 className="post-title">{post.title}</h2>
               <p className="post-body">{post.body}</p>
               <div className="button">
               <div className="button">
                  <div className="delete-btn" onClick={() => deletePost(post.id)}>
                     Delete
                  </div>
                  </div>
               </div>
            </div>
         );
      })}

      </div>
    );
  }