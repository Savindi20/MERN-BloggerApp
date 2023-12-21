import { ChangeEvent, FC, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "../../axios";
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { PostDetails } from "../../types/PostDetails";
import { PostProps } from "../../types/PostProps";
import { catergroy } from "../../types/Catergroy";
import { image } from "../../types/Image";
import { UserProps } from "../../types/User";
import Swal from "sweetalert2";

const Post: FC<PostProps> = (props) => {
  // post component
  const [postArray, setPostArray] = useState<PostDetails[]>([]);
  const [imageId, setImageId] = useState<any>(null);
  const [title, setTitle] = useState<string>("");
  const [caption, setCaption] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryList, setCategoryList] = useState<catergroy[]>([]);
  const [imageList, setImageList] = useState<image[]>([]);
  const [userList, setUserList] = useState<UserProps[]>([]);


  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getAllPost();
    retrieveCategoryName();
    retrieveImage();
    retrieveAllUsers();
  }, []);

  const getAllPost = () => {
    // get all posts
    axios
      .get("post")
      .then((res) => {
        setPostArray(res.data.responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const retrieveCategoryName = () => {
    // retrieve category name based on categoryId
    axios
      .get(`category`)
      .then((res) => {
        console.log(res);
        setCategoryList(res.data.responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const retrieveImage = () => {
    // retrieve image based on imageId
    axios
      .get(`image`)
      .then((res) => {
        console.log(res);
        setImageList(res.data.responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const retrieveAllUsers = () => {
    // retrieve all posts
    axios
      .get("user")
      .then((res) => {
        console.log(res);
        setUserList(res.data.responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlUpdateSelectedRows = (id: string) => {
    // handle update selected rows
    setOpen(true);
    const filteredData = postArray.filter((post) => post._id === id);
    console.log(filteredData);
    filteredData.forEach(async (post) => {
      // setImageId(post.imageId);
      setTitle(post.title);
      setCaption(post.caption);
      setDescription(post.description);
      setDate(post.date);
      setTags(post.tags.join(", "));
      const filteredData = categoryList.filter(
        (catagroy) => catagroy._id === post.categoryId
      );
      setCategoryName(filteredData[0].categoryName);
    });
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

  const updatePost = (id: string) => {
    // update post
    let tagsArray = convertTagStringToArray(tags);
  
    let updatePost = {
      // create new post object
      imageUrl: imageId,
      title: title,
      caption: caption,
      description: description,
      date: date,
      userName: localStorage.getItem("id"),
      tags: tagsArray,
      categoryName: categoryName,
    };
  
    axios
      .put(`post/${id}`, updatePost)
      .then((res) => {
        console.log(res);
        const updatedPost = res.data.responseData;
        setPostArray((prevPosts) => {
          const updatedArray = prevPosts.map((post) =>
            post._id === updatedPost._id ? updatedPost : post
          );
          return updatedArray;
        });
        clearState(); // Clear the input fields after updating the post
        handleClose(); // Close the modal after updating the post
        getAllPost(); // Get all posts again after updating
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Updated Successful..!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something Went Wrong..!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  
  const deletePost = (postId: string, props: PostProps) => {
    // delete post
    axios
      .delete(`post/${postId}`)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            if (props.removePostFromList) {
              props.removePostFromList(postId);
            }
            getAllPost();
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something Went Wrong..!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  
  function convertToBase64(e: any) {
    // convert to base64
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
              marginBottom: "10px",
            },
          },
        },
      },
    },
  });

  return (
    <>
      <div className="cursor-pointer p-6 bg-white text-slate-600 space-x-3 rounded-2xl shadow-2xl mt-1">
        <h3 className="text-center font-bold font-Ubuntu">{props.title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2 mt-2">
            {props.date && (
              <p>
                <strong>Date</strong> : {props.date}
              </p>
            )}
            {props.userName && (
              <p>
                <strong>User Name</strong> : 
                {/* {props.userName} */}
                {
                  userList.find((user) => user._id === props.userName)?.name
                }
              </p>
            )}
            {props.categoryId && (
              <p>
                <strong>Category</strong> :
                {
                  categoryList.find(
                    (category) => category._id === props.categoryId
                  )?.categoryName
                }
              </p>
            )}
            {props.tags && (
              <p>
                <strong>Tags</strong> : {props.tags.join(", ")}
              </p>
            )}
          </div>
          <img
            className="flex justify-center items-center object-cover rounded-xl shadow-xl w-full"
            src={
              imageList.find((image) => image._id === props.imageId)?.imageUrl
            }
            alt="Image"
          />

          <div className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-6 justify-end">
            <button onClick={() => deletePost(props._id, props)}>
              <DeleteIcon style={{ color: "#e74c3c" }} />
            </button>
            <button onClick={() => handlUpdateSelectedRows(props._id)}>
              <EditIcon style={{ color: "#2ecc71" }} />
            </button>
          </div>
        </div>

        <h2 className="text-center font-semibold font-babylonica">
          {props.caption}
        </h2>
        <p className="flex justify-center items-center font-opensans">
          {props.description}
        </p>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{ timeout: 500 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              width: "full",
              maxWidth: "30%",
              bgcolor: "background.paper",
              p: 2,
              borderRadius: "20px",
              boxShadow:
                "0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="modal-content mx-3 md:flex-row mb-4">
              <ThemeProvider theme={theme}>
                <input
                  className="block w-full text-lg text-gray-900 border border-gray-300 rounded-r-xl cursor-pointer bg-gray-50 dark:text-gray-400  dark:placeholder-gray-600"
                  style={{ marginBottom: "10px" }}
                  onChange={convertToBase64}
                  id="large_size"
                  type="file"
                />

                <TextField
                  label="Article Title"
                  type="text"
                  variant="outlined"
                  name="title"
                  value={title}
                  onChange={handleInputChange}
                  placeholder="Enter Article title"
                  fullWidth
                  required
                />

                <TextField
                  label="Article Caption"
                  type="text"
                  variant="outlined"
                  name="caption"
                  value={caption}
                  onChange={handleInputChange}
                  placeholder="Enter Article Caption"
                  fullWidth
                  required
                />

                <TextField
                  label="Article Description"
                  type="text"
                  variant="outlined"
                  name="description"
                  value={description}
                  onChange={handleInputChange}
                  placeholder="Enter Article Description"
                  fullWidth
                  multiline
                  minRows={5}
                  maxRows={Infinity}
                  required
                />

                <TextField
                  type="date"
                  variant="outlined"
                  name="date"
                  value={date}
                  onChange={handleInputChange}
                  placeholder="Enter Date"
                  fullWidth
                  required
                />

                <TextField
                  label="Category"
                  type="text"
                  variant="outlined"
                  name="categoryName"
                  value={categoryName}
                  onChange={handleInputChange}
                  placeholder="Enter Category Name"
                  fullWidth
                  required
                />

                <TextField
                  label="Tags (Comma separated tags)"
                  type="text"
                  variant="outlined"
                  name="tags"
                  value={tags}
                  onChange={handleInputChange}
                  placeholder="Enter comma separated tags"
                  fullWidth
                  required
                />
              </ThemeProvider>
            </div>
            <div className="-mx-3 md:flex">
              <div className="md:w-full px-3 mb-6 md:mb-0">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ borderRadius: "20px", backgroundColor: "#9333EA" }}
                  onClick={() => updatePost(props._id)}
                >
                  Update Post
                </Button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Post;