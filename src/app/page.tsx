"use client"
import Nav from "@/components/nav/nav";
import Product from "@/components/product/product";
import style from "./page.module.scss";
import { useAlertContext } from "@/components/alert/useAlert";
import Alert from "@/components/alert/alert";

export default function Home() {
  return (
    <section className={style.page}>
      <Nav />
      <Product />
      <Alert />
    </section>
  );
}
