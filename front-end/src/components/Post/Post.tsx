import { FC, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "../../axios";

import { PostDetails } from "../../types/PostDetails";
import { PostProps } from "../../types/PostProps";
import { catergroy } from "../../types/Catergroy";
import { image } from "../../types/Image";
import { UserProps } from "../../types/User";
import Swal from "sweetalert2";

const Post: FC<PostProps> = (props) => {
  // post component
  const [postArray, setPostArray] = useState<PostDetails[]>([]);
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
    </>
  );
};

export default Post;