import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col max-w-[1920px] mx-auto xl:px-[365px] md:px-10 sm:px-2 px-4 min-h-full'>

      {/* ОПИСАНИЕ И СЛОГАН */}

      <div className="flex flex-row items-center justify-between gap-3 md:gap-0 mt-[88px]">
        <Image
          alt="Five"
          className="hidden md:block z-20"
          height="650"
          width="650"
          src="/images/DrawKit.png"
        />

        <div className='grid ml-[19px]'>
          <p className='text-[64px] font-bold tracking-wider'>PHARMADVICE</p>
          
          <h1 className='font-semibold text-[22px] antialiased tracking-[0.11rem]'>Упрощаем взаимодействие с аптекой</h1>

          <h1 className='font-semibold text-base mt-7 tracking-[0.075rem]'>Сервис для <a className='text-pink-dark'>онлайн-консультаций</a> с фармацевтом и хранения <a className='text-pink-dark'>электронных рецептов</a>.</h1>

          <h2 className='text-sm font-medium font-["Lato"] mt-[34px] tracking-[0.02em]'>Проводите конференции и онлайн-чаты по любым вопросам с лучшим фармацевтом вашего города! Сохраняйте выписанные электронные рецепты, сравнивайте цены и смотрите их наличие в ближайших аптеках.</h2>

          <button className='font-extrabold font-["Lato"] text-base mt-6 bg-pink-dark rounded-[10px] text-white p-3 m-auto tracking-wider hover:bg-pink-darkLight transition duration-300'>Узнать больше!</button>
        </div>
      </div>

      {/* КАКОЕ РЕШЕНИЕ МЫ ПРЕДЛАГАЕМ */}

      <div className='flex flex-col'>
        <p className='font-bold text-[32px] text-gray-dark tracking-widest antialiased mt-10 z-30 '>Какое решение мы предлагаем</p>

          <div className='flex flex-row'>
            <div className='bg-blue-light opacity-50 h-[350px] w-[320px] mt-12 z-40 rounded-[30px] p-4 mr-[115px]'>
                <p className='text-white mr-3.5 ml-3.5 text-center mt-12 pb-7'>Для людей всех возрастов наш сервис предоставляет возможность хранения электронных рецептов в личном кабинете и поиск лекарств в ближайших аптеках вашего города по доступным ценам.</p>
                <img src="/images/arrowcircler.svg" alt="стрелка" className='m-auto '/>
            </div>

            <div className='bg-[#0C4DCB] opacity-50 h-[350px] w-[320px] mt-12 z-50 rounded-[30px] p-4 mr-[115px]'>
                <p className='text-white mr-3.5 ml-3.5 text-center mt-12 pb-7'>В случае покупки лекарств для близких или пожилых людей, которые не могут самостоятельно посетить аптеку, пользователи также смогут получить помощь в выборе и поиске необходимых лекарств. </p>
                <img src="/images/arrowcircler.svg" alt="стрелка" className='m-auto '/>
            </div>

            <div className='bg-[#F06D57] opacity-50 h-[350px] w-[320px] mt-12 z-60 rounded-[30px] p-4'>
                <p className='text-white mr-3.5 ml-3.5 text-center mt-12 pb-7'>В соответствии с выписанными лекарствами в рецепте, на картах будут указаны точки сеть аптек и отображать наименование препарата, цену и производителя.</p>
                <img src="/images/arrowcircleright2.svg" alt="стрелка" className='m-auto pt-5'/>
            </div>
          </div>
      </div>

      {/* КАК ЭТО РАБОТАЕТ */}

      <div className='flex flex-col'>
        <p className='font-bold text-[32px] tracking-widest antialiased mt-[48px] text-gray-dark'>Как это работает?</p>

        <div className='flex flex-row'>

          <div className='flex flex-col'>

            <div className='flex mt-[114px] flex-col items-end w-[210px] h-[134px] mb-[48px]'>
                <span className='font-light text-3xl text-gray-dark tracking-wide'>02</span>
                <span className='text-[20px] font-semibold text-pink tracking-wide'>Загрузить рецепт</span>
                <p className='font-["Lato"] text-[13px] text-[#555555] tracking-wide text-right'>Загружайте и управляйте электронными рецептами через личный профиль.</p>
            </div>

            <div className='flex mt-[106px] flex-col items-end w-[210px] h-[134px]'>
              <span className='font-light text-3xl text-gray-dark tracking-wide'>04</span>
              <span className='text-[20px] font-semibold text-pink tracking-wide'>Конференция</span>
              <p className='font-["Lato"] text-[13px] text-[#555555] tracking-wide text-right'>Начните видео- или чат-консультацию с фармацевтом, чтобы обсудить вопросы или проблемы, связанные с лекарствами.</p>
            </div>

          </div>

            <Image
              alt="road"
              className="hidden md:block mt-4 ml-4 mr-4"
              height="560"
              width="36"
              src="/images/road.svg"
            />

            <div className='flex flex-col'>

              <div className='flex mt-4 flex-col w-[290px] h-[118px] mb-[116px]'>
                <span className='font-light text-3xl text-gray-dark tracking-wide'>01</span>
                <span className='text-[20px] font-semibold text-pink tracking-wide'>Регистрация\авторизация</span>
                <p className='font-["Lato"] text-[13px] text-[#555555] tracking-wide'>Войдите в систему, чтобы получить доступ к личному профилю пользователя.</p>
              </div>
              
              <div className='flex mt-1 flex-col w-[288px] h-[139px]'>
                <span className='font-light text-3xl text-gray-dark tracking-wide'>03</span>
                <span className='text-[20px] font-semibold text-pink tracking-wide'>Поиск по карте</span>
                <p className='font-["Lato"] text-[13px] text-[#555555] tracking-wide'>Найдите ближайшие к Вам аптеки, в которых есть прописанные лекарства.</p>
              </div>
              
            </div>
            
            <Image
              alt="cool"
              className="hidden md:block"
              height="589"
              width="589"
              src="/images/DrawKit_2.svg"
            />

          </div>

      </div>

      {/* НАША КОМАНДА */}

      <div className='flex flex-col'>

        <span className='m-auto font-bold text-[32px] tracking-widest text-gray-dark antialiased'>Наша команда</span>

        <div className='flex flex-row m-auto'>

          <div className='flex flex-col mt-[38px] mr-[58px]'>
            <Image
              alt='mentor'
              className='flex m-auto'
              height='120'
              width='120'
              src='/images/Mentor.svg'
            />
            <p className='text-lg font-semibold tracking-widest text-gray-dark m-auto'>Сизоненко Анастасия</p>
            <p className='font-["Lato"] text-base font-medium tracking-wide text-[#646464] m-auto'>Ментор</p>
          </div>

          <div className='flex flex-col mt-[38px]'>
            <Image
              alt='teamlid'
              className='flex m-auto'
              height='120'
              width='120'
              src='/images/Teamlid.svg'
            />
            <p className='text-lg font-semibold tracking-widest text-gray-dark m-auto'>Бессарабенко Мария</p>
            <p className='font-["Lato"] text-base font-medium tracking-wide text-[#646464] m-auto'>Тимлид, fullstack-разработчик</p>
          </div>

        </div>

        <div className='flex flex-row m-auto'>

          <div className='flex flex-col mt-[38px] mr-[58px]'>
              <Image
                alt='anal'
                className='flex m-auto'
                height='120'
                width='120'
                src='/images/Anal.svg'
              />
              <p className='text-lg font-semibold tracking-widest text-gray-dark m-auto'>Умерова Аминна</p>
              <p className='font-["Lato"] text-base font-medium tracking-wide text-[#646464] m-auto'>Аналитик, дизайнер</p>
            </div>

            <div className='flex flex-col mt-[38px] mr-[58px]'>
              <Image
                alt='ui-ux'
                className='flex m-auto'
                height='120'
                width='120'
                src='/images/UIux.svg'
              />
              <p className='text-lg font-semibold tracking-widest text-gray-dark m-auto'>Новинкина Анастасия</p>
              <p className='font-["Lato"] text-base font-medium tracking-wide text-[#646464] m-auto'>Frontend разработчик, UI/UX</p>
            </div>

            <div className='flex flex-col mt-[38px]'>
              <Image
                alt='verst'
                className='flex m-auto'
                height='120'
                width='120'
                src='/images/Verst.svg'
              />
              <p className='text-lg font-semibold tracking-widest text-gray-dark m-auto'>Азаматова Диана</p>
              <p className='font-["Lato"] text-base font-medium tracking-wide text-[#646464] m-auto'>Верстальщик, аналитик</p>
            </div>

          </div>
        
      </div>
     
    </div>
  );
}
