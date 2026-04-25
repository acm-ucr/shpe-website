import Decor from "@/public/banners/Gallery-MeetTheTeam.webp";
import TitleBanner from "@/components/Title";

const Board = () => {
  return (
    <div>
      <TitleBanner
        title="MEET THE TEAM"
        description="Click each board member to learn more about them!"
        decoration={Decor}
      />
      <p>Current Board</p>
    </div>
  );
};

export default Board;
