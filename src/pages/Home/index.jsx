import { useState, useEffect } from "react";
import { API_URL } from "../../api";
import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { ProductDetail } from "../../components/ProductDetail";

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(`${API_URL}/products`);
        const data = await resp.json();
        setProducts(data);
      } catch (error) {
        console.error(`Ocurrio un error. ${error}`);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <section className="grid gap-6 grid-cols-4 w-full max-w-screen-lg">
        {products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </section>
      <ProductDetail />
    </Layout>
  );
};
