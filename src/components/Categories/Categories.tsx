import Image, {StaticImageData} from 'next/image';
import pt1 from '../../../public/images/s7.jpg';
import pt2 from '../../../public/images/mm.jpg';
import pt3 from '../../../public/images/s5.jpeg';
import { useTranslations } from 'next-intl';



export function Categories() {
  const t = useTranslations('categoriesSection');
  return (
    <div className='container mx-auto'>
        <section className="max-h-[680px] sm:max-h-[480px] flex flex-col sm:flex-row gap-6 px-8 sm:px-36">
                <div className="relative overflow-hidden">
                    <Image src={pt1} alt="icon" className="transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer h-[390px] w-full sm:h-[550px] sm:w-[600px]" width={500} height={0} />
                    <Imagecontent txtcolor="text-white" title={t('title1')} desc={t('description1')} bottom="top-6" />
                </div>

                <div className=" w-full sm:w-1/2 flex flex-col gap-6">
                    <GridItem image={pt2} color="text-black" title={t('title2')} imagedesc={t('description2')}  />
                    <GridItem image={pt3} color="text-white	" title={t('title3')} imagedesc={t('description3')} />
                </div>
        </section>
    </div>
  );
}

interface LayoutProps {
  image: StaticImageData;
  title: string;
  imagedesc: string;
  color?: string;
}

interface ImagecontentProps {
  upper?: string;
  bottom?: string;
  txtcolor?: string;
  title: string;
  desc?: string;
}

function Imagecontent({ upper, title, bottom, txtcolor, desc }: ImagecontentProps): JSX.Element {
  return (
    <div className={`h-[75px] absolute ${bottom ? bottom : ''} ${upper ? upper : ''} left-4 sm:left-6 flex flex-col items-start gap-1`}>
      <div className="capitalize p-3 flex flex-col">
               <span className={`${txtcolor ? txtcolor+'' : 'text-white'} text-3xl font-extrabold hover:cursor-pointer`}>{title}</span>
               <span className={`${txtcolor ? txtcolor+'' : 'text-white'} text-base font-extrabold hover:cursor-pointer`}>{desc ? desc : ''}</span>
        </div>
    </div>
  );
}

function GridItem({ image, title, imagedesc, color }: LayoutProps): JSX.Element {
  return (
    <div className="h-[180px] sm:h-[280px] relative overflow-hidden">
      <Image 
      src={image} 
      alt="icon" 
      width={500}
      height={500}
      className="h-[180px] sm:h-[245px] transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer" />
      <Imagecontent title={title} txtcolor={color} desc={imagedesc} bottom="bottom-6" />
    </div>
  );
}
