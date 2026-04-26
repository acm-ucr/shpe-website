import WhoWeAre from "@/components/landing/CreateWhoWeAre";

const Home = () => {
  return (
    <div className="items-right h-screen w-screen justify-center">
      <WhoWeAre
        title="Who We Are"
        text={
          "SHPE @ UCR is an interdisciplinary engineering organization. We pride ourselves in not only being able to improve ourselves in a professional, academic, and innovatice way, but in our ability to give back to the community through outreach. Overall, we have proved that we can prepare members for the real world, outside of their undergraduate career, whether it be in graduate schook, the industry, or anything else."
        }
      />
    </div>
  );
};

export default Home;
