import { motion } from "framer-motion";

const ImageReveal = ({ imgSrc, alt, mousePos }) => {
  return (
    <>
      <div className="hover_container">
        <motion.img
          src={imgSrc}
          alt={alt}
          className="img_hover"
          style={{ y: mousePos.y, x: mousePos.x, opacity: 1 }}
        />
      </div>
    </>
  );
};

export default ImageReveal;
