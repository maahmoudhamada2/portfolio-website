import SectionHoc from '../SectionHoc/SectionHoc'
import SkillCard from './SkillCard'

const SectionBuilder = SectionHoc(SkillCard)
export default function AboutMe() {
    return (
        <SectionBuilder
            sectionId="aboutme"
            color='gray'
            title="About Me"
            subTitle="Hey there! I’m Mahmoud Hamada"
            paragraph="I’m a software engineer who thrives on turning ideas into reality. My journey is all about crafting elegant solutions, building responsive applications, and pushing boundaries to deliver exceptional user experiences. Every line of code I write is a step toward creating something meaningful, and I’m excited to share my story with you!"
        />
    )
}