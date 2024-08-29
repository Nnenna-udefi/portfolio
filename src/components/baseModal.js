import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export const BaseModal = ({
  children,
  isOpen,
  closeModal,
  onClose,
  className,
  doNotCloseOutside,
}) => {
  const tooltipRef = useRef(null);

  const func = onClose ?? closeModal;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        tooltipRef?.current &&
        event.target instanceof Node &&
        !tooltipRef.current?.contains(event.target)
      ) {
        if (!doNotCloseOutside) {
          func();
          document.body.style.overflow = "auto";
        }
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape" && isOpen) {
        if (doNotCloseOutside) {
          func();
        }
      }
    };

    document.addEventListener("keydown", handleEscKey);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, doNotCloseOutside, func]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="modal"
        >
          <div ref={tooltipRef} className="modal-tooltip">
            <button type="button" onClick={func} className="modal-close-btn">
              <X />
            </button>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
