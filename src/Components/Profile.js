import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = () =>{
  const user = useSelector((state) => state);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`https://dummyjson.com/users/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
        });
    }
  }, [user]);

  return (
    <div>
      <h2>Profile</h2>
      {userData ? (
        <div>
          <p>Username: {userData.username}</p>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Display other user details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
