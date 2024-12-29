"use client"

import Image from "next/image";
import style from "./images.module.scss";
import { useState } from "react";

export default function Images() {
    const [imageIndex, setImageIndex] = useState(0);
    const [displayImageBox, setDisplayImageBox] = useState(false);
    const ImagesUrl = ["/image-product-1.jpg", "/image-product-2.jpg", "/image-product-3.jpg", "/image-product-4.jpg"];
    const ThumbnailsUrl = ["/image-product-1-thumbnail.jpg", "/image-product-2-thumbnail.jpg", "/image-product-3-thumbnail.jpg", "/image-product-4-thumbnail.jpg"];

    const NextImage = () => {
        console.log("imageIndex:", imageIndex, '\n', "ImagesUrl.length:", ImagesUrl.length)

        if (imageIndex === ImagesUrl.length - 1) {
            setImageIndex(0);
            return
        }


        setImageIndex(imageIndex + 1);
    }

    const PreviousImage = () => {

        console.log("imageIndex:", imageIndex, '\n', "ImagesUrl.length:", ImagesUrl.length)
        if (imageIndex === 0) {
            setImageIndex(ImagesUrl.length - 1);
            return
        }

        setImageIndex(imageIndex - 1);
    }

    return (
        <section className={style.Images}>
            {/* Images */}
            <main>
                <Image
                    src={`${ImagesUrl[imageIndex]}`}
                    alt="Product Image"
                    width={500}
                    height={500}
                    onClick={() => setDisplayImageBox(true)}
                />

                <div>
                    {ThumbnailsUrl.map((thumbnail, index) => (
                        <Image
                            key={index}
                            src={thumbnail}
                            alt="Product Image"
                            width={100}
                            height={100}
                            onClick={() => setImageIndex(index)}
                            className={imageIndex === index ? style.active : ""}
                        />
                    ))}
                </div>
            </main>


            {/* Zoomed Images */}
            {displayImageBox &&
                <aside>
                    <Image src={`${ImagesUrl[imageIndex]}`} alt="Product Image" width={500} height={500} />

                    <div>
                        {ThumbnailsUrl.map((thumbnail, index) => (
                            <Image
                                key={index}
                                src={thumbnail}
                                alt="Product Image"
                                width={100}
                                height={100}
                                onClick={() => setImageIndex(index)}
                                className={imageIndex === index ? style.active : ""}
                            />
                        ))}
                    </div>
                        {/* Next and Previous Button */}
                        <div onClick={() => NextImage()} className={style.nextImageBox}>
                            <Image src={"/icon-next.svg"} alt="Next" width={20} height={20} />
                        </div>

                        <div onClick={() => PreviousImage()} className={style.previousImageBox}>
                            <Image src={"/icon-next.svg"} alt="Previous" width={20} height={20} />
                        </div>
                        {/* -------------------- */}

                    <Image src={"/icon-close.svg"} alt="Close" width={20} height={20} onClick={() => setDisplayImageBox(false)} />
                </aside>
            }

            {/* Next and Previous Button */}
            <div onClick={() => NextImage()} className={style.next}>
                <Image src={"/icon-next.svg"} alt="Next" width={20} height={20} />
            </div>

            <div onClick={() => PreviousImage()} className={style.previous}>
                <Image src={"/icon-next.svg"} alt="Previous" width={20} height={20} />
            </div>
            {/* -------------------- */}

            <span>{`${imageIndex + 1}/${ImagesUrl.length}`}</span>

            {/* Shadow when the image box is open */}
            {displayImageBox && <div className={style.shadowDiv}></div>}
        </section>
    )
}