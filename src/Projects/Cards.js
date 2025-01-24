import { StyleSheet, css } from "aphrodite/no-important";
// import { GithubIcon } from "../Socials/SocialSvg";

const cardStyle = StyleSheet.create({
    latestContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        marginTop: '4rem',
        // Mobile screen width
        '@media (min-width: 320px) and (max-width: 786px)': {
            alignItems: 'center',
        },
        // Laptop (small) & Desktop screens width
        '@media (min-width: 786px)': {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
        },
        '@media (min-width: 1200px)': {
            gap: '7rem 3rem'
        }
    },

    midCard: {
        '@media (min-width: 1200px)': {
            transform: 'scale(1.2)'
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
        '@media (min-width: 1024px)': {
            width: 'calc(1rem + 27.5vw)',
            padding: '0'
        },
        '@media (min-width: 1200px) and (max-width: 1256px)': {
            width: '300px'
        },
        '@media (min-width: 1256px)': {
            width: '340px'
        }
    },
    cardCover: {
        objectFit: 'cover',
        // Mobile & Tablet screens width
        '@media (min-width: 320px)': {
            width: '100%',
            borderRadius: '20px 20px 0 0'
        },
        // Laptop (small) screen width
        '@media (min-width: 786px)': {
            height: 'calc(1rem + 30vh)'
        },
    },
    cardContent: {
        // Shared CSS styles for all sizes
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        gap: '0.7rem',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: '1rem',
        '@media (min-width: 1024px) and (max-width: 1200px)': {
            height: '300px'
        },
        // Desktop screen width
        '@media (min-width: 1024px)': {
            // height: '300px',
            marginBottom: '0'
        },
        '@media (min-width: 1200px)': {
            padding: '1rem 2rem',
            height: 'unset'
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
        lineHeight: '1.5rem',
    },
    codeBtn: {
        width: '126px',
        height: '36px',
        marginBottom: '1rem',
        border: '0',
        borderRadius: '5px',
    },
    codeAnchor: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        backgroundColor: 'black',
        borderRadius: '5px',
        gap: '0.5rem',
        padding: '0.5rem',
        width: '100%',
        height: '100%',
        color: 'white',
        '@media (min-width: 1024px)': {
            transition: 'all 0.5s',
            ':hover': {
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black'
            },
            ':hover svg path': {
                fill: 'black'
            }
        }
    }
})


export default function Cards({ data }) {
    return (
        <>
            <div className={css(cardStyle.latestContainer)}>
                {data.map((elem, idx) => {
                    return (
                        <article key={elem.id} className={css(cardStyle.largeCard, idx === 1 && cardStyle.midCard)}>
                            <img className={css(cardStyle.cardCover)} src={elem.img_url} />
                            <div className={css(cardStyle.cardContent)}>
                                <p className={css(cardStyle.projectCategory)}>{elem.category}</p>
                                <h3 className={css(cardStyle.projectTitle)}>{elem.projectTitle}</h3>
                                <p className={css(cardStyle.projectIntro)}>{elem.introduction}</p>
                            </div>
                            <button className={css(cardStyle.codeBtn)}>
                                <a className={css(cardStyle.codeAnchor)} href={elem.code_url}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white"></path>
                                    </svg>
                                    Source code
                                </a>
                            </button>
                        </article>
                    )
                })}
            </div>

        </>
    )
}