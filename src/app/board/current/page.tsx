import TitleBanner from "@/components/Title";
import BoardCard from "@/components/board/BoardCard";
import { boardData } from "@/data/boardData";
import Popup from "@/components/ui/popup";
import BoardOverlay from "@/components/board/BoardOverlay";

export const metadata = {
  title: "Current Board | SHPE @ UCR",
  description:
    "Get to know the current board of SHPE @ UCR! Meet the student leaders driving the Society of Hispanic Professional Engineers at UC Riverside.",
};

const Board = () => {
  return (
    <div className="w-full items-center justify-center">
      <TitleBanner
        title="MEET THE TEAM"
        description="Click each board member to learn more about them!"
      />
      <div className="mt-5 flex w-full justify-center px-6">
        <div className="relative flex w-full max-w-6xl flex-wrap justify-center gap-15 p-10">
          {boardData.map(
            ({ name, image, position, linkedin, title, quote }, index) => (
              <Popup
                key={index}
                clickableComponent={
                  <div className="w-full max-w-65">
                    <BoardCard
                      key={index}
                      name={name}
                      image={image}
                      position={position}
                      linkedin={linkedin}
                    />
                  </div>
                }
                popupComponent={
                  <BoardOverlay
                    name={name}
                    image={image}
                    position={position}
                    linkedin={linkedin}
                    title={title}
                    quote={quote}
                  />
                }
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Board;
