import Hero from "@/components/Hero/Hero";
import Logos from "@/components/Logos/Logos";
import Whyus from "@/components/Whyus/Whyus";
import Products from "@/components/Products/Products";
import { Categories } from "@/components/Categories/Categories";
import Somficate from "@/components/Somficate/Somficate";
import Features from "@/components/Features/Features";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  // Use RTL only for Arabic, LTR for all other languages
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <main className="bg-white">
      <Hero />
      <Logos direction={direction} />
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
