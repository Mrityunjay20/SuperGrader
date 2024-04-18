export default function LandingHERO() {
  return (
    <>
      <section className="text-gray-600 body-font bg-gradient-to-r pt-14 from-gray-900 to-black">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-4xl mb-4 w-full uppercase  font-medium text-white">
              Tired of grading countless answer sheets?
            </h1>
            <p className="mb-8 w-2/3 mx-auto text-center leading-relaxed text-gray-400">
            Welcome to the future of grading.
             Say goodbye to tedious hours spent poring over stacks of answer sheets. 
             Our cutting-edge AI tool is here to streamline your grading process like never before.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Explore
              </button>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
