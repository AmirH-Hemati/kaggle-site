import DatasetsItem from "./DatasetsItem";
import { useDatasets } from "./useDatasets";

function AllDatasets() {
  const { datasets } = useDatasets();
  return (
    <ul>
      {datasets.map((dataset) => (
        <DatasetsItem key={dataset._id} dataset={dataset} />
      ))}
    </ul>
  );
}

export default AllDatasets;
