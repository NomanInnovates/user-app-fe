import { useState } from "react";
import UserFormModal from "../components/UserList/UserFormModal";
import { useUserContext } from "../context";

function CreateUser() {
    const data = useUserContext()
    console.log("context",data)
  const [userData, setUserData] = useState({
    score: 0,
    email: "",
    phone: "",
    country: "",
    website: "",
    company: "",
    details: "",
    lastName: "",
    firstName: "",
    active: false,
    userType: "regular",
  });

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here, e.g., update or create user
    console.log(userData);
  };
 
  return (
    <UserFormModal
      show
      userData={userData}
      setUserData={setUserData}
      handleSubmit={handleAddUser}
    />
  );
}

export default CreateUser;
