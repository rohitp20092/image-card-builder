import { userService } from "services";

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    // append form data and do api call
  };

  return (
    <div className="p-4">
      <div className="container">
        <h1>Hi {userService.userValue?.firstName}!</h1>
        <h2>Card Builder UI</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" />
          </div>
          <div>
            <textarea />
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
