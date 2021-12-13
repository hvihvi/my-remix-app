import {Link, useLoaderData} from "remix";

export const loader = (): Post[] => {
    return [
        {
            slug: "my-first-post",
            title: "My First Post"
        },
        {
            slug: "90s-mixtape",
            title: "A Mixtape I Made Just For You"
        }
    ];
};

type Post = {
    slug: string;
    title: string;
};

export default () => {
    const posts = useLoaderData<Post[]>();
    console.log(posts);

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.slug}>
                        <Link to={post.slug}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}