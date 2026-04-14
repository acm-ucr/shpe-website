import Example from "@/components/practice";
import Footer from "@/components/board/footer"

const Home = () => {
  return (
    <div className="h-screen w-screen items-center justify-center">
      Practice
      <Example text1="Prop1" text2="Prop2" text3="Props"></Example>
      <Footer></Footer>
    </div>
  );
};

export default Home;
