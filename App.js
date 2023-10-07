
import React from 'react'
import Counter1 from './Counter1';
import Parent1 from './Parent1';

import BlogContextDemo from './BlogContextDemo';
const blogInfo={
  React:{
    post:"Learn useContext Hooks",
    author:"Varun k"
  },
  Nodejs:{
    post:"Node commands",
    author:"Veena M"
  }
};
export const BlogContext=React.createContext(blogInfo);

export default function App() {
  return (
    <div className="App">
      {/*<div>
        <h1>useContext() Demo</h1>
        <BlogContext.Provider value={blogInfo}>
          <BlogContextDemo/>
        </BlogContext.Provider>
  </div>*/}
  <Parent1/>
 
 
     
     
    </div>
  );
}

