import { productsData } from '../Productcard/productsData';
import Productcard from '../Productcard/Productcard';
import { useTranslations } from "next-intl";
import {Link} from '@/i18n/routing';

export default function Products(): JSX.Element {
    const t = useTranslations("homepage.products");
    return (
        <section className="py-12 px-6 bg-white sm:py-16 lg:py-20">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{t("title")}</h2>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
            {productsData.slice(0, 4).map((pro, index) => (
                    <Productcard
                        id={pro.id}
                        key={index}
                        imageUrl={pro.imageUrl}
                        title={pro.title}
                        description={pro.description}
                    />
                ))}
                </div>
                <div className='flex justify-center mt-20'>
                        <Link href="/somfy"  className={`px-8 py-4 text-lg font-semibold text-white bg-gray-600 rounded-full hover:bg-gray-400 transition-all duration-700`}>
                                 {t("btntext")}
                        </Link>
                </div>
      </section>
    );
}