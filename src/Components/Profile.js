import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = () =>{
  const user = useSelector((state) => state);
  const [userData, setUserData] = useState(null);
  console.log(user)

  useEffect(() => {
    if (user) {
      fetch(`https://dummyjson.com/users/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
          setUserData(data);
        });
    }
  }, [user]);

  return (
    <div>
      <h2>Profile</h2>
      {userData ? ( 
        <div>
          <h5>Username : <span>{userData.username}</span></h5>
          <h5>Name : <span>{userData.firstName} {userData.lastName}</span></h5>
          <h5>Email : <span>{userData.email}</span></h5>  
        </div>
      ) : (
        <h5>No user Found !</h5>
      )}
    </div>
  );
};

export default Profile;
