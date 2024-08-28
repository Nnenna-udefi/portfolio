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
          <div
            ref={tooltipRef}
            className="modal-tooltip"
            // className={cn(
            //   "relative mb-32 h-[70%] max-h-[540px] w-[30%] overflow-y-auto rounded-xl border border-themeText/[0.05] p-5 shadow-md [@media(max-width:1200px)]:w-[50%] [@media(max-width:700px)]:w-[90%] ",
            //   className,
            //   isLight ? "bg-white" : "bg-[#16151C]"
            // )}
          >
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
