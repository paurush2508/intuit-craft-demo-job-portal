import React, { useState } from "react";
import Card from "../Freelancer/Card";

const ViewPostedJobs = ({ showModal, setShowModal, user, jobs }) => {
  const [filteredData, setFilteredData] = useState([]);

  React.useEffect(() => {
    if (user && user.email) {
      const filteredResult = jobs.filter(
        (item) => item.postedBy === user.email
      );
      setFilteredData(filteredResult);
    }
  }, [user, showModal]);

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              ></span>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle ">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg font-bold text-gray-900">
                        Your posted jobs ({`${filteredData?.length}`})
                      </h3>
                      <div className="mt-2">
                        {filteredData.map((item, index) => (
                          <Card key={index} data={item} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:hidden" aria-hidden="true">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ViewPostedJobs;