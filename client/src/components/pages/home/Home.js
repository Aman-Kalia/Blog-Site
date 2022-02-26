import {useEffect, useState} from 'react';
import Header from '../../header/Header';
import Slidebar from '../../slidebar/Slidebar';
import Posts from '../../posts/Posts';
import axios from 'axios';
import './home.css';
import { useLocation } from 'react-router-dom';


export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Slidebar />
      </div>
    </>
  );
}
