"use client"

import Image from "next/image"
import style from './buy.module.scss';
import {  useState } from "react";
import Storage from "@/infra/storage";
import { useAlertContext } from "@/components/alert/useAlert";

export default function Buy() {
    const [quantity, setQuantity] = useState(0);
    const hasDiscount = true;
    const discount = 50;
    const price = 250.00; // setPrice in case it would have some dashboard to change its value
    const { triggerAlert } = useAlertContext();

    const addProducts = () => {
        if (quantity === 0) return triggerAlert("error", "It is impossible to buy 0 products 🤔")
        if (quantity > 10) return triggerAlert("error", "Limit reached! You can add 10 more.")

        const newProduct = ([
            {   
                id: new Date().getTime(),
                Name: "Fall Limited Edition Sneakers",
                Price: hasDiscount ? price - (price * discount / 100) : price,
                Quantity: quantity,
                HasDiscount: true,
                Discount: discount,
            }
        ])
        Storage().saveProducts(newProduct)
        triggerAlert("success", "Product added to cart! 🎉")
    }

    const limitQuantityToNotLessThanZero = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
            return
        }

        triggerAlert("error", "How you gonna buy a negative quantity? 🤔")
    }

    return (
        <section className={style.buy}>
            <header>

                <div>
                    <p>${((discount/100) * price).toFixed(2)}</p>
                    <b>{discount}%</b>
                </div>

                <small>$250.00</small>
            </header>

            <main>
                <div>
                    <Image src="/icon-minus.svg" width={15} height={15} alt="Minus" onClick={() => limitQuantityToNotLessThanZero()} />
                    <span>{quantity}</span>
                    <Image src="/icon-plus.svg" width={15} height={15} alt="Plus" onClick={() => setQuantity(quantity + 1)} />
                </div>

                <button onClick={() => addProducts()}>
                    <Image src="/icon-cart.svg" width={15} height={15} alt="Cart" />
                    Add to cart
                </button>
            </main>

        </section>
    )
}