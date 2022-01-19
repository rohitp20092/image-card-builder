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
        <h2>Card Builder UI</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" name="title" />
          </div>
          <div>
            <textarea name="description" />
          </div>
          <div>
            <input
              type="file"
              name="myImage"
              accept="image/png, image/gif, image/jpeg"
            />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
