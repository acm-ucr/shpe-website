const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-shpe-cyan-300 flex w-2/3 flex-col items-center gap-1 gap-4 justify-self-center rounded-md p-8">
      <div className="bg-shpe-orange-500 w-1/2 p-5 text-center text-lg">
        {props.text1}
      </div>

      {/* 1. added another div for Prop2 and made it into rows*/}
      <div className="flex w-1/2 flex-row gap-1">
        <div className="bg-shpe-red-600 w-full rounded-full p-5 text-center text-lg">
          {props.text2}
        </div>
        <div className="bg-shpe-blue-100 w-full rounded-full p-5 text-center text-lg">
          {props.text2}
        </div>
      </div>

      <div className="bg-shpe-blue-900 w-1/2 p-5 text-center text-lg text-white">
        {props.text3}
      </div>
    </div>
  );
};
export default Example;
