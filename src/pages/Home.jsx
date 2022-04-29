import { useState } from "react";
import InputTemplate from "../components/InputTemplate";
import PostTemplate from "../components/PostTemplate";
import PublishTemplate from "../components/PublishTemplate";
import { useGetPostsQuery } from "../services/posts";

const PostsList = ({ posts = [], setToPublish }) => {
    return (
        <div>
            {
                posts && posts.map(post => (
                <PostTemplate
                    key={post._id}
                    id={post._id}
                    body={post.body}
                    date={post.date}
                    setToPublish={setToPublish}
                />
                ))
            }
        </div>
    )
}

const Home = () => {
    const { data, error, isLoading } = useGetPostsQuery();
    const [ toPublish, setToPublish ] = useState(false);
    return (
        <div className="App">
            {toPublish
                ? <PublishTemplate setToPublish={setToPublish}/>
                : <InputTemplate setToPublish={setToPublish}/>
            }
            {error && (
                <p>Ocurrio un error al cargar las publicaciones</p>
            )}
            {
            (isLoading)
                ? <p>Cargando publicaciones...</p>
                : <PostsList posts={data} setToPublish={setToPublish}/>
            }
            
        </div>
    )
}

export default Home;