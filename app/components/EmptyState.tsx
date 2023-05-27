const EmptyState = () => {
    return (
        <div 
        className="
          px-4 
          py-10 
          sm:px-6 
          lg:px-8 
          lg:py-6 
          h-full 
          flex 
          
          justify-center 
          items-center 
          bg-[#f3f4f6]
        "
      >
        <div className="text-center items-center flex flex-col">
          <h3 className="mt-2 text-2xl font-semibold text-[##111827] font-['Lato']">
            Выберите чат с выбранным специалистом
          </h3>
        </div>
      </div>
    );
}

export default EmptyState;