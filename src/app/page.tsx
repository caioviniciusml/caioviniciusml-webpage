import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="py-5 sm:py-10 lg:py-20 grid grid-cols-1 gap-20 lg:gap-40">
      <div className="flex flex-col md:flex-row  items-center gap-10">
        <div className="md:w-3/5 grid grid-cols-1 gap-5 lg:gap-10">
          <p className="text-grayprimary text-3xl sm:text-4xl lg:text-6xl xl:text-7xl">
            <b className="text-white">A FullStack Software Engineer</b> building modern web applications
          </p>
          <div className="flex gap-2 sm:gap-5 text-xs sm:text-base font-medium">
            <a className="py-2 px-4 lg:py-3 lg:px-6 flex items-center gap-1 sm:gap-2 text-center text-grayprimary border border-current hover:text-black hover:bg-white hover:border-white rounded-3xl" href={"/Resume - Caio Vinicius.pdf"} download>
              Download my Resume
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="stroke-current" d="M16.5 11.5V14.8333C16.5 15.2754 16.3244 15.6993 16.0118 16.0118C15.6993 16.3244 15.2754 16.5 14.8333 16.5H3.16667C2.72464 16.5 2.30072 16.3244 1.98816 16.0118C1.67559 15.6993 1.5 15.2754 1.5 14.8333V11.5M4.83333 7.33333L9 11.5M9 11.5L13.1667 7.33333M9 11.5V1.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <Link className="py-1 px-2 sm:py-2 sm:px-4 flex items-center text-grayprimary border border-current hover:text-black hover:bg-white hover:border-white rounded-full" href={"https://www.linkedin.com/in/caioviniciusml/"} target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current" fillRule="evenodd" clipRule="evenodd" d="M5.46112 23.4478V7.99946H0.326953V23.4478H5.46112V23.4478ZM2.89458 5.89103C4.68441 5.89103 5.79933 4.70378 5.79933 3.22136C5.76548 1.70598 4.68441 0.552246 2.92814 0.552246C1.17159 0.552293 0.0234375 1.70603 0.0234375 3.2214C0.0234375 4.70382 1.13775 5.89107 2.86078 5.89107L2.89458 5.89103ZM8.30269 23.4478C8.30269 23.4478 8.37005 9.44893 8.30269 7.99951H13.4377V10.2399H13.4036C14.0788 9.18564 15.2952 7.63675 18.0648 7.63675C21.4438 7.63675 23.9765 9.8447 23.9765 14.5899V23.4479H18.8424V15.1834C18.8424 13.1068 18.0995 11.6898 16.241 11.6898C14.8228 11.6898 13.9777 12.6451 13.6065 13.5685C13.4707 13.8972 13.4377 14.3589 13.4377 14.8206V23.4478H8.30269Z" />
              </svg>
            </Link>
            <Link className="py-1 px-2 sm:py-2 sm:px-4 flex items-center text-grayprimary border border-current hover:text-black hover:bg-white hover:border-white rounded-full" href={"https://github.com/caioviniciusml"} target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current" fillRule="evenodd" clipRule="evenodd" d="M12 0C18.6276 0 24 5.508 24 12.3036C24 17.7384 20.5656 22.3488 15.8004 23.9772C15.192 24.0984 14.976 23.7144 14.976 23.3868C14.976 22.9812 14.9904 21.6564 14.9904 20.01C14.9904 18.8628 14.6064 18.114 14.1756 17.7324C16.848 17.4276 19.656 16.3872 19.656 11.6616C19.656 10.3176 19.1904 9.2208 18.42 8.3592C18.5448 8.0484 18.9564 6.7968 18.3024 5.1024C18.3024 5.1024 17.2968 4.7724 15.006 6.3636C14.0272 6.09079 13.0161 5.95153 12 5.9496C10.9847 5.95143 9.97433 6.0907 8.9964 6.3636C6.7032 4.7724 5.6952 5.1024 5.6952 5.1024C5.0436 6.7968 5.4552 8.0484 5.5788 8.3592C4.812 9.2208 4.3428 10.3176 4.3428 11.6616C4.3428 16.3752 7.1448 17.4312 9.81 17.742C9.4668 18.0492 9.156 18.5916 9.048 19.3872C8.364 19.7016 6.6264 20.2452 5.556 18.3648C5.556 18.3648 4.9212 17.1828 3.7164 17.0964C3.7164 17.0964 2.5464 17.0808 3.6348 17.844C3.6348 17.844 4.4208 18.222 4.9668 19.644C4.9668 19.644 5.6712 21.84 9.0096 21.096C9.0156 22.1244 9.0264 23.094 9.0264 23.3868C9.0264 23.712 8.8056 24.0924 8.2068 23.9784C3.438 22.3524 0 17.7396 0 12.3036C0 5.508 5.3736 0 12 0Z" />
              </svg>
            </Link>
          </div>
        </div>
        <Image
          className="max-w-96 w-full md:max-w-none md:w-2/5"
          src={"/cube.png"}
          width={462}
          height={482}
          alt="Abstract Cube Image">
        </Image>
      </div>
      <div className="flex justify-center text-center text-lg sm:text-xl md:text-2xl lg:text-4xl">
        <p className="md:w-3/4 text-transparent bg-gradient-to-r to-80% from-[#1E1E22] to-white bg-clip-text">Building high-performance web experiences that are both visually stunning and strategically optimized. No more trade-offs—let’s create solutions that engage users and drive results! </p>
      </div>
    </main>
  );
}
