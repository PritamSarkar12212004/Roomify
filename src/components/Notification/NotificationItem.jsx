import React from "react";
import { useSelector } from "react-redux";

function Notification() {
  const { steData } = useSelector((state) => state.NotiFicationnav);
  return (
    <div
      className={`w-96 h-96 ${
        steData ? " hidden " : "fixed"
      } right-2 rounded-xl px-2 py-2 bg-gray-500 bg-opacity-30 backdrop-blur-sm  z-50`}
    >
      <div className="flex items-center mb-4 px-2">
        <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4">
          <i className="fas fa-info-circle text-2xl"></i>
        </div>
        <h2 className="text-2xl font-bold">Important Update</h2>
      </div>
      <p className="text-gray-700 mb-4">
        <strong>Dear User,</strong> we are excited to inform you about some
        <em> significant changes</em> coming to our platform. Starting next
        week, we will be introducing{" "}
        <span className="font-bold">new features</span> that will enhance your
        experience.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Enhanced Security:</strong> Your data will be more secure than
          ever.
        </li>
        <li>
          <strong>New User Interface:</strong> A fresh and intuitive design.
        </li>
        <li>
          <strong>Performance Improvements:</strong> Faster and smoother
          operations.
        </li>
      </ul>
    </div>
  );
}

export default Notification;
