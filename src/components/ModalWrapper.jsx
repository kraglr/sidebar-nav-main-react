import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import ClearIcon from "@mui/icons-material/Clear";
const ModalWrapper = ({
  open,
  onClose,
  title = "asd",
  children,
  closeBtn = true,
  disableOutsideClick = true,
  footer,
  contentClassName = "sm:max-w-xl",
  headerClass = "bg-gray-900 text-white py-2 px-4 rounded-t-md",
}) => {
  return (
    <Dialog
      open={open}
      onOpenChange={disableOutsideClick}
      //   disableOutsideClick={disableOutsideClick}
    >
      <AnimatePresence>
        {open && (
          <DialogContent
            className={`sm:max-w-xl p-0 z-999 [&>button]:hidden  ${contentClassName}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <DialogHeader
                className={`flex flex-row align-middle justify-between items-center  ${headerClass}`}
              >
                <DialogTitle>{title}</DialogTitle>
                {closeBtn && <ClearIcon onClick={onClose} />}
              </DialogHeader>

              <div className="py-2">{children}</div>

              {footer && <DialogFooter>{footer}</DialogFooter>}
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
};

export default ModalWrapper;
