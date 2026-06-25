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
  position?: string;
}

const Popup = ({
  clickableComponent,
  popupComponent,
  position,
}: PopupProps) => {
  return (
    <Dialog>
      <DialogTrigger className="relative cursor-pointer" asChild>
        {clickableComponent}
      </DialogTrigger>
      <DialogOverlay className="bg-shpe-blue-200/40">
        <DialogContent
          className={`${position === undefined ? "fixed top-[50%] left-[50%] w-full translate-x-[-50%] translate-y-[-50%] md:w-fit" : position}`}
        >
          <DialogTitle />
          {popupComponent}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default Popup;
