const Example = (props: { text1: string; text2: string; text3: string; text4: string }) => {
  // Added text4 for the fourth box.
  return (
    <div className="flex w-2/3 flex-col gap-4 justify-self-center rounded-xl p-8 font-shpe-univers-condensed">
      {/*Outer box is stacked in a column*/}
      <div className="bg-shpe-orange-500 p-5 text-center text-2xl text-black rounded-xl">{props.text1}</div>
      {/*Top box is orange with centered black text*/}

      <div className="flex gap-4">
        {/*This row holds the two middle boxes*/}
        <div className="w-full rounded-full bg-shpe-red-100 p-5 text-center text-2xl text-black">{props.text2}</div>
        {/*Left middle box is red and fully rounded*/}
        <div className="w-full rounded-full bg-shpe-blue-100 p-5 text-center text-2xl text-black">{props.text3}</div>
        {/*Right middle box is blue and fully rounded*/}
      </div>

      <div className="bg-shpe-blue-200 p-5 text-center text-2xl text-shpe-white-100 rounded-xl">{props.text4}</div>
      {/*Bottom box is dark blue with white text*/}
    </div>
  );
};

export default Example;
