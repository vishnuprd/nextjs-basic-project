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
  console.log("value", value);

const handleUserClick = (selectedUser) => {
  setSelectedUser(selectedUser);
}
console.log("user", selectedUser);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserData todoData={todoData} handleUserClick={handleUserClick} />
      <Content todoData={todoData} selectedUser={selectedUser} />
    </main>
  );
}
