import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="hero-map">
          <Image 
            src="/911targa.webp" 
            alt="Quoting Tool Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">Quoting Tool</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            Search for car parts tailored to your specific needs. The Quoting Tool allows you to quickly and accurately generate quotes for a wide range of car parts. 
            Enter the vehicle details and the required parts, and the tool will provide instant quotes!
        </p>

        <div className="my-11 flex flex-wrap gap-5">
            <div className="flex flex-col w-full gap-3 sm:flex-row">
                <Button 
                    type = "button"
                    title = "Get a Quote" 
                    variant="btn_red" 
                />
            </div>
        </div>
        
      </div>

        <div className="relative flex flex-1 items-start">
            <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

                <div className="flex flex-col">
                    <div className="flexBetween">
                        <p className="regular-16 text-gray-20">Car Model</p>
                        <Image src="/close.svg" alt="close" width={24} height={24} />
                    </div>
                    <p className="bold-20 text-white">911 Targa</p>
                </div>

                <div className="flexBetween">
                    <div className="flex flex-col">
                        <p className="regular-16 block text-gray-20">Part Type</p>
                        <p className="bold-20 text-white">Oil Filter</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="regular-16 block text-gray-20">Part Number</p>
                        <p className="bold-20 text-white">9A1107</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero