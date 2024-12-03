import Image from 'next/image';

const CloudinaryImage = ({ src, alt, ...props }) => {
  const cloudinaryUrl = `https://res.cloudinary.com/ddgmsoaja/image/upload/${src}`;
  
  return (
    <Image
      {...props}
      alt={alt}
      src={cloudinaryUrl}
    />
  );
};

export default CloudinaryImage;