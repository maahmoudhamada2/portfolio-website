import { StyleSheet, css } from "aphrodite/no-important";

const sectionStyle = StyleSheet.create({
    default: {
        backgroundColor: 'white'
    },
    blackBG: {
        backgroundColor: 'rgba(6, 7, 9, 0.99)',
        color: 'white'
    },
    grayBg: {
        backgroundColor: '#eee'
    },
    sectionContainer: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 'calc(1rem + 3vh)',
        padding: '2rem'
    },
    sectionHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.1rem',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    headerTitle: {
        fontSize: 'calc(1rem + 2vw)',
        width: '50%',
        color: 'red',
    },
    headerSubTitle: {
        fontSize: 'calc(2rem + 1vw)',
        lineHeight: '3rem'
    },
    headerParagraph: {
        width: '70%',
        color: 'gray',
        fontWeight: '100',
        lineHeight: '1.7rem',
        textAlign: 'center'
    }
})
export default function SectionHoc(WrappedComponent) {
    const SectionBuilderHoc = ((props) => {
        const classname = css(
            sectionStyle.sectionContainer,
            props.color === 'black' ? sectionStyle.blackBG : props.color === 'gray' ? sectionStyle.grayBg : sectionStyle.default)
        return (
            <section id={props.sectionId} className={classname}>
                <header className={css(sectionStyle.sectionHeader)}>
                    <p className={css(sectionStyle.headerTitle)}>{props.title}</p>
                    <h2 className={css(sectionStyle.headerSubTitle)}>{props.subTitle}</h2>
                    <p className={css(sectionStyle.headerParagraph)}>{props.paragraph}</p>
                </header>
                <WrappedComponent {...props} />
            </section>
        )
    })
    SectionBuilderHoc.displayName = `SectionHoc(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    return SectionBuilderHoc
}