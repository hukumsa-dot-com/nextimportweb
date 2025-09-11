'use client';

import Link from "next/link";
import Image from "next/image";

export default function SocialMediaButtons() {
  return (
    <div className="fixed right-8 bottom-24 flex flex-col space-y-4 z-50">
      {/* Facebook Button */}
      <Link
        href="https://www.facebook.com/profile.php?id=61580486762182" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Visit our Facebook page"
      >
        <Image 
          src="https://www.svgrepo.com/show/501561/facebook-boxed.svg" 
          alt="Facebook" 
          width={24} 
          height={24}
          className="invert"
        />
      </Link>

      {/* Instagram Button */}
      <Link
        href="https://www.instagram.com/Najmcommerical"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Visit our Instagram profile"
      >
        <Image 
          src="https://www.svgrepo.com/show/521711/instagram.svg" 
          alt="Instagram" 
          width={24} 
          height={24}
          className="invert"
        />
      </Link>

      {/* LinkedIn Button */}
      <Link
        href="https://linkedin.com/company/najmcommerical"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-700 hover:bg-blue-800 text-white shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Visit our LinkedIn page"
      >
        <Image 
          src="https://www.svgrepo.com/show/521725/linkedin.svg" 
          alt="LinkedIn" 
          width={24} 
          height={24}
          className="invert"
        />
      </Link>
    </div>
  );
}
