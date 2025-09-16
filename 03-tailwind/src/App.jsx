import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import products from "./data/products";

export default function App(){
  return (
    <>
      <Navbar />
      <main className="pt-20 p-6 min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid gap-6 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map(p => <ProductCard key={p.id} {...p} />)}
        </div>
      </main>
    </>
  );
}
