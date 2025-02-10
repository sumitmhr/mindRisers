import { createSlice } from "@reduxjs/toolkit";
import { getBlogsFromLocalStorage, setBlogsToLocalStorage } from "../app/local";




export const blogSlice = createSlice({
  
  name: 'blogSlice',
  initialState: {
    blogs: getBlogsFromLocalStorage(),
  },
  reducers: {

    addBlog: (state, action) => {
      state.blogs.push(action.payload);
      setBlogsToLocalStorage(state.blogs);
    },

    removeBlog: (state, action) => {
      state.blogs.splice(action.payload, 1);
      setBlogsToLocalStorage(state.blogs);
    },

    updateBlog: (state, action) => {
      state.blogs = state.blogs.map((blog) => blog.id === action.payload.id ? action.payload : blog);
      setBlogsToLocalStorage(state.blogs);
    },

  }

});

export const { addBlog, removeBlog, updateBlog } = blogSlice.actions;