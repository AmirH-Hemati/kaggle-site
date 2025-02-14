import HomeAnalyzerIntro from "../ui/HomeAnalyzerIntro";
import HomeIntro from "../ui/HomeIntro";
import HomeUploaderIntro from "../ui/HomeUploaderIntro";

function Home() {
  return (
    <div className="bg-[#FCFCFD] flex flex-col w-full h-full justify-between  p-10 ">
      <HomeIntro />
      <HomeUploaderIntro />
      <HomeAnalyzerIntro />
    </div>
  );
}

export default Home;
