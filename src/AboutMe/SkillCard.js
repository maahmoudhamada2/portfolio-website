import { StyleSheet, css } from 'aphrodite/no-important';
import skillsBG from '../assets/skill.jpg'
import { useState } from 'react';
import { ArrowIcon, ClangIcon, CssIcon, HtmlIcon, JavaScriptIcon, MySqlIcon, PythonIcon } from './LangIcons';

const styles = StyleSheet.create({

    sectionContainer: {
        // Mobile screen width
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            width: '90%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: 'rgba(0, 0, 0, 0.7) 0px 4px 8px 0px',
            transition: 'width 0.5s',
            borderRadius: '40px',
            backgroundColor: 'white',
        }
    },
    sectionHeader: {

        // Mobile screen width
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            width: '100%',
            padding: '4rem 2rem',
            display: 'flex',
            gap: '1rem',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            backgroundImage: `url('${skillsBG}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '40px',
            position: 'relative',
            transition: 'width 0.5s',
            zIndex: '1',
            ':before': {
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0',
                left: '0',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                zIndex: '-1',
                borderRadius: '40px'
            }
        }
    },
    headerTitle: {
        // Mobile screen width
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            fontSize: '4rem',
            fontWeight: 'bold',
            borderBottom: '4px solid white',
            letterSpacing: '0.4rem',
            margin: '1rem 0.5rem',
            fontStyle: 'italic',
            padding: '0.5rem'
        }
    },
    headerParagraph: {
        // Mobile screen width
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            fontSize: '1rem',
            lineHeight: '1.7rem'
        }
    },
    downloadBtn: {
        // Mobile screen width
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            width: '65%',
            padding: '1rem',
            borderRadius: '15px',
            border: '0px',
            backgroundColor: 'red',
            color: 'white',
            fontSize: '1.1rem',
            marginTop: '1rem',
        }
    },
    arrowBtn: {
        // Mobile screen width
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            display: 'flex',
            backgroundColor: 'white',
            borderRadius: '50%',
            border: '0px',
            marginTop: '1.5rem',
            cursor: 'pointer',
            transition: 'transform 0.5s',
            transform: 'rotate(90deg)'
        }

    },
    langContainer: {

        // Mobile screen width
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            width: '100%',
            height: '0',
            overflow: 'hidden',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '2rem',
            transition: 'all 0.5s',
        }
    },
    langContainerDivs: {

        // Mobile screen width
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            width: '100%',
            height: '0',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '0.5rem',
        }
    },
    langTitle: {
        // Mobile screen width
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            fontWeight: 'bold',
            marginTop: '1rem'
        }
    },
    langDescription: {
        // Mobile screen width
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            fontSize: '0.9rem',
            color: 'gray',
            lineHeight: '1.2rem',
            textAlign: 'center'
        }
    },

    // -------------------------------------------------------  Expand Styles ---------------------------------------------------------

    expandSectionContainer: {
        // Mobile screen width
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            width: '80%',
            padding: '0',
            transition: 'width 0.5s'
        }
    },
    expandSectionHeader: {
        // Mobile screen width
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            width: '100%'
        }
    },
    expandLangContainer: {
        // Mobile screen width
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            height: '1200px',
            padding: '1rem 2rem',
            transition: 'all 0.5s',
            alignItems: 'center'
        }
    },
    expandLangContDivs: {
        // Mobile screen width
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            height: '150px',
            borderBottom: '1px solid gray'
        }
    },
    expandArrowBtn: {
        // Mobile screen width
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            transform: 'rotate(270deg)',
            transition: 'transform 0.5s'
        }
    }
})
export default function SkillCard() {
    const [expand, setExpand] = useState(false)
    const handlingExpand = () => expand ? setExpand(false) : setExpand(true);
    const langInfo = [
        {
            title: 'HTML',
            desc: 'Proficient in creating well-structured, accessible, and SEO-friendly web content',
            icon: <HtmlIcon />
        },
        {
            title: 'CSS',
            desc: 'Capable of designing visually appealing, responsive layouts to ensure a great user experience.',
            icon: <CssIcon />
        },
        {
            title: 'Python',
            desc: 'Skilled in writing efficient and scalable code for data analysis, automation, and web development.',
            icon: <PythonIcon />
        },
        {
            title: 'JavaScript',
            desc: 'Adept at building dynamic, interactive user interfaces and enhancing web functionality.',
            icon: <JavaScriptIcon />
        },
        {
            title: 'MySql',
            desc: 'Competent in managing relational databases, writing complex queries, and ensuring data integrity.',
            icon: <MySqlIcon />
        },
        {
            title: 'CLang',
            desc: 'Experienced in developing low-level applications and optimizing system performance.',
            icon: <ClangIcon />
        }
    ]
    return (
        <section className={css(styles.sectionContainer, expand && styles.expandSectionContainersectionContainer)}>
            <header className={css(styles.sectionHeader, expand && styles.expandSectionHeader)}>
                <h2 className={css(styles.headerTitle)}>Skills</h2>
                <p className={css(styles.headerParagraph)}>Versatile developer with expertise in various programming languages and web technologies, committed to building efficient, scalable, and user-friendly applications.</p>
                <button className={css(styles.downloadBtn)}>Download Resume</button>
                <button onClick={handlingExpand} className={css(styles.arrowBtn, expand && styles.expandArrowBtn)}><ArrowIcon /></button>
            </header>
            <div className={css(styles.langContainer, expand && styles.expandLangContainer)}>
                {langInfo.map((elem, idx) => {
                    return (<article key={idx} className={css(styles.langContainerDivs, expand && styles.expandLangContDivs)}>
                        {elem.icon}
                        <h3 className={css(styles.langTitle)}>{elem.title}</h3>
                        <p className={css(styles.langDescription)}>{elem.desc}</p>
                    </article>
                    )
                })}
            </div>
        </section>
    )
}


