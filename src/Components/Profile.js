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
    <div className='profile_container'>
      <h2>Profile Page</h2>
      {userData ? ( 
        <div className='userDetails'>
          <img src={userData.image} alt='#' />
          <h4>Username : <span>{userData.username}</span></h4>
          <h4>Name : <span>{userData.firstName} {userData.maidenName} {userData.lastName}</span></h4>
          <h4>Email : <span>{userData.email}</span></h4>  
          <h4>Gender : <span>{userData.gender}</span></h4>  
          <h4>DOB : <span>{userData.birthDate}</span></h4>  
          <h4>Age : <span>{userData.age}</span></h4>  
          <h4>Blood_Group : <span>{userData.bloodGroup}</span></h4>  
          <h4>Height : <span>{userData.height} cms.</span></h4> 
          <h4>Weight : <span>{userData.weight} kgs</span></h4> 
          <h4>Hair : <span>{userData.hair.type} {userData.hair.color}</span></h4> 
          <h4>Eye Color : <span>{userData.eyeColor}</span></h4>  
          <h4>Email : <span>{userData.email}</span></h4>
          <h4>Phone No. : <span>{userData.phone}</span></h4>
          <h4>University : <span>{userData.university}</span></h4>
          <h4>Company : <span>{userData.address.address} 
          {userData.address.city} {userData.address.postalCode}
          </span></h4>

        </div>
      ) : (
        <h5>No user Found !</h5>
      )}
    </div>
  );
};

export default Profile;
