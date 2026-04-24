import BoardCard from "@/components/board/BoardCard";
import { boardData } from "@/data/boardData";

export default function BoardPage() {
  return (
    <div className="h-screen w-screen items-center justify-center">
      <div className="flex w-full justify-center px-6">
        <div className="flex w-full max-w-6xl flex-wrap justify-center gap-x-40 gap-y-10">
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
}
