import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PostAddIcon from "@mui/icons-material/PostAdd";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Divider, TextField, ThemeProvider, createTheme } from "@mui/material";
import AdminLayout from "../admin/AdminLayout";

const Profile = () => {
  const [isClickedCreateNewPost, setIsClickedCreateNewPost] =useState<boolean>(false);

  const handleClickCreateNewPost = () => {
    // handle click create new post
    setIsClickedCreateNewPost((prevState) => !prevState);
  };

  const theme = createTheme({
    // for textfield rounded corners and shadow style
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              boxShadow:
                "0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.1)",
            },
          },
        },
      },
    },
  });

  return (
    <>
      <AdminLayout>
        <div className="mt-20 py-6 px-32">
          <div className="w-full flex flex-col space-y-1">
            {!isClickedCreateNewPost ? (
              <>
                <div
                  className="cursor-pointer w-full p-4 bg-purple-600 text-white rounded-ss-2xl rounded-ee-2xl rounded-t-lg rounded-b-lg flex justify-between items-center shadow-2xl"
                  onClick={handleClickCreateNewPost}
                >
                  <h6 className="uppercase font-Ubuntu font-bold">
                    Create New Post
                  </h6>
                  <AddCircleIcon />
                </div>
                <div
                  className="cursor-pointer p-8 bg-white text-slate-400 flex justify-center items-center space-x-3 rounded-ss-3xl rounded-ee-3xl rounded-t-lg  rounded-l-lg shadow-2xl"
                  onClick={handleClickCreateNewPost}
                >
                  <PostAddIcon />
                  <h6 className="uppercase font-Ubuntu font-bold">
                    Your New Post
                  </h6>
                </div>
              </>
            ) : (
              <>
                <div
                  className="cursor-pointer w-full p-4 bg-purple-600 text-white rounded-ss-2xl rounded-ee-2xl rounded-t-lg rounded-b-lg flex justify-between items-center"
                  onClick={handleClickCreateNewPost}
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
                    <ThemeProvider theme={theme}>
                      <input
                        className="block w-full text-lg text-gray-900 border border-gray-300 rounded-r-xl cursor-pointer bg-gray-50 dark:text-gray-400  dark:placeholder-gray-600"
                        style={{
                          boxShadow:
                            "0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.1)",
                        }}
                        id="large_size"
                        type="file"
                      />

                      <TextField
                        label="Article Title"
                        type="text"
                        variant="outlined"
                        name="title"
                        placeholder="Enter Article title"
                        fullWidth={true}
                        required
                      />

                      <TextField
                        label="Article Caption"
                        type="text"
                        variant="outlined"
                        name="caption"
                        placeholder="Enter Article Caption"
                        fullWidth={true}
                        required
                      />

                      <TextField
                        label="Article Description"
                        type="text"
                        variant="outlined"
                        name="description"
                        placeholder="Enter Article Description"
                        fullWidth={true}
                        multiline
                        minRows={5}
                        maxRows={Infinity}
                        required
                      />

                      <TextField
                        type="date"
                        variant="outlined"
                        name="date"
                        placeholder="Enter Date"
                        fullWidth={true}
                      />

                      <TextField
                        label="Category"
                        type="text"
                        variant="outlined"
                        name="categoryName"
                        placeholder="Enter Category Name"
                        fullWidth={true}
                        required
                      />

                      <TextField
                        label="Tags (Comma separated tags)"
                        type="text"
                        variant="outlined"
                        name="tags"
                        placeholder="Enter comma separated tags"
                        fullWidth={true}
                        required
                      />
                    </ThemeProvider>
                    <button className="py-2 bg-purple-600 text-white rounded-2xl hover:bg-purple-700 transition-colors duration-300">
                      <h6 className="uppercase font-Ubuntu">Publish Post</h6>
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
          <Divider className="!my-5" />
        </div>
      </AdminLayout>
    </>
  );
};

export default Profile;