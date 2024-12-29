import style from './text.module.scss';

export default function Text() {
    return(
        <section className={style.text}>
            <small>SNEAKER COMPANY</small>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they`ll withstand evertyhing the weather can offer.</p>
        </section>
    )
}