import { useContext } from "react";
import { ShopCartContext } from "../../context";
import {
  Card,
  CheckoutAside,
  Layout,
  ProductDetail,
  ProductsNotFound,
} from "../../components";

export const Home = () => {
  const { products, filteredProducts, searchByTitle, setSearchByTitle } =
    useContext(ShopCartContext);

  const renderView = () => {
    const productsToRender = !filteredProducts ? products : filteredProducts;

    if (productsToRender.length > 0)
      return (
        <section className="grid gap-6 grid-cols-4 w-full max-w-screen-lg 2xl:grid-cols-6 2xl:max-w-screen-2xl md:grid-cols-3 md:max-w-screen-md sm:grid-cols-1 sm:max-w-screen-sm">
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
