import { useEffect, useState } from "react"
import SectionHoc from "../SectionHoc/SectionHoc"
import BlogCards from "./BlogCards";

const SectionBuilder = SectionHoc(BlogCards)

export default function Blogs() {
    const [blogPosts, setBlogPosts] = useState([]);
    const blogApi_url = 'https://677baf7820824100c07a6e6a.mockapi.io/portfoli-data/api/v1/blogposts';
    useEffect(() => {
        fetch(blogApi_url)
            .then((response) => response.json())
            .then((data) => setBlogPosts(data))
    }, [])
    console.log(blogPosts)
    return (
        <SectionBuilder
            sectionId="blogs"
            title="Blogs"
            subTitle="Insights & Ideas"
            paragraph="Welcome to my blog, where I share my thoughts, experiences, and knowledge. Each post is crafted with care to inspire, inform, and spark curiosity. Dive in and explore stories that reflect my passion for learning and creating"
            blogPosts={blogPosts}
        />
    )
}