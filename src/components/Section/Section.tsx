import css from './Section.module.css';

type TitleProps = {
    title: string
    children: React.ReactNode;
}


export const Section = ({ title, children }: TitleProps) => {
    return (
        <section className={css.section}>
        <h2>{title}</h2>
        {children}
        </section>
    );
};
