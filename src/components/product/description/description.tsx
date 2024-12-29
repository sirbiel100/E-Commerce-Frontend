import Text from "./text/text";
import Buy from "./buy/buy";
import style from './description.module.scss';

export default function ProductDescription() {
    return(
        <section className={style.description}>
            <Text />
            <Buy />
        </section>
    )
}