import ProductDescription from "./description/description"
import Images from "./Images/images"
import style from './product.module.scss';

export default function Products() {
    return (
        <section className={style.product}>
            <Images />
            <ProductDescription />
        </section>
    )
}