import DatasetsItem from "./DatasetsItem";
import { useDatasets } from "./useDatasets";

function AllDatasets() {
  const { datasets } = useDatasets();
  console.log(datasets);
  return (
    <ul className="grid grid-cols-4 p-4 gap-4">
      {datasets?.data?.map((dataset) => (
        <DatasetsItem key={dataset._id} dataset={dataset} />
      ))}
    </ul>
  );
}

export default AllDatasets;
