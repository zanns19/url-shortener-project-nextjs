import Image from "next/image";
import Link  from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <div className="grid grid-cols-2 h-[51vh]">
            <div className="content flex flex-col bg-pink-200 justify-center items-center">
              <h1 className="font-bold text-5xl ">Your Url Shortener is Here</h1>
              <p className="px-36 text-xl text-center my-3">
                We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
              </p>
              <div className="flex gap-5"><Link href='/shorten'><button className='p-3 cursor-pointer rounded-xl bg-purple-300' >Try Now</button></Link>
                <Link href='/github'><button className='p-3 cursor-pointer rounded-xl bg-purple-300' >Github</button></Link>
              </div>
            </div>
            <div className="imag relative">
              <Image className="mix-blend-darken" alt="corporate-Image" src={"/images.jpg"} fill={true}/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
