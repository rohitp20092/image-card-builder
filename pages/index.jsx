import { userService } from "services";

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    const formData = new FormData();
    // append form data and do api call
    formData.append('file', e.target.myImage.value);
    formData.append('title', e.target.title.value);
    formData.append('description', e.target.description.value);
    fetch("/api/users/postCard", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div className="p-4">
      <div className="container">
        <h1>Hi {userService.userValue?.firstName}!</h1>
        <div className="mb-4 text-center">
          <h2>Card Builder UI</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <label className="col-sm-1 col-form-label">Title</label>
            <div className="col-sm-10">
              <input type="text" name="title" className="form-control" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-1 col-form-label">Description</label>
            <div className="col-sm-10">
              <textarea name="description" style={{resize: 'none'}} className="form-control" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-1 col-form-label">Image Upload</label>
            <div className="col-sm-10">
              <input
                type="file"
                name="myImage"
                accept="image/png, image/gif, image/jpeg"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-11 bg-light text-right">
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
