import Image from 'next/image'

const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

export default function GalleryPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <Image key={i} src={src} alt="Gallery" className="rounded-lg shadow-sm" />
        ))}
      </div>
    </div>
  );
}