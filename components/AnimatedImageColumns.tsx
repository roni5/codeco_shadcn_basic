import React from 'react'

const AnimatedImageColumns = () => {
  // 4 different images - one per column (each image already contains 4 stacked squares)
  const columnImages = [
    '/img/strip-1 .png', // Column 1 image
    '/img/strip-2.png', // Column 2 image
    '/img/strip-3.png', // Column 3 image
    '/img/strip-6.png', // Column 4 image
  ]

  return (
    <div className="relative w-1/2 box-border">
      <style jsx>{`
        @keyframes scrollUp {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }

        @keyframes scrollDown {
          from {
            transform: translateY(-50%);
          }
          to {
            transform: translateY(0);
          }
        }

        .animate-scroll-up {
          animation: scrollUp 2s ease-in-out forwards;
        }

        .animate-scroll-down {
          animation: scrollDown 2s ease-in-out forwards;
        }
      `}</style>

      <div className="absolute top-0 right-0 flex max-h-[275px] overflow-hidden gap-2 pr-2.5">
        {columnImages.map((image, colIndex) => (
          <ul
            key={colIndex}
            className={`flex flex-col gap-2 list-none m-0 p-0 ${
              colIndex % 2 === 0 ? 'animate-scroll-up' : 'animate-scroll-down'
            }`}
          >
            {/* Duplicate the single image for seamless loop effect */}
            <li>
              <img src={image} alt="" className="block w-full h-auto" />
            </li>
            <li>
              <img src={image} alt="" className="block w-full h-auto" />
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default AnimatedImageColumns
// import React from 'react'

// const AnimatedImageColumns = () => {
//   // Sample images - replace with your actual image paths
//   const columnImages = [
//     '/img/strip-1.png',
//     '/img/strip-2.png',
//     'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop',
//     'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=200&h=200&fit=crop',
//   ]

//   // 4 columns, each with 4 images
//   const columns = [columnImages, columnImages, columnImages, columnImages]

//   return (
//     <div className="relative w-1/2 box-border">
//       <style jsx>{`
//         @keyframes scrollUp {
//           from {
//             transform: translateY(0);
//           }
//           to {
//             transform: translateY(-50%);
//           }
//         }

//         @keyframes scrollDown {
//           from {
//             transform: translateY(-50%);
//           }
//           to {
//             transform: translateY(0);
//           }
//         }

//         .animate-scroll-up {
//           animation: scrollUp 2s ease-in-out forwards;
//         }

//         .animate-scroll-down {
//           animation: scrollDown 2s ease-in-out forwards;
//         }
//       `}</style>

//       <div className="absolute top-0 right-0 flex max-h-[275px] overflow-hidden gap-2 pr-2.5">
//         {columns.map((column, colIndex) => (
//           <ul
//             key={colIndex}
//             className={`flex flex-col gap-2 list-none m-0 p-0 ${
//               colIndex % 2 === 0 ? 'animate-scroll-up' : 'animate-scroll-down'
//             }`}
//           >
//             {/* Duplicate images for seamless loop effect */}
//             {[...column, ...column].map((img, imgIndex) => (
//               <li key={imgIndex}>
//                 <img src={img} alt="" className="block w-full h-auto" />
//               </li>
//             ))}
//           </ul>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default AnimatedImageColumns
// //     '/assets/frontend/syi_desktop_1.c315cf88c7964f17b9f5972e70b30a99.png',
// const AnimatedImageColumns = () => {
//   // Sample images - replace with your actual image paths
//   const images = [
//     '/img/strip-6.png',
//     '/img/strip-4.png',
//     '/img/strip-4.png',
//     '/img/strip-1.png',
//   ]

//   // 4 columns, each with 4 images
//   const columns = [
//     images.slice(0, 4),
//     images.slice(0, 4),
//     images.slice(0, 4),
//     images.slice(0, 4),
//   ]

//   return (
//     <div className="relative w-1/2 box-border">
//       <style jsx>{`
//         @keyframes scrollUp {
//           from {
//             transform: translateY(0);
//           }
//           to {
//             transform: translateY(-50%);
//           }
//         }

//         @keyframes scrollDown {
//           from {
//             transform: translateY(-50%);
//           }
//           to {
//             transform: translateY(0);
//           }
//         }

//         .animate-scroll-up {
//           animation: scrollUp 2s ease-in-out forwards;
//         }

//         .animate-scroll-down {
//           animation: scrollDown 2s ease-in-out forwards;
//         }
//       `}</style>

//       <div className="absolute top-0 right-0 flex max-h-[275px] overflow-hidden gap-2 pr-2.5">
//         {columns.map((column, colIndex) => (
//           <ul
//             key={colIndex}
//             className={`flex flex-col gap-2 list-none m-0 p-0 ${
//               colIndex % 2 === 0 ? 'animate-scroll-up' : 'animate-scroll-down'
//             }`}
//           >
//             {/* Duplicate images for seamless loop effect */}
//             {[...column, ...column].map((img, imgIndex) => (
//               <li key={imgIndex}>
//                 <img src={img} alt="" className="block w-full h-auto" />
//               </li>
//             ))}
//           </ul>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default AnimatedImageColumns
