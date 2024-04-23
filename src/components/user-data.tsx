"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";


export default function UserData({ todoData, handleUserClick,}) {
  return (
    <>
      <div className="flex justify-start mr-[1000px] mt-0">
        <Card>
          <CardHeader className="flex flex-row justify-center w-[300px]">
            <CardTitle>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Users
              </h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-center">
              {todoData?.map((user, index) => (
                <li key={index}>
                  <Button variant="ghost" onClick={() => handleUserClick(user)}>
                    {user.name}
                 
                  </Button>
                </li>
              ))}
            </ul>
            <div>
            </div>
          
             <Button >
           <Link href="/adduser">Add New User</Link>
           
           </Button> 
          </CardContent>
        </Card>
      </div>
    </>
  );
}
