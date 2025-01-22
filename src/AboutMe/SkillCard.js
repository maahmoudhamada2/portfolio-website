import { StyleSheet, css } from 'aphrodite/no-important';
import skillsBG from '../assets/skill.jpg'
import { useState } from 'react';
import { ArrowIcon, ClangIcon, CssIcon, HtmlIcon, JavaScriptIcon, MySqlIcon, PythonIcon } from './LangIcons';

const styles = StyleSheet.create({

    sectionContainer: {
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            width: '80vw',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: 'rgba(0, 0, 0, 0.7) 0px 4px 8px 0px',
            transition: 'width 0.5s',
            borderRadius: '40px',
            backgroundColor: 'white',
        },
        // Mobile screen width
        '@media (min-width: 320px) and (max-width: 480px)': {
            width: '100vw'
        },
        // Small tablet screens
        '@media (min-width: 481px) and (max-width: 546)': {
            width: '75vw'
        },
        // Large tablet screen width
        '@media (min-width: 547px) and (max-width: 786px)': {
            width: '70vw'
        }
    },
    sectionHeader: {
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            width: '100%',
            padding: '4rem 1rem',
            display: 'flex',
            gap: '1.5rem',
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
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            fontSize: 'calc(1rem + 12vw)',
            fontWeight: 'bold',
            borderBottom: '4px solid white',
            letterSpacing: '0.4rem',
            margin: '1rem 0.5rem',
            fontStyle: 'italic',
            padding: '0.5rem'
        },
        // Tabelt screen width
        '@media (min-width: 481px) and (max-width: 786px)': {
            fontSize: 'calc(1rem + 8vw)',
        }
    },
    headerParagraph: {
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            width: '80%',
            fontSize: 'calc(0.5rem + 2vw)',
            lineHeight: '1.5rem'
        },
        // Tabel screen width
        '@media (min-width: 481px) and (max-width: 786px)': {
            fontSize: 'calc(0.5rem + 1.5vw)',
            lineHeight: '2rem'
        }
    },
    downloadBtn: {
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            width: 'calc(1rem + 40vw)',
            padding: 'calc(0.5rem + 2vh)',
            border: '0px',
            backgroundColor: 'red',
            color: 'white',
            fontSize: 'calc(0.8rem + 1vw)',
            marginTop: '1rem',
            lineHeight: 'calc(0.5rem + 2vh)',
        },
    },
    arrowBtn: {
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
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
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
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
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            width: '100%',
            height: '0',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '0.5rem',
        },
    },
    langTitle: {
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            fontWeight: 'bold',
            marginTop: '1rem'
        }
    },
    langDescription: {
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            fontSize: '0.9rem',
            color: 'gray',
            lineHeight: '1.2rem',
            textAlign: 'center'
        }
    },

    // -------------------------------------------------------  Expand Styles ---------------------------------------------------------

    expandSectionContainer: {
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            width: '80%',
            padding: '0',
            transition: 'width 0.5s'
        }
    },
    expandSectionHeader: {
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            width: '100%'
        }
    },
    expandLangContainer: {
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            height: '1360px',
            padding: '1rem 2rem',
            transition: 'all 0.5s',
            alignItems: 'center'
        },
        // Tablet screen width
        '@media (min-width: 481px) and (max-width: 786px)': {
            height: '700px'
        }
    },
    expandLangContDivs: {
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            height: '200px',
            borderBottom: '1px solid gray'
        },
        // Tablet screen width
        '@media (min-width: 481px) and (max-width: 786px)': {
            width: '45%',
        }
    },
    expandArrowBtn: {
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
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