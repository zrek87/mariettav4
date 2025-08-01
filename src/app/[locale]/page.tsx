import Hero from "@/components/Hero/Hero";
import Logos from "@/components/Logos/Logos";
import Whyus from "@/components/Whyus/Whyus";
import Products from "@/components/Products/Products";
import { Categories } from "@/components/Categories/Categories";
import Somficate from "@/components/Somficate/Somficate";
import Features from "@/components/Features/Features";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Logos />
      <section className="mt-10 mb-10">
        <Categories />
      </section>
      <Products />
      <Somficate />
      <Whyus />

      <section className="overflow-hidden mt-28">
        {" "}
        <Features />
      </section>
    </main>
  );
}
