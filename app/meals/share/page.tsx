export default function SharePage() {
  return (
    <>
      <div className="flex flex-col items-center md:items-start text-white space-y-6 py-6 px-6 md:px-36">
        <h1 className="flex text-3xl font-bold justify-center md:justify-start md:text-5xl">
          Share your <p className="px-2 text-pink-700">favorite meal</p>
        </h1>
        <h2 className="text-center md:text-left text-lg md:text-2xl">
          Or any other meal you feel needs sharing!
        </h2>
      </div>
      <form className=" flex flex-col mt-10 px-6 md:px-0 space-y-4  md:pl-36 max-w-[900px]">
        <div className="flex space-x-4 ">
          <div className="flex flex-col w-full space-y-2">
            <label className="text-gray-400 font-semibold" htmlFor="name">
              YOUR NAME
            </label>
            <input className="input" type="text" id="name" name="name" />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <label className="text-gray-400 font-semibold" htmlFor="name">
              YOUR EMAIL
            </label>
            <input className="input" type="text" id="email" name="email" />
          </div>
        </div>
      </form>
    </>
  );
}
