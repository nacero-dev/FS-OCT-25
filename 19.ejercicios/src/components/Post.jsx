import { useLoaderData } from "react-router-dom";

const Post = () => {
    const post = useLoaderData();

    return (
        <div>
            <h1>Post Page</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;
