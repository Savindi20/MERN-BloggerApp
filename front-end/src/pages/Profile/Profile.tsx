import React from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Divider } from "@mui/material";
import AdminLayout from "../admin/AdminLayout";

const Profile = () => {

  return (
    <>
      <AdminLayout>
        <div className="mt-20 py-6 px-32">
          <div className="w-full flex flex-col space-y-1">
            <>
              <div
                  className="cursor-pointer w-full p-4 bg-purple-600 text-white rounded-ss-2xl rounded-ee-2xl rounded-t-lg rounded-b-lg flex justify-between items-center"
                >
                  <h6 className="uppercase font-Ubuntu font-bold">
                    Discard Post
                  </h6>
                  <RemoveCircleIcon />
              </div>
              <div className="w-full cursor-pointer p-8 bg-white rounded-ss-3xl rounded-ee-3xl rounded-t-lg  rounded-l-lg text-slate-400 flex justify-center items-center space-x-3 shadow-2xl">
                <form
                    className="flex flex-col space-y-3 w-full"
                  >
                    <button className="py-2 bg-purple-600 text-white rounded-2xl hover:bg-purple-700 transition-colors duration-300">
                      <h6 className="uppercase font-Ubuntu">Publish Post</h6>
                    </button>
                </form>
              </div> 
           </>
          </div>
          <Divider className="!my-5" />
        </div>
      </AdminLayout>
    </>
  );
};

export default Profile;