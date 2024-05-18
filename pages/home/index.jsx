import './index.css'

function MainHome () {
  return (
    <>
      <Banner />
    </>
  );
}

export default MainHome;


function Buttons () {
  return(
    <div className="text-white flex flex-col gap-10 mb-[32%] sm:flex-row sm:mb-[10%]">
      <div className="p-5 rounded-md hover:bg-sky-300 bg-sky-400 text-xl font-bold"><h1>Call to Schedule</h1></div>
      <div className="p-5 rounded-md hover:bg-yellow-300 bg-yellow-400 text-xl font-bold"><h1>Check Our Rates</h1></div>
    </div>
  );
}

function Banner(){
  return(
    <div id="bannerSection" className=" flex flex-col justify-center md:justify-center lg:justify-between items-center gap-12 md:gap-20 lg:gap-20">
      <img src="/logo.png" alt="Grace's Driving School" className="max-sm:w-4/5 max-sm:mt-[25%] max-md:w-3/4 max-md:mt-[10%]  md:w-2/5 md:mt-[3%] lg:mt-[5%] lg:w-2/6 xl:w-1/4 xl:mt-[4%]" />
      <div className='flex flex-col justify-center items-center gap-5'>
        <h1 className='text-white font-bold text-xl md:text-4xl center shadow-lg manual-shadow'>Your #1 Choice For Driving Lessons</h1>

        <h1 className='text-white font-bold text-xl md:text-4xl center manual-shadow'>Learn To Drive With Patient Instructors</h1>
      </div>
      <Buttons />
    </div>
  );
}