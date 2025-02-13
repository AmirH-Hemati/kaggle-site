import AllDatasets from "../dataset/AllDatasets";

function DatasetsAnalyze() {
  return (
    <div className="w-full h-full">
      <p>
        از بین مجموعه های زیر برای کدزدن یکی رو انتخاب وو ارد ان شوید و شروع به
        تحیل کنید
      </p>
      <AllDatasets />
    </div>
  );
}

export default DatasetsAnalyze;
