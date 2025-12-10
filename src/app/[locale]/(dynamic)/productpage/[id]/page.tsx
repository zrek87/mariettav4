import { notFound } from "next/navigation";
import { productsData as products } from "@/components/Productcard/productsData";
import Image from "next/image";
import Productcard from "@/components/Productcard/Productcard";
import { Dataar } from "@/components/Productcard/Dataar";
import {getTranslations} from 'next-intl/server';
import {getLocale} from 'next-intl/server';


interface ProductDetailsProps {
  params: Promise<{ id: string }>;
}


const page = async ({ params }: ProductDetailsProps) => {
  const { id } = await params;
  const locale = await getLocale();
  const productId = Number(id);
  const Dataselectedlocale = locale === 'en' ? products : Dataar;
  const t = await getTranslations('productpage');
  const product = Dataselectedlocale.find((item) => item.id === productId);

  if (!product) return notFound();

  const otherProducts = products
    .filter((item) => item.id !== productId)
    .slice(0, 4);

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
 
        <div className="flex flex-col md:flex-row gap-10">
           
          <div className="flex-shrink-0">
            <Image
              src={product.detailImageUrl}  
              alt={product.title}
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>

 
          <div className="flex-grow">
            <h1
              className="text-2xl font-bold mb-4"
              style={{ color: "#E58411" }}
            >
              {product.title}
            </h1>

            <p className="text-gray-700 mb-6">{product.description}</p>

 
            {product.extraDescription && (
              <p className="text-gray-600 mb-6">{product.extraDescription}</p>
            )}

 
            <h2
              className="text-xl font-semibold mb-2"
              style={{ color: "#E58411" }}
            >
              {t('title')}
            </h2>
            <ul className="list-disc pl-5 mb-6">
              {product.benefits?.map((benefit, index) => (
                <li key={index} className="text-gray-700">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h2
            className="text-xl font-semibold mb-2"
            style={{ color: "#E58411" }}
          >
            {t('technical')}
          </h2>
          <table className="w-full mb-6 border">
            <tbody>
              {product.technicalCharacteristics &&
                Object.entries(product.technicalCharacteristics).map(
                  ([key, value]) => (
                    <tr key={key} className="border-t">
                      <td className="px-4 py-2 font-medium text-gray-700">
                        {key}
                      </td>
                      <td className="px-4 py-2 text-gray-700">{value}</td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
 
          {product.attachments && (
            <div className="mt-6">
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: "#E58411" }}
              >
                {t('attach')}
              </h2>
              <ul>
                {product.attachments.map((attachment, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center mb-4"
                  >
                    <span className="text-gray-700">{attachment.name}</span>
                    <a
                      href={attachment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-mar transition"
                    >
                      {t('btn')}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
 
        <div className="mt-16">
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: "#E58411" }}
          >
            {t('other')}
          </h2>

 
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {otherProducts.map((otherProduct) => (
              <Productcard
                key={otherProduct.id}
                id={otherProduct.id}
                imageUrl={otherProduct.imageUrl}
                title={otherProduct.title}
                description={otherProduct.description}
                className="w-full h-auto" 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
