export default function Home() {
  return (
    <div className="container mx-auto"> 
       <div className="relative grid h-[178px] w-full max-w-[300px] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('http://localhost:3000/nobik.webp')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative p-6 py-14 px-6 md:px-12">
          <h5 className="mb-6 block font-sans font-medium tracking-normal text-white antialiased">
            Сокровища нубика
          </h5>
        </div>
      </div>
    </div>
  )
}
