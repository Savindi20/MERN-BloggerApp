import { FC, useState } from "react";
import { PostProps } from "../../types/PostProps";
import { catergroy } from "../../types/Catergroy";
import { UserProps } from "../../types/User";

const Post: FC<PostProps> = (props) => {
  const [categoryList, setCategoryList] = useState<catergroy[]>([]);
  const [userList, setUserList] = useState<UserProps[]>([]);

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