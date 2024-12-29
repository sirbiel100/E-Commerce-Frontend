"use client"

import Image from "next/image"
import style from "./cart.module.scss"
import { useEffect, useState } from "react"
import Product from "@/types/product"
import Storage from "@/infra/storage"

export default function Cart({ isCartOpen }: { isCartOpen: boolean }) {

    const [items, setItems] = useState<Product[]>([])

    useEffect(() => {
        const interval = setInterval(() => {
            const products = Storage().getProducts()
            if (products) {
                setItems(products)
            }

        }, 500)

        return () => clearInterval(interval)
    }, [])

    const handleRemoveProduct = (id: number) => {
        Storage().clearProduct([id]); // Remove from localStorage
        setItems(prevItems => prevItems.filter(item => item.id !== id)); // Update state
    };

    return (
        <section className={`${style.Cart} ${isCartOpen ? style.open : ""}`}>
            <b>Cart</b>
            {items.length === 0 && <p>Your cart is empty.</p>}

            {items.length > 0 &&
                items.map((item, index) => {
                    return (
                        <div key={index}>
                            <main>
                                <Image src={"/image-product-1-thumbnail.jpg"} alt="Product 1" width={40} height={40} />
                                <div>
                                    <h1>{item.Name}</h1>
                                    <small>${item.Price} x {item.Quantity} <strong>${item.Price * item.Quantity}</strong></small>
                                </div>
                                <Image src={"/icon-delete.svg"} alt="Close" width={40} height={40} onClick={() => handleRemoveProduct(item.id)}/>
                            </main>
                            <button>Checkout</button>
                        </div>
                    )
                })
            }
        </section>
    )
}