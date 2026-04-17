import BoardCard from "@/components/board/BoardCard";
import { boardData } from "@/data/boardData";
import Example from "@/components/practice";

const Home = () => {
  return (
    <div className="h-screen w-screen items-center justify-center">
      Practice
      <Example text1="Prop1" text2="Prop2" text3="Props"></Example>
      <div className="flex w-full justify-center px-6">
        <div className="grid grid-cols-3 gap-x-40 gap-y-10">
          {boardData.map((member, index) => (
            <BoardCard
              key={index}
              name={member.name}
              image={member.image}
              position={member.position}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
