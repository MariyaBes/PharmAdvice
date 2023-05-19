import Image from 'next/image'
import Link from 'next/link';
import Block from './components/lending/block';

export default function Home() {
  return (
    <div className='fixed flex-col max-w-[1920px] mx-auto xl:px-[365px] md:px-10 sm:px-2 px-4 mt-[88px] min-h-full'>
      <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
        <Image
          alt="Five"
          className="hidden md:block z-20"
          height="650"
          width="650"
          src="/images/DrawKit.png"
        />

        <div className='grid ml-[19px]'>
          <Link href={'/reg'}>
            <p className='text-[64px] font-bold tracking-wider'>PHARMADVICE</p>
          </Link>
          
          <h1 className='font-semibold text-[22px] antialiased tracking-[0.11rem]'>Упрощаем взаимодействие с аптекой</h1>

          <h1 className='font-semibold text-base mt-7 tracking-[0.075rem]'>Сервис для <a className='text-pink-dark'>онлайн-консультаций</a> с фармацевтом и хранения <a className='text-pink-dark'>электронных рецептов</a>.</h1>

          <h2 className='text-sm font-medium font-["Lato"] mt-[34px] tracking-[0.02em]'>Проводите конференции и онлайн-чаты по любым вопросам с лучшим фармацевтом вашего города! Сохраняйте выписанные электронные рецепты, сравнивайте цены и смотрите их наличие в ближайших аптеках.</h2>

          <button className='font-extrabold font-["Lato"] text-base mt-6 bg-pink-dark rounded-[10px] text-white p-3 m-auto tracking-wider hover:bg-pink-darkLight transition duration-300'>Узнать больше!</button>
        </div>
      </div>

      <Block/>
     
    </div>
  );
}
