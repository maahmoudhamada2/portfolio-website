import { StyleSheet, css } from "aphrodite/no-important";
import { GithubIcon } from "../Socials/SocialSvg";

const cardStyle = StyleSheet.create({
    articleContainer: {
        '@media (max-width: 481px)': {
            width: '100%',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.7)',
            borderRadius: '20px'
        }
    },
    cardCover: {
        '@media (max-width: 481px)': {
            width: '100%',
            borderRadius: '20px 20px 0 0'
        }
    },
    cardContent: {
        '@media (max-width: 481px)': {
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            gap: '1rem',
            textAlign: 'center',
            fontWeight: 'bold'
        }
    },
    projectCategory: {
        '@media (max-width: 481px)': {
            color: 'red',
        }
    },
    projectTitle: {
        '@media (max-width: 481px)': {
            fontSize: '2rem'
        }
    },
    projectIntro: {
        '@media (max-width: 481px)': {
            color: 'gray',
            lineHeight: '1.3rem',
            fontFamily: 'lora-regular, serif',
            fontWeight: '500'
        }
    },
    codeBtn: {
        '@media (max-width: 481px)': {
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