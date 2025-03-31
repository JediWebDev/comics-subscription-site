import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>Gallery</h2>

        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          <a href='#' className='group'>
            <Image
              src='/image001.jpg'
              alt='gallery image'
              width={300}
              height={200}
              className='aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8'
            />
          </a>
          <a href='#' className='group'>
            <Image
              src='/image002.jpg'
              alt='gallery image'
              width={300}
              height={200}
              className='aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8'
            />
          </a>
          <a href='#' className='group'>
            <Image
              src='/image003.jpg'
              alt='gallery image'
              width={300}
              height={200}
              className='aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8'
            />
          </a>
          <a href='#' className='group'>
            <Image
              src='/image004.jpg'
              alt='gallery image'
              width={300}
              height={200}
              className='aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8'
            />
          </a>
        </div>
      </div>
    </div>
  );
}
