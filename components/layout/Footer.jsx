// import Image from 'next/image';
// import Link from 'next/link';
// import { Menu, X, Search, Globe } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="w-full bg-white">
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Top section with logo and social icons */}
//         <div className="mb-8">
//           <Image
//             src="/images/120.png"
//             alt="Salesforce"
//             width={40}
//             height={40}
//             className="mb-4"
//           />
//           <div className="flex gap-3 mb-4">
//             <Link href="#" aria-label="Facebook">
//               <div className="w-8 h-8 bg-[#666666] flex items-center justify-center rounded-sm hover:bg-[#4267B2] transition-colors">
//                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M9 8H6v4h3v12h5V12h3.6l.4-4h-4V6.3c0-1.1.2-1.3 1.2-1.3H18V0h-3.3C11.2 0 9 2.3 9 6.7V8z"/>
//                 </svg>
//               </div>
//             </Link>

//             <Link href="#" aria-label="X (Twitter)">
//               <div className="w-8 h-8 bg-[#666666] flex items-center justify-center rounded-sm hover:bg-black transition-colors">
//                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//                 </svg>
//               </div>
//             </Link>

//             <Link href="#" aria-label="LinkedIn">
//               <div className="w-8 h-8 bg-[#666666] flex items-center justify-center rounded-sm hover:bg-[#0077B5] transition-colors">
//                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                 </svg>
//               </div>
//             </Link>

//             <Link href="#" aria-label="Instagram">
//               <div className="w-8 h-8 bg-[#666666] flex items-center justify-center rounded-sm hover:bg-[#E4405F] transition-colors">
//                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
//                 </svg>
//               </div>
//             </Link>

//             <Link href="#" aria-label="YouTube">
//               <div className="w-8 h-8 bg-[#666666] flex items-center justify-center rounded-sm hover:bg-[#FF0000] transition-colors">
//                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
//                 </svg>
//               </div>
//             </Link>
//           </div>
//           </div>

//         {/* Main footer content */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           {/* New to Salesforce? */}
//           <div>
//             <h3 className="text-gray-800 font-semibold mb-4">New to Salesforce?</h3>
//             <ul className="space-y-3">
//               <li><Link href="#" className="text-blue-600 hover:underline">Why Salesforce</Link></li>
//               <li><Link href="#" className="text-blue-600 hover:underline">What is CRM?</Link></li>
//               <li><Link href="#" className="text-blue-600 hover:underline">Explore All Products</Link></li>
//               <li><Link href="#" className="text-blue-600 hover:underline">SaaS</Link></li>
//               <li><Link href="#" className="text-blue-600 hover:underline">Customer Success</Link></li>
//               <li><Link href="#" className="text-blue-600 hover:underline">Product Pricing</Link></li>
//             </ul>
//           </div>

//           {/* About Salesforce */}
//           <div>
//             <h3 className="text-gray-800 font-semibold mb-4">About Salesforce</h3>
//             <ul className="space-y-3">
//               <li><Link href="#" className="text-blue-600 hover:underline">Our Story</Link></li>
//               <li><Link href="#" className="text-blue-600 hover:underline">Careers</Link></li>
//               <li><Link href="#" className="text-blue-600 hover:underline flex items-center">
//                 Press
//                 <Image src="/images/external-link.png" alt="" width={12} height={12} className="ml-1" />
//               </Link></li>
//               <li><Link href="#" className="text-blue-600 hover:underline flex items-center">
//                 Blog
//                 <Image src="/images/external-link.png" alt="" width={12} height={12} className="ml-1" />
//               </Link></li>
//               <li><Link href="#" className="text-blue-600 hover:underline flex items-center">
//                 Security and Performance
//                 <Image src="/images/external-link.png" alt="" width={12} height={12} className="ml-1" />
//               </Link></li>
//               <li><Link href="#" className="text-blue-600 hover:underline">Best CRM Software</Link></li>
//               <li><Link href="#" className="text-blue-600 hover:underline flex items-center">
//                 Sustainability
//                 <Image src="/images/external-link.png" alt="" width={12} height={12} className="ml-1" />
//               </Link></li>
//               <li><Link href="#" className="text-blue-600 hover:underline flex items-center">
//                 Legal
//                 <Image src="/images/external-link.png" alt="" width={12} height={12} className="ml-1" />
//               </Link></li>
//               <li><Link href="#" className="text-blue-600 hover:underline">Give us your Feedback</Link></li>
//             </ul>
//           </div>

