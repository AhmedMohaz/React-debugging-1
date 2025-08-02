
import React from "react";

const Profile = ({ name, age }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
      <h2>User Profile</h2>
      <p>Name: {name.toUpperCase()}</p> {/* ❌ Will crash if name is undefined */}
      <p>Age: {age}</p>
    </div>
  );
};

export default Profile;
