const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-shpe-blue-050 flex w-2/3 flex-col items-center gap-6 justify-self-center rounded-2xl p-10">
      {/* Box 1 - orange, sharp corners */}
      <div className="bg-shpe-orange-500 w-3/4 p-5 text-center text-xl">
        {props.text1}
      </div>

      {/* Box 2 - two pills side by side */}
      <div className="flex w-3/4 flex-row gap-4">
        <div className="bg-shpe-orange-600 w-1/2 rounded-full p-5 text-center text-xl">
          {props.text2}
        </div>
        <div className="bg-shpe-blue-100 w-1/2 rounded-full p-5 text-center text-xl">
          {props.text2}
        </div>
      </div>

      {/* Box 3 - dark navy, white text, sharp corners */}
      <div className="bg-shpe-blue-200 w-3/4 p-5 text-center text-xl text-white">
        {props.text3}
      </div>
    </div>
  );
};
export default Example;
