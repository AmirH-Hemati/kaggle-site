import HomeAnalyzerIntro from "../ui/HomeAnalyzerIntro";
import HomeIntro from "../ui/HomeIntro";
import HomeUploaderIntro from "../ui/HomeUploaderIntro";
import LatestArticles from "../ui/LatestArticles";
import PopularArticles from "../ui/PopularArticles";

function Home() {
  return (
    <div className="bg-gray-50 flex flex-col w-full h-full justify-between  p-10 gap-10 ">
      <HomeIntro />
      <hr className="border-black/20" />
      <LatestArticles />
      <HomeUploaderIntro />
      <hr className="border-black/20" />
      <PopularArticles />
      <HomeAnalyzerIntro />
    </div>
  );
}

export default Home;
