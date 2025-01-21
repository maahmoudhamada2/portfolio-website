import { StyleSheet, css } from "aphrodite/no-important";

const styles = StyleSheet.create({
    sectionContainer: {
        //Mobile Screen width
        '@media (min-width: 320px) and (max-width: 480px)': {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3rem',
            marginTop: '2rem'
        }
    },
    articleContainer: {
        //Mobile Screen width
        '@media (min-width: 320px) and (max-width: 480px)': {
            width: '100%',
            height: '630px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            borderRadius: '20px',
            boxShadow: 'rgba(0, 0, 0, 0.7) 0px 4px 8px 0px',
        }
    },
    colOne: {
        //Mobile Screen width
        '@media (min-width: 320px) and (max-width: 480px)': {
            width: '95%',
            height: '40%',
            borderRadius: '20px',
            transition: '0.5s',
        }
    },
    cover: {
        //Mobile Screen width
        '@media (min-width: 320px) and (max-width: 480px)': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '20px',
        }
    },
    colTwo: {
        //Mobile Screen width
        '@media (min-width: 320px) and (max-width: 480px)': {
            width: '100%',
            height: '55%',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
        }
    },
    blogDateDesc: {
        //Mobile Screen width
        '@media (min-width: 320px) and (max-width: 480px)': {
            color: 'gray',
            fontSize: '0.9rem',
            lineHeight: '1.2rem',
        }
    },
    blogTitle: {
        //Mobile Screen width
        '@media (min-width: 320px) and (max-width: 480px)': {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginTop: '0.7rem',
            marginBottom: '1rem',
            lineHeight: '2rem'
        }
    },
    readBtn: {
        //Mobile Screen width
        '@media (min-width: 320px) and (max-width: 480px)': {
            width: '9rem',
            padding: '0.8rem',
            marginTop: '1.5rem',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '20px',
            border: '0px',
            fontSize: '0.8rem'
        }
    }
})
export default function BlogCards({ blogPosts }) {
    return (
        <section className={css(styles.sectionContainer)}>
            {blogPosts.map((elem) => {
                return <article key={elem.id} className={css(styles.articleContainer)}>
                    <div className={css(styles.colOne)}>
                        <img className={css(styles.cover)} src={elem.blog_cover} />
                    </div>
                    <div className={css(styles.colTwo)}>
                        <p className={css(styles.blogDateDesc)}>{elem.posted_date}</p>
                        <h3 className={css(styles.blogTitle)}>{elem.blog_title}</h3>
                        <p className={css(styles.blogDateDesc)}>{elem.blog_description}</p>
                        <button className={css(styles.readBtn)}>READ MORE</button>
                    </div>
                </article>
            })}
        </section>
    )
}