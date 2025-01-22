import { StyleSheet, css } from "aphrodite/no-important";
import { GithubIcon } from "../Socials/SocialSvg";

const cardStyle = StyleSheet.create({
    articleContainer: {
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            width: '100%',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.7)',
            borderRadius: '20px',
            transition: 'all 0.5s'
        },
        // Tabelt screen width
        '@media (min-width: 481px) and (max-width: 786px)': {
            width: 'calc(3rem + 60vw)'
        }
    },
    cardCover: {
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            width: '100%',
            borderRadius: '20px 20px 0 0'
        }
    },
    cardContent: {
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            gap: '1rem',
            textAlign: 'center',
            fontWeight: 'bold'
        }
    },
    projectCategory: {
        '@media (min-width: 320px) and (max-width: 786px)': {
            fontSize: 'calc(0.5rem + 2vw)',
            color: 'red',
        },
        // Tabelt screen width
        '@media (min-width: 481px) and (max-width: 786px)': {
            fontSize: 'calc(0.5rem + 1vw)',
        }
    },
    projectTitle: {
        // Mobile & Tabelt screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            // fontSize: '2rem',
            fontSize: 'calc(1rem + 3.5vw)'
        },
        // Tabelt screen width
        '@media (min-width: 481px) and (max-width: 786px)': {
            fontSize: 'calc(1rem + 2.3vw)'
        }
    },
    projectIntro: {
        // Mobile & Tabelt screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            color: 'gray',
            lineHeight: '1.5rem',
            fontFamily: 'lora-regular, serif',
            fontWeight: '500',
            fontSize: 'calc(0.5rem + 2vw)'
        },
        // Tabelt screen width
        '@media (min-width: 481px) and (max-width: 786px)': {
            fontSize: 'calc(0.7rem + 1vw)',
            lineHeight: '1.7rem'
        }
    },
    codeBtn: {
        // Mobile & Tabelt screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            width: '45px',
            height: '45px',
            border: '0',
            borderRadius: '5px',
            backgroundColor: 'black',
            marginTop: '1.5rem'
        }
    }
})



export default function Cards({ data }) {
    return (
        <>
            {data.map((elem) => {
                return (
                    <article key={elem.id} className={css(cardStyle.articleContainer)}>
                        <img className={css(cardStyle.cardCover)} src={elem.img_url} />
                        <div className={css(cardStyle.cardContent)}>
                            <p className={css(cardStyle.projectCategory)}>{elem.category}</p>
                            <h3 className={css(cardStyle.projectTitle)}>{elem.projectTitle}</h3>
                            <p className={css(cardStyle.projectIntro)}>{elem.introduction}</p>
                        </div>
                        <button className={css(cardStyle.codeBtn)}>
                            <a href={elem.code_url}><GithubIcon /></a>
                        </button>
                    </article>
                )
            })}
        </>
    )
}