import { useContext } from "react";
import { ShopCartContext } from "../../context";
import { Layout } from "../../components/Layout";
import { Card } from "../../components/Card";
import { ProductsNotFound } from "../../components/ProductsNotFound";
import { ProductDetail } from "../../components/ProductDetail";
import { CheckoutAside } from "../../components/CheckoutAsideMenu/CheckoutAside";

export const Home = () => {
  const { products, filteredProducts, searchByTitle, setSearchByTitle } =
    useContext(ShopCartContext);

  const renderView = () => {
    const productsToRender =
      searchByTitle.length > 0 ? filteredProducts : products;

    if (productsToRender.length > 0)
      return (
        <section className="grid gap-6 grid-cols-4 w-full max-w-screen-lg">
          {productsToRender?.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </section>
      );

    return <ProductsNotFound search={searchByTitle} />;
  };

  return (
    <Layout>
      <div className="w-80 flex items-center justify-center mb-2">
        <h1>Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product..."
        className="rounded-lg border border-gray-500 w-80 px-4 py-2 mb-8 focus:outline-none"
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      {renderView()}
      <ProductDetail />
      <CheckoutAside />
    </Layout>
  );
};
