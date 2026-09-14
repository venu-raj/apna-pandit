import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
import Header from "@/components/product-page/Header";
import Tabs from "@/components/product-page/Tabs";
import { LOCATIONGALLERY } from "@/constants/location-gallery";
import { SERVICESGALLERY } from "@/constants/services-gallery";
import { Product } from "@/types/product";
import { notFound } from "next/navigation";

const data: Product[] = [...LOCATIONGALLERY, ...SERVICESGALLERY];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  const productData = data.find((product) => product.id === Number(slug[0]));

  if (!productData?.title) {
    notFound();
  }

  return (
    <main className="w-full min-h-dvh pt-18 px-12">
      <div className="max-w-frame mx-auto pt-6 px-4 xl:px-0">
        {/* <BreadcrumbProduct title={productData.title} /> */}

        <section className="mt-6 mb-12">
          <Header data={productData} />
        </section>

        <section className="pb-16">
          <Tabs />
        </section>
      </div>
    </main>
  );
}
