"use client"
import Image from "next/image"
import style from "./nav.module.scss"
import { useEffect, useState } from "react"
import Items from "./items/items"
import Cart from "./cart/cart"
import Storage from "@/infra/storage"

export default function Header() {
    const [isOpen, setIsOpen] = useState({
        menu: false,
        cart: false
    })
    const [productsQuantity, setProductsQuantity] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            const products = Storage().getProducts()
            setProductsQuantity(products.length)
        }, 500)

        return () => clearInterval(interval)
    }, [])


    return (
        <nav className={style.nav}>
            <aside>
                {!isOpen.menu && <Image src={"/icon-menu.svg"} alt="Open" width={40} height={40} onClick={() => setIsOpen({ ...isOpen, menu: true })} />}
                {isOpen.menu && <Image src={"/icon-close.svg"} alt="Close" width={40} height={40} onClick={() => setIsOpen({ ...isOpen, menu: false })} />}
                <Image src={"/logo.svg"} alt="logo" width={40} height={40} priority />
                <Items isMenuOpen={isOpen.menu} />
            </aside>
            <section>
                <div className={style.CartSection}>
                    <div>{productsQuantity}</div>
                    <Image src={"/icon-cart.svg"} alt="Cart" onClick={() => setIsOpen({ ...isOpen, cart: !isOpen.cart })} width={40} height={40} />
                    <Cart isCartOpen={isOpen.cart} />
                </div>
                <Image src={"/image-avatar.png"} alt="Avatar" width={40} height={40} />
            </section>

            <div className={`${style.shadow} ${isOpen.menu ? "" : style.hide}`} onClick={() => setIsOpen({ ...isOpen, menu: false })}></div> {/* This is a shadow when menu is opened */}
        </nav>
    )
}