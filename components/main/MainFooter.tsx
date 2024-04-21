import Link from "next/link";

export default function MainFooter(){
    return(
        <div className="flex flex-col items-center bg-[#232127] bg-image-[url('/header-bg-white-pink.jpg')] py-16 space-y-14 md:space-y-0 md:flex-row md:justify-between md:px-10">
        <Link href="/" className="text-white text-2xl font-jule bg-pink-900 px-4 py-1 bg-opacity-20 rounded border hover:bg-pink-800">NEXTLEVEL FOOD</Link>
        <div className="flex flex-col space-y-14 md:flex-row md:space-x-16 md:space-y-0">
          <div className="flex flex-col space-y-3 text-center font-semibold text-gray-500">
            <h3 className="text-white text-xl">Features</h3>
            <a className="hover:text-pink-300" href="#">
              Meal sharing
            </a>
            <a className="hover:text-pink-300" href="#">
              Meal discovery
            </a>
            <a className="hover:text-pink-300" href="#">
              Analytics
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-center font-semibold text-gray-500">
            <h3 className="text-white text-xl">Resources</h3>
            <a className="hover:text-pink-300" href="#">
              Blog
            </a>
            <a className="hover:text-pink-300" href="#">
              Developers
            </a>
            <a className="hover:text-pink-300" href="#">
              Support
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-center font-semibold text-gray-500">
            <h3 className="text-white text-xl">Company</h3>
            <a className="hover:text-pink-300" href="#">
              About
            </a>
            <a className="hover:text-pink-300" href="#">
              Our Team
            </a>
            <a className="hover:text-pink-300" href="#">
              Careers
            </a>
            <a className="hover:text-pink-300" href="#">
              Contact
            </a>
          </div>
        </div>
        <div className=" flex  space-x-7">
          <a href="#">
            <img src="/icons/icon-facebook.svg" className="" alt="" />
          </a>
          <a href="#">
            <img src="/icons/icon-twitter.svg" alt="" />
          </a>
          <a href="#">
            <img src="/icons/icon-pinterest.svg" alt="" />
          </a>
          <a href="#">
            <img src="/icons/icon-instagram.svg" alt="" />
          </a>
        </div>
      </div>
    )
}