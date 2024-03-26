import { User } from "../../utils";

interface props {
  show: boolean;
  handleCloseModal: () => void;
  user: User;
}

export default function ViewUser({ show, user, handleCloseModal }: props) {
  return (
    <div
      className={`${
        show ? "fixed" : "hidden"
      } overflow-y-auto overflow-x-hidden  justify-center items-center w-full md:inset-0 h-[calc(100vh-10rem)] max-h-full`}
    >
      <div className="relative p-4 w-full">
        {/* Modal content */}
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          {/* Modal header */}
          <div className="flex justify-between mb-4 rounded-t sm:mb-5">
            <div className="text-lg text-gray-900 md:text-xl dark:text-white">
              <h3 className="font-semibold ">
                {user?.firstName + " " + user?.lastName}{" "}
              </h3>
            </div>
            <div>
              <button
                onClick={handleCloseModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="readProductModal"
              >
                {`<--`}
                <span className="sr-only">Close modal</span>
              </button>
            </div>
          </div>
          <div className=" grid gap-4 mb-1 sm:grid-cols-2 space-y-4">
            {Object.entries(user).map(([key, value]) => {
              if (["firstName", "lastName", "id"].includes(key)) {
                return null;
              }

              return (
                <div key={key}>
                  <dt className="font-semibold text-gray-900">{key}</dt>
                  <dd className="text-gray-500">{value.toString()}</dd>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end items-center">
            <button
              type="button"
              className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Preview All Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
