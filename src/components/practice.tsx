const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-6 justify-self-center rounded-2xl bg-[#72a9be] p-10">
      {/* Box 1 - orange, sharp corners */}
      <div className="w-3/4 bg-[#fd652f] p-5 text-center text-xl">
        {props.text1}
      </div>

      {/* Box 2 - two pills side by side */}
      <div className="flex w-3/4 flex-row gap-4">
        <div className="w-1/2 rounded-full bg-[#D33A02] p-5 text-center text-xl">
          {props.text2}
        </div>
        <div className="w-1/2 rounded-full bg-[#003da5] p-5 text-center text-xl">
          {props.text2}
        </div>
      </div>

      {/* Box 3 - dark navy, white text, sharp corners */}
      <div className="w-3/4 bg-[#001f5b] p-5 text-center text-xl text-white">
        {props.text3}
      </div>
    </div>
  );
};
export default Example;
