import { useMyUpload } from "./useMyUpload";

function MyUpload() {
  const { uploads } = useMyUpload();
  console.log(uploads);
  return (
    <div>
      <h1>my uploads</h1>
      <ul>
        {uploads?.data?.map((item) => (
          <div key={item._id}>my upload</div>
        ))}
      </ul>
    </div>
  );
}

export default MyUpload;
