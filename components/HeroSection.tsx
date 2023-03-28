import Image from 'next/image';
import { H1 } from '@/components/shared/typography';
import travel from '@/public/travel.svg';
import { A } from './motion/A';
import { Div } from './motion/Div';

export const HeroSection = () => {
  return (
    <section className="">
      <div className="mx-auto grid max-w-screen-xl py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <H1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-slate-800 md:text-5xl xl:text-6xl">
            Discover the world. Plan your trip today.
          </H1>
          <p className="mb-6 max-w-2xl font-light text-slate-600 md:text-lg lg:mb-8 lg:text-xl">
            With the help of TripIt Assistant, discover new getaways and build
            your personalized itinerary in minutes.
          </p>
          <A
            href="/build"
            className="mr-3 inline-flex items-center justify-center rounded-md bg-slate-800 px-4 py-3 text-center text-base font-medium text-white focus:ring-4"
            whileHover={{ scale: 1.05 }}
          >
            Get started
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </A>
        </div>
        <Div
          className="hidden lg:col-span-5 lg:mt-0 lg:flex"
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <Image src={travel} alt="mockup" width={500} height={400} />
        </Div>
      </div>
    </section>
  );
};
