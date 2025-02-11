function UploadFile() {
  function handelCreateFile(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handelCreateFile} className="flex flex-col ">
      <input type="text" placeholder="name file" name="name" />
      <input type="text" placeholder="description" name="description" />
      <input type="file" name="file" />
    </form>
  );
}

export default UploadFile;
