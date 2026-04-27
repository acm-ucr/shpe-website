import { ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
} from "@/components/ui/dialog";
interface PopupProps {
  clickableComponent: ReactNode;
  popupComponent: ReactNode;
  overlayColor?: string;
  position?: string;
}

const Popup = ({
  clickableComponent,
  popupComponent,
  overlayColor,
  position,
}: PopupProps) => {
  return (
    <Dialog>
      <DialogTrigger className="relative w-fit cursor-pointer" asChild>
        {clickableComponent}
      </DialogTrigger>
      <DialogOverlay
        className={`${overlayColor === undefined ? "bg-white/0" : overlayColor}`}
      >
        <DialogContent
          className={`${position === undefined ? "fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" : position}`}
        >
          <DialogTitle />
          {popupComponent}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default Popup;
