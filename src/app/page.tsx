"use client";
import Image from "next/image";
import UserData from "../components/user-data";
import Content from "../components/content";
import React, { useState } from "react";
import { useQuery,useMutation,useQueryClient } from "@tanstack/react-query";

export default function Home() {
  const [value, setValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);
 const [selectedUser, setSelectedUser] = React.useState(null);
 const [edit, setEdit] = React.useState(null);
const [deleteid, setDeleteId] = React.useState(null);
  const { data: todoData, isLoading, isError } = useQuery<any>({ 
      queryKey: ['todos'], 
      queryFn: () => fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
  });

 
  if (isLoading) {
      return (
          <div className="flex items-center justify-center">It is Loading...</div>
      );
  }

  if (isError) {
      return (
          <div className="flex items-center justify-center">An error occurred: {isError.message}</div>
      );
  }


  const handleChange = (e) => {
      setValue(e.target.value);
  }
const handleUserClick = (selectedUser) => {
  setSelectedUser(selectedUser);
}
console.log("user", selectedUser);



const handleEdit=(name,username,email,address,geo,phone,website,company)=>{
  setEdit(name,username,email,address,geo,phone,website,company);

}

const handleDelete = () => {
  setDeleteId(selectedUser);
}
console.log("delete", deleteid);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserData todoData={todoData} handleUserClick={handleUserClick} />
      <Content todoData={todoData} selectedUser={selectedUser} handleEdit={handleEdit} handleDelete={handleDelete}/>
    </main>
  );
}
