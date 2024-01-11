import { Document,Schema, model } from "mongoose";

export interface IPost extends Document { // IPost is the interface of the post
    imageId: String;
    title: String;
    caption: String;
    description: String;
    date?: String;
    userName?: String;
    tags: String[];
    categoryId: String;
}

const PostSchema = new Schema<IPost>( // PostSchema is the schema of the post
    {
        imageId: { // image is the url of the image
            type: String,
            required: true,
        },
        title: { // title is the heading of the post
            type: String,
            required: true,
        },
        caption: {  // caption is the short description of the post
            type: String,
            required: true,
        },
        description: { // description is the long description of the post
            type: String,
            required: true,
        },
        date: { // date is the date of the post
            type: String,
            required: true,
        },
        userName: { // userName is the name of the user who posted the post
            type: String,
            required: true,
        },
        tags: [ // tags is the array of tags of the post
            {
                type: String,
                required: true,
            },
        ],
        categoryId: { // categoryId is the id of the category of the post 
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);      

export const Post = model<IPost>("Post", PostSchema);