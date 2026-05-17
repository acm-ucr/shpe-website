import Decor from "@/public/banners/Gallery-MeetTheTeam.webp";
import TitleBanner from "@/components/Title";
import BoardCard from "@/components/board/BoardCard";
import { boardData } from "@/data/boardData";
import Popup from "@/components/ui/popup";
import BoardOverlay from "@/components/board/BoardOverlay";

const Board = () => {
  return (
    <div className="w-full items-center justify-center">
      <TitleBanner
        title="MEET THE TEAM"
        description="Click each board member to learn more about them!"
        decoration={Decor}
      />
      <div className="mt-5 flex w-full justify-center px-6">
        <div className="flex w-full max-w-6xl flex-wrap justify-center gap-x-40 gap-y-10">
          {boardData.map((member, index) => (
            <Popup
              key={index}
              clickableComponent={
                <BoardCard
                  //key={index}
                  name={member.name}
                  image={member.image}
                  position={member.position}
                  linkedin={member.linkedin}
                />
              }
              popupComponent={
                <BoardOverlay
                    name={member.name}
                    image={member.image}
                    position={member.position}
                    linkedin={member.linkedin}
                />
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
