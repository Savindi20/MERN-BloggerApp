import React, { ChangeEvent, useEffect, useState } from "react";
import Post from "../../components/Post";
import { PostDetails } from "../../types/PostDetails";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PostAddIcon from "@mui/icons-material/PostAdd";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Divider, TextField, ThemeProvider, createTheme } from "@mui/material";
import axios from "../../axios";
import AdminLayout from "../admin/AdminLayout";

const Profile = () => {
  const [postList, setPostList] = useState<PostDetails[]>([]);
  const [isClickedCreateNewPost, setIsClickedCreateNewPost] =
    useState<boolean>(false);
  const [imageId, setImageId] = useState<any>(null);
  const [title, setTitle] = useState<string>("");
  const [caption, setCaption] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [categoryName, setCategoryName] = useState<string>("");
  const id = localStorage.getItem("id");
  
  useEffect(() => {
    // use effect
    retrieveAllPosts();
  }, []);

  // const filteredData = postList.filter((post) => post.userName === id);

  const retrieveAllPosts = () => {
    // retrieve all posts
    axios
      .get("post")
      .then((res) => {
        console.log(res);
        setPostList(res.data.responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filteredData = postList.filter((post) => post.userName === id);

  console.log(filteredData);

  const handleClickCreateNewPost = () => {
    // handle click create new post
    setIsClickedCreateNewPost((prevState) => !prevState);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // handle submit
    event.preventDefault();
    console.log("Submitted");

    console.log({
      imageId,
      title,
      caption,
      description,
      date,
      id,
      tags,
      categoryName,
    });

    let tagsArray = convertTagStringToArray(tags);

    let newPost = {
      // create new post object
      imageUrl: imageId,
      title: title,
      caption: caption,
      description: description,
      date: date,
      userName: id,
      tags: tagsArray,
      categoryName: categoryName,
    };

    axios
      .post("post", newPost)
      .then((res) => {
        console.log(res);
        setPostList((prevList) => [...prevList, res.data.responseData]);
        clearState();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const convertTagStringToArray = (tagString: string): string[] => {
    // convert tag string to array
    if (tagString !== "") {
      return tagString.split(",").map((tag) => tag.trim());
    }
    return [];
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    // handle input change
    const { name, value } = event.target;

    switch (name) {
      case "imageId":
        setImageId(value);
        break;
      case "title":
        setTitle(value);
        break;
      case "caption":
        setCaption(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "date":
        setDate(value);
        break;
      case "tags":
        setTags(value);
        break;
      case "categoryName":
        setCategoryName(value);
        break;
      default:
        break;
    }
  };

  const clearState = () => {
    // clear all the input fields
    setImageId("");
    setTitle("");
    setCaption("");
    setDescription("");
    setDate("");
    setTags("");
    setCategoryName("");
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

  function convertToBase64(e: any) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImageId(reader.result);
    };
    reader.onerror = (error) => {
      console.log("errar :", error);
    };
  }

  return (
    <>
      <AdminLayout>
        <div className="mt-20 py-6 px-32">
          <div className="w-full flex flex-col space-y-1">
            {!isClickedCreateNewPost ? (
              <>
                <div
                  className="cursor-pointer w-full p-4 bg-blue-600 text-white rounded-ss-2xl rounded-ee-2xl rounded-t-lg rounded-b-lg flex justify-between items-center shadow-2xl"
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
                  className="cursor-pointer w-full p-4 bg-blue-600 text-white rounded-ss-2xl rounded-ee-2xl rounded-t-lg rounded-b-lg flex justify-between items-center"
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
                    onSubmit={handleSubmit}
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
                        onChange={convertToBase64}
                      />

                      <TextField
                        label="Article Title"
                        type="text"
                        variant="outlined"
                        name="title"
                        placeholder="Enter Article title"
                        onChange={handleInputChange}
                        value={title}
                        fullWidth={true}
                        required
                      />

                      <TextField
                        label="Article Caption"
                        type="text"
                        variant="outlined"
                        name="caption"
                        placeholder="Enter Article Caption"
                        onChange={handleInputChange}
                        value={caption}
                        fullWidth={true}
                        required
                      />

                      <TextField
                        label="Article Description"
                        type="text"
                        variant="outlined"
                        name="description"
                        placeholder="Enter Article Description"
                        value={description}
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                        value={date}
                        fullWidth={true}
                      />

                      <TextField
                        label="Category"
                        type="text"
                        variant="outlined"
                        name="categoryName"
                        placeholder="Enter Category Name"
                        onChange={handleInputChange}
                        value={categoryName}
                        fullWidth={true}
                        required
                      />

                      <TextField
                        label="Tags (Comma separated tags)"
                        type="text"
                        variant="outlined"
                        name="tags"
                        value={tags}
                        placeholder="Enter comma separated tags"
                        onChange={handleInputChange}
                        fullWidth={true}
                        required
                      />
                    </ThemeProvider>
                    <button className="py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors duration-300">
                      <h6 className="uppercase font-Ubuntu">Publish Post</h6>
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>

          <Divider className="!my-5" />

          {filteredData.map((post) => (
            <Post
              key={post._id}
            _id={post._id}  
            imageId={post.imageId}
            title={post.title}
            caption={post.caption}
            description={post.description}
            date={post.date}
            userName={post.userName}
            tags={post.tags}
            categoryId={post.categoryId}
            />
          ))}
        </div>
      </AdminLayout>
    </>
  );
};

export default Profile;