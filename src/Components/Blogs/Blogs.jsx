import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/BLog";




const Blogs = () => {
      const [Blogs, setBlogs] = useState([]);

      useEffect(() => {
            fetch('Blogs.json')
                  .then(res => res.json())
                  .then(data => setBlogs(data))
      }, [])
      return (
            <div className="w-2/3">
                <h3>Blogs:{Blogs.length} </h3>
               {
                  Blogs.map(blog => <Blog key={blog} blog={blog}></Blog>)
               }
            </div>
      );
};

export default Blogs;