import Product from "@/types/product";

export default function Storage() {

    function getProducts(): Product[] {
        const products = localStorage.getItem("products");
        if (products) {
            return JSON.parse(products);
        }
        return [];
    }

    function saveProducts(newProducts: Product[]) {
        const existingProducts = getProducts();
        const updatedProducts = [...existingProducts, ...newProducts];
        localStorage.setItem("products", JSON.stringify(updatedProducts));
    }

    function clearProduct(productsToRemove: number[]) {
        const existingProducts = getProducts(); // Retrieve the current cart
        if (!Array.isArray(existingProducts)) return;

        // Filter out the products to remove
        const updatedProducts = existingProducts.filter(
            product => !productsToRemove.includes(product.id)
        );

        // Save the updated list back to localStorage
        localStorage.setItem("products", JSON.stringify(updatedProducts));
    }

    return {
        getProducts,
        saveProducts,
        clearProduct
    }

}