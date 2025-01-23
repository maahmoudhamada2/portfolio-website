import { StyleSheet, css } from 'aphrodite/no-important';
import skillsBG from '../assets/skill.jpg'
import { useState } from 'react';
import { ArrowIcon, ClangIcon, CssIcon, HtmlIcon, JavaScriptIcon, MySqlIcon, PythonIcon } from './LangIcons';

const styles = StyleSheet.create({

    sectionContainer: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
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
        '@media (min-width: 320px) and (max-width: 481px)': {
            width: '100vw'
        },
        // Tablet screen width
        '@media (min-width: 481px) and (max-width: 786px)': {
            width: '90%'
        },

        // Laptop (small) screens width
        '@media (min-width: 786px) and (max-width: 1024px)': {
            width: '50vw',
            height: '650px',
            flexDirection: 'row'
        },
        // Fix design issue
        '@media (min-width: 655px) and (max-width: 786px)': {
            width: '65vw'
        },
    },
    sectionHeader: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            width: '100%',
            padding: '4rem 2rem',
            display: 'flex',
            gap: '2rem',
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
        },
    },
    headerTitle: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            fontWeight: 'bold',
            borderBottom: '4px solid white',
            letterSpacing: '0.4rem',
            margin: '1rem 0.5rem',
            fontStyle: 'italic',
            padding: '0.5rem'
        },
        // Mobile screen width 
        '@media (min-width: 320px) and (max-width: 481px)': {
            fontSize: 'calc(1rem + 12vw)'
        },
        // Tabelt screen width
        '@media (min-width: 481px) and (max-width: 786px)': {
            fontSize: 'calc(1rem + 10vw)',
        },

        // Laptop (small) screen width
        '@media (min-width: 786px) and (max-width: 1024px)': {
            fontSize: 'calc(1rem + 7vw)'
        },
        // Fix design issue
        '@media (min-width: 655px) and (max-width: 786px)': {
            fontSize: 'calc(1rem + 6vw)',
            margin: '0.5rem'
        },
    },
    headerParagraph: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            width: '100%',
            lineHeight: '2rem',
            textAlign: 'center'
        },
        // Tabel screen width
        '@media (min-width: 481px) and (max-width: 786px)': {
            fontSize: 'calc(0.5rem + 2vw)',
        },
        // Fix design issue
        '@media (min-width: 655px) and (max-width: 786px)': {
            fontSize: 'calc(0.5rem + 1.7vw)'
        },
        // Laptop (small) screen width
        '@media (min-width: 786px) and (max-width: 1024px)': {
            fontSize: 'calc(1rem + 0.3vw)'
        }

    },
    downloadBtn: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            padding: 'calc(0.5rem + 2vh)',
            border: '0px',
            backgroundColor: 'red',
            color: 'white',
            fontSize: 'calc(0.8rem + 1vw)',
            lineHeight: 'calc(0.5rem + 2vh)',
        },
    },
    arrowBtn: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            display: 'flex',
            backgroundColor: 'white',
            borderRadius: '50%',
            border: '0px',
            marginTop: '1.5rem',
            cursor: 'pointer',
            transition: 'transform 0.5s',
        },
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            transform: 'rotate(90deg)'
        },
    },
    langContainer: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            overflow: 'hidden',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '2rem',
            transition: 'all 0.5s',
        },
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            width: '100%',
            height: '0',
        },
        '@media (min-width: 786px) and (max-width: 1024px)': {
            width: '0'
        }
    },
    langContainerDivs: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: '0.5rem',
        },
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            width: '100%',
            height: '0',
            alignItems: 'center'
        },
        // Laptop (small) screen width
        '@media (min-width: 786px) and (max-width: 1024px': {
            width: '0',
        }
    },
    langTitle: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            fontWeight: 'bold',
            marginTop: '1rem'
        }
    },
    langDescription: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            fontSize: '0.9rem',
            color: 'gray',
            lineHeight: '1.2rem',
        },
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            textAlign: 'center'
        }
    },

    // -------------------------------------------------------  Expand Styles ---------------------------------------------------------

    expandSectionContainer: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            padding: '0',
            transition: 'width 0.5s'
        },
        // Laptop (small) screen width
        '@media (min-width: 786px) and (max-width: 1024px)': {
            width: '100%',
        }
    },
    expandSectionHeader: {
        // Mobile, Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            width: '100%'
        },
        // Laptop (small) screen width
        '@media (min-width: 786px) and (max-width: 1024px)': {
            width: '50%',
            padding: '4rem 1rem'
        }
    },
    expandLangContainer: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            padding: '1rem 2rem',
            transition: 'all 0.5s',
            alignItems: 'center'
        },
        // Mobile screen width
        '@media (min-width: 320px) and (max-width: 481px)': {
            height: '1360px'
        },
        // Tablet screen width
        '@media (min-width: 481px) and (max-width: 786px)': {
            height: '700px'
        },
        // Laptop (small) screen width
        '@media (min-width: 786px) and (max-width: 1024px)': {
            width: '60%',
            height: '100%',
            gap: '0 2rem'
        }
    },
    expandLangContDivs: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            height: '200px',
            borderBottom: '1px solid gray'
        },
        // Mobile screen width
        '@media (min-width: 320px) and (max-width: 481px)': {
            width: '100%',
            height: ' 180px'
        },
        // Tablet screen width
        '@media (min-width: 481px) and (max-width: 786px)': {
            width: '44%',
        },
        // Laptop (small) screen width
        '@media (min-width: 786px) and (max-width: 1024px)': {
            width: '44%',
            overflow: 'unset',
            border: '0'
        }
    },
    expandArrowBtn: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            transition: 'transform 0.5s'
        },
        // Mobile & Tablet screens width 
        '@media (min-width: 320px) and (max-width: 786px)': {
            transform: 'rotate(270deg)'
        },
        // Laptop (small) screen width
        '@media (min-width: 786px) and (max-width: 1024px)': {
            transform: 'rotate(180deg)'
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
        <section className={css(styles.sectionContainer, expand && styles.expandSectionContainer)}>
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