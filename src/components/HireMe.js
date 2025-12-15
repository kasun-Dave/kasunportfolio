import Image from 'next/image';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className="hire-me">
      <div className="circular-text-container">
        <Image 
          src="images/svgs/CircularText.svg" 
          alt="Get in Touch" 
          width={150} 
          height={150}
          className="circular-text"
        />
        <Link href="/contact" className="hire-me-link">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HireMe;

