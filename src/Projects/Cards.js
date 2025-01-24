import { StyleSheet, css } from "aphrodite/no-important";
import { GithubIcon } from "../Socials/SocialSvg";

const cardStyle = StyleSheet.create({
    latestContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        // Mobile screen width
        '@media (min-width: 320px) and (max-width: 786px)': {
            alignItems: 'center',
        },
        // Laptop (small) & Desktop screens width
        '@media (min-width: 786px) and (max-width: 1200px)': {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
        },
    },
    latestTitle: {
        display: 'none',
        width: '100%',
        fontSize: 'calc(1rem + 2vw)',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'red',
        margin: '1rem 0',
        // Desktop screen width
        '@media (min-width: 1024px) and (max-width: 1200px)': {
            display: 'block'
        }
    },
    largeCard: {
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.7)',
        borderRadius: '20px',
        transition: 'all 0.5s',
        position: 'relative',
        // Mobile screen width
        '@media (min-width: 320px) and (max-width: 481px)': {
            width: '100%'
        },
        // Desktop screen width
        '@media (min-width: 1024px) and (max-width: 1200px)': {
            width: 'calc(1rem + 27.5vw)',
            padding: '0'
        }
    },
    cardCover: {
        objectFit: 'cover',
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 1200px)': {
            width: '100%',
            borderRadius: '20px 20px 0 0'
        },
        // Laptop (small) screen width
        '@media (min-width: 786px) and (max-width: 1200px)': {
            height: 'calc(1rem + 30vh)'
        }
    },
    cardContent: {
        // Shared CSS styles for all sizes
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        gap: '1rem',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: '1rem',
        // Desktop screen width
        '@media (min-width: 1024px) and (max-width: 1200px)': {
            height: '300px',
            marginBottom: '0'
        }
    },
    projectCategory: {
        color: 'red',
    },
    projectTitle: {
        fontSize: '2rem',
    },
    projectIntro: {
        color: 'gray',
        fontFamily: 'lora-regular, serif',
        fontWeight: '500',
        lineHeight: '1.5rem'
    },
    codeBtn: {
        // Shared CSS styles for all sizes
        width: '50px',
        height: '50px',
        backgroundColor: 'black',
        border: '0',
        borderRadius: '10px',
        marginBottom: '1rem',
        // Mobile screen width
        '@media (min-width: 320px) and (max-width: 481px)': {
            width: '45px',
            height: '45px',
        },
        // Desktop screen width
        '@media (min-width: 1024px) and (max-width: 1200px)': {
            width: '55px',
            height: '55px'
        }
    }
})


export default function Cards({ data }) {
    return (
        <>
            <div className={css(cardStyle.latestContainer)}>
                <h3 className={css(cardStyle.latestTitle)}>Latest Projects</h3>
                {data.map((elem) => {
                    return (
                        <article key={elem.id} className={css(cardStyle.largeCard)}>
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
            </div>

        </>
    )
}