//           {/* Popular Links */}
//           <div>
//             <h3 className="text-gray-800 font-semibold mb-4">Popular Links</h3>
//             <ul className="space-y-3">
//               <li><Link href="#" className="text-blue-600 hover:underline flex items-center">
//                 New Release Features
//                 <Image src="/images/external-link.png" alt="" width={12} height={12} className="ml-1" />
//               </Link></li>
//               <li><Link href="#" className="text-blue-600 hover:underline">Salesforce Mobile App</Link></li>
//               <li><Link href="#" className="text-blue-600 hover:underline flex items-center">
//                 Business App Store
//                 <Image src="/images/external-link.png" alt="" width={12} height={12} className="ml-1" />
//               </Link></li>
//               <li><Link href="#" className="text-blue-600 hover:underline flex items-center">
//                 Dreamforce
//                 <Image src="/images/external-link.png" alt="" width={12} height={12} className="ml-1" />
//               </Link></li>
//               <li><Link href="#" className="text-blue-600 hover:underline">CRM Software</Link></li>
//               <li><Link href="#" className="text-blue-600 hover:underline flex items-center">
//                 Salesforce Plus
//                 <Image src="/images/external-link.png" alt="" width={12} height={12} className="ml-1" />
//               </Link></li>
//               <li><Link href="#" className="text-blue-600 hover:underline flex items-center">
//                 Salesforce for startups
//                 <Image src="/images/external-link.png" alt="" width={12} height={12} className="ml-1" />
//               </Link></li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="bg-[#032D60] text-white py-4">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex flex-wrap items-center justify-between">
//             <div className="flex items-center space-x-2">

// {/*
//               <Image
//                 // src="/images/globe-icon.png"
//                 alt="Worldwide"
//                 width={24}
//                 height={24}
//               /> */}
//                 <button
//                 className="text-white hover:text-white"
//                 aria-label="Select Region"
//               >
//                 <Globe className="h-5 w-5" />
//               </button>

