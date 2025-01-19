import { useEffect, useState } from "react"
import SectionHoc from "../SectionHoc/SectionHoc"
import Cards from "./Cards"

const SectionBuilder = SectionHoc(Cards)

export default function Projects() {
    const [projectData, setProjectData] = useState([]);
    const dataApi_url = 'https://677baf7820824100c07a6e6a.mockapi.io/portfoli-data/api/v1/projects';
    useEffect(() => {
        fetch(dataApi_url)
            .then((response) => response.json())
            .then((data) => setProjectData(data))
    }, [])
    return (
        <SectionBuilder
            sectionId="projects"
            title="Projects"
            subTitle="My Creative Playground"
            paragraph="Here’s a showcase of my latest projects, where ideas meet innovation. Each project is a testament to my passion for crafting dynamic, user-focused solutions. Dive in and explore what I’ve been building!"
            data={projectData}
        />
    )
}