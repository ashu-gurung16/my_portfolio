import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { useRef } from "react";

const EdModal = ({ name, course, desc, date, img, onClose }) => {
  const refModal = useRef();

  const closeModal = (e) => {
    if (refModal.current === e.target) {
      onClose();
    }
  };

  return (
    <>
      <motion.div
        ref={refModal}
        onClick={closeModal}
        className="forward_ed_item_container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="forward_ed_card"
        >
          <div className="ed_close_logo" onClick={onClose}>
            <CloseIcon fontSize="large" />
          </div>
          <h1>✨{name}✨</h1>
          <div
            className="ed_modal_img"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div className="ed_modal_desc">
            <h2>{course}</h2>
            <h2>{date}</h2>
          </div>
          <div className="ed_model_paragraph">
            <h2>{desc}</h2>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default EdModal;
