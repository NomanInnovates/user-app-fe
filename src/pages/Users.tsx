import { useState } from "react";
import UserList from "../components/UserList";
import {  filterArrayByInputText } from "../utils";
import UserlistFooter from "../components/UserList/Footer";
import UserlistHeader from "../components/UserList/Header";
const dusers = [
  {
    id: 0,
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    userType: "regular",
    active: true,
    score: 100,
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: "Romaguera-Crona",
  },
  {
    id: 1,
    firstName: "Alice",
    lastName: "Smith",
    email: "alice@example.com",
    userType: "admin",
    active: true,
    score: 150,

    country: "Canada",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: "Deckow-Crist",
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob@example.com",
    userType: "premium",
    active: false,
    score: 200,

    country: "UK",
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: "Romaguera-Jacobson",
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob@example.com",
    userType: "premium",
    active: false,
    score: 200,
    country: "UK",
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: "Romaguera-Jacobson",
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Brown",
    email: "alice.brown@example.com",
    userType: "regular",
    active: true,
    score: 120,

    country: "USA",
    phone: "1-234-567-8901",
    website: "alicebrown.com",
    company: "Brown Enterprises",
  },
  {
    id: 5,
    firstName: "Charlie",
    lastName: "Wilson",
    email: "charlie.wilson@example.com",
    userType: "regular",
    active: true,
    score: 180,

    country: "Canada",
    phone: "1-987-654-3210",
    website: "wilsoncharlie.com",
    company: "Wilson Ltd",
  },
  {
    id: 6,
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.davis@example.com",
    userType: "premium",
    active: true,
    score: 250,

    country: "Australia",
    phone: "1-543-210-9876",
    website: "davisemily.net",
    company: "Davis Enterprises",
  },
  {
    id: 7,
    firstName: "Jack",
    lastName: "Miller",
    email: "jack.miller@example.com",
    userType: "admin",
    active: true,
    score: 300,

    country: "UK",
    phone: "1-123-456-7890",
    website: "millerjack.org",
    company: "Miller & Sons",
  },
  {
    id: 8,
    firstName: "Olivia",
    lastName: "Garcia",
    email: "olivia.garcia@example.com",
    userType: "premium",
    active: false,
    score: 180,

    country: "Germany",
    phone: "1-654-321-0987",
    website: "garciaolivia.com",
    company: "Garcia Inc",
  },
  {
    id: 9,
    firstName: "Sophia",
    lastName: "Martinez",
    email: "sophia.martinez@example.com",
    userType: "regular",
    active: true,
    score: 150,

    country: "France",
    phone: "1-234-567-8901",
    website: "martinezsophia.net",
    company: "Martinez & Co",
  },
];
const usersPerPage = 5;
function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState<any[]>(dusers.slice(0, usersPerPage));

  const handlePageClick = (e: Number) => {
    setCurrentPage(Number(e));
    let arr = dusers.slice(
      (Number(e) - 1) * usersPerPage,
      usersPerPage * Number(e)
    );

    setUsers(arr);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-[100vh] p-3 sm:p-5 antialiased">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <br />
      <h2 className="block mb-2 font-medium text-gray-900 dark:text-white text-center text-2xl lg:text-3xl">
        Users List
      </h2>
      <br />
        <UserlistHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <UserList
          users={
            searchTerm
              ? filterArrayByInputText(users, searchTerm, [
                  "firstName",
                  "lastName",
                  "email",
                ])
              : users
          }
        />
        <UserlistFooter
          currentPage={currentPage}
          handlePageClick={handlePageClick}
        />
      </div>
    </section>
  );
}

export default Users;
