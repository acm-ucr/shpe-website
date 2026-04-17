import Example from "@/components/practice";

const Home = () => {
  return (
    <div className="bg-shpe-blue-050 flex h-screen w-screen flex-col items-center justify-center gap-6">
      {/*Page has a light blue background*/}

      <Example
        text1="Prop 1"
        text2="Prop 2"
        text3="Prop 2"
        text4="Props"
      ></Example>
      {/*The component now gets all four props*/}
    </div>
  );
};

export default Home;
