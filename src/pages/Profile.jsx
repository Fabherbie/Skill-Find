const Profile = () => {
  return (
    <div>
      <h2 className="mb-4 font-bold text-2xl">Edit Profile</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
        />
        <button className="bg-green-600 px-4 py-2 rounded text-white">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