//               <span>Worldwide</span>
//             </div>
//             <div className="flex flex-wrap items-center gap-4 text-sm">
//               <Link href="#" className="hover:underline">Legal</Link>
//               <Link href="#" className="hover:underline">Terms of Service</Link>
//               <Link href="#" className="hover:underline">Privacy</Link>
//               <Link href="#" className="hover:underline">Responsible Disclosure</Link>
//               <Link href="#" className="hover:underline">Trust</Link>
//               <Link href="#" className="hover:underline">Contact</Link>
//               <Link href="#" className="hover:underline">Cookie Preferences</Link>
//               <Link href="#" className="hover:underline">Your Privacy Choices</Link>
//             </div>
//           </div>
//           <div className="mt-4 text-sm">
//             © Copyright 2025 Salesforce, Inc.
//             <Link href="#" className="underline ml-1">All rights reserved</Link>
//             . Various trademarks held by their respective owners.
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Menu, X, Search, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main content with logo, social icons, and columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First column with logo and social icons */}
          <div className="space-y-6">
            <Image
              src="/images/120.png"
              alt="Salesforce"
              width={40}
              height={40}
              className="mb-6"
            />
            <div className="flex flex-col space-y-4">
              <div className="flex flex-wrap gap-4">
                <Link href="#" aria-label="Facebook">
                  <div className="w-8 h-8 bg-gray-600 flex items-center justify-center rounded hover:bg-[#4267B2] transition-colors">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8H6v4h3v12h5V12h3.6l.4-4h-4V6.3c0-1.1.2-1.3 1.2-1.3H18V0h-3.3C11.2 0 9 2.3 9 6.7V8z" />
                    </svg>
                  </div>
                </Link>
                <Link href="#" aria-label="X (Twitter)">
                  <div className="w-8 h-8 bg-gray-600 flex items-center justify-center rounded hover:bg-black transition-colors">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <div className="w-8 h-8 bg-gray-600 flex items-center justify-center rounded hover:bg-[#0077B5] transition-colors">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                </Link>
                <Link href="#" aria-label="Instagram">
                  <div className="w-8 h-8 bg-gray-600 flex items-center justify-center rounded hover:bg-[#E4405F] transition-colors">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </div>
                </Link>
                <Link href="#" aria-label="YouTube">
                  <div className="w-8 h-8 bg-gray-600 flex items-center justify-center rounded hover:bg-[#FF0000] transition-colors">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="text-gray-600">Call us at 1800-420-7332</div>
            </div>
          </div>
          {/* New to Salesforce section */}
          <div className="space-y-6">
            <h3 className="text-gray-800 font-semibold">New to Salesforce?</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Why Salesforce
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  What is CRM?
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Explore All Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  SaaS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Customer Success
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Product Pricing
                </Link>
              </li>
            </ul>
          </div>
          {/* About Salesforce */}
          <div className="space-y-6">
            <h3 className="text-gray-800 font-semibold">About Salesforce</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  Press
                  <Image
                    src="/images/external-link.png"
                    alt=""
                    width={12}
                    height={12}
                    className="ml-1"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  Blog
                  <Image
                    src="/images/external-link.png"
                    alt=""
                    width={12}
                    height={12}
                    className="ml-1"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  Security and Performance
                  <Image
                    src="/images/external-link.png"
                    alt=""
                    width={12}
                    height={12}
                    className="ml-1"
                  />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Best CRM Software
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  Sustainability
                  <Image
                    src="/images/external-link.png"
                    alt=""
                    width={12}
                    height={12}
                    className="ml-1"
                  />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Give us your Feedback
                </Link>
              </li>
            </ul>
          </div>
          {/* Popular Links */}
          <div className="space-y-6">
            <h3 className="text-gray-800 font-semibold">Popular Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  New Release Features
                  <Image
                    src="/images/external-link.png"
                    alt=""
                    width={12}
                    height={12}
                    className="ml-1"
                  />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Salesforce Mobile App
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  Business App Store
                  <Image
                    src="/images/external-link.png"
                    alt=""
                    width={12}
                    height={12}
                    className="ml-1"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  Dreamforce
                  <Image
                    src="/images/external-link.png"
                    alt=""
                    width={12}
                    height={12}
                    className="ml-1"
                  />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  CRM Software
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  Salesforce Plus
                  <Image
                    src="/images/external-link.png"
                    alt=""
                    width={12}
                    height={12}
                    className="ml-1"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  Salesforce for startups
                  <Image
                    src="/images/external-link.png"
                    alt=""
                    width={12}
                    height={12}
                    className="ml-1"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    {/* Bottom Bar */}
<div className="bg-[#032D60] text-white py-4 md:py-6">
  <div className="max-w-7xl mx-auto px-4">
    {/* Worldwide and Links Container */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6 md:mb-4">
      {/* Worldwide Selector */}
      <div className="flex items-center space-x-2">
        <button
          className="text-white hover:text-white"
          aria-label="Select Region"
        >
          <Globe className="h-5 w-5" />
        </button>
        <span className="text-sm">Worldwide</span>
      </div>

      {/* Legal Links */}
      <div className="flex flex-wrap gap-y-3 gap-x-4 text-sm">
        <Link href="#" className="hover:underline whitespace-nowrap">
          Legal
        </Link>
        <Link href="#" className="hover:underline whitespace-nowrap">
          Terms of Service
        </Link>
        <Link href="#" className="hover:underline whitespace-nowrap">
          Privacy
        </Link>
        <Link href="#" className="hover:underline whitespace-nowrap">
          Responsible Disclosure
        </Link>
        <Link href="#" className="hover:underline whitespace-nowrap">
          Trust
        </Link>
        <Link href="#" className="hover:underline whitespace-nowrap">
          Contact
        </Link>
        <Link href="#" className="hover:underline whitespace-nowrap">
          Cookie Preferences
        </Link>
        <Link href="#" className="hover:underline whitespace-nowrap">
          Your Privacy Choices
        </Link>
      </div>
    </div>

    {/* Copyright Text */}
    <div className="text-sm border-t border-white/10 pt-4 md:pt-0 md:border-0">
      © Copyright 2025 Salesforce, Inc.
      <Link href="#" className="underline ml-1 hover:text-white/90">
        All rights reserved
      </Link>
      . Various trademarks held by their respective owners.
    </div>
  </div>
</div>
    </footer>
  );
};
``;
export default Footer;
