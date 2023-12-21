import { FC, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "../../axios";
import {
  Box,
  Button,
  Fade,
  Modal
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
          <Box>
            <div className="modal-content mx-3 md:flex-row mb-4">
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