"use client";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios"; 

const AddUser = () => {
    const [formData, setFormData] = React.useState({
        name: "",
        username: "",
        email: "",
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        lat: "",
        lng: "",
        phone: "",
        website: "",
        companyName: "",
        catchPhrase: "",
        bs: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    console.log("formData", formData);
  

    const mutation = useMutation({
        mutationFn: async  (newTodo) => {
        const data= await axios.post('https://jsonplaceholder.typicode.com/users', newTodo)
        console.log("data", data);
    },
      })
      
    // const mutation = useMutation<any, unknown, any, unknown>(
    //      (newUserData: any) => {
    //       try {
    //         const response = await axios.post('/api/users', newUserData);
    //         return response.data;
    //       } catch (error) {
    //         throw new Error(`Error in mutation: ${error}`);
    //       }
    //     },
    //     {
          
    //     }
    //   );
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await mutation.mutate(formData);
            // // setFormData({
            // //     name: "",
            // //     username: "",
            // //     email: "",
            // //     street: "",
            // //     suite: "",
            // //     city: "",
            // //     zipcode: "",
            // //     lat: "",
            // //     lng: "",
            // //     phone: "",
            // //     website: "",
            // //     companyName: "",
            // //     catchPhrase: "",
            // //     bs: "",
            // });

            // alert("User created successfully");
        } catch (error) {

            console.error("Error:", error);
            alert("Failed to create user");
        }
    };

    mutation.isError ? 
            console.log(mutation.error.message)
          : null
   
    return (
        
        <div className="grid grid-cols-2 gap-4 ">
            <div className="flex flex-col space-y-1.5 items-center justify-center w-[700px] ml-[400px] mt-[50px]">
                <Card>
                    <CardHeader className="flex flex-col h-[520px]">
                        <CardTitle align="center">User Details</CardTitle>
                        <br/>
                        <form method="post" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your Name" />
                            <Input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Enter your Username" />
                            <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your Email" />
                            <Input type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Enter your Street name" />
                            <Input type="text" name="suite" value={formData.suite} onChange={handleChange} placeholder="Enter your suite" />
                            <Input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Enter your city name" />
                            <Input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} placeholder="Enter your Zipcode code here" />
                            <Input type="text" name="lat" value={formData.lat} onChange={handleChange} placeholder="Enter your lat here" />
                            <Input type="text" name="lng" value={formData.lng} onChange={handleChange} placeholder="Enter your lng here" />
                            <Input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number here" />
                            <Input type="text" name="website" value={formData.website} onChange={handleChange} placeholder="Enter your website here" />
                            <Input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Enter your company name here" />
                            <Input type="text" name="catchPhrase" value={formData.catchPhrase} onChange={handleChange} placeholder="Enter your catch phrase here" />
                            <Input type="text" name="bs" value={formData.bs} onChange={handleChange} placeholder="Enter your bs here" />
                            <Button type="submit" >save</Button>
                            <Button variant="destructive">Cancel</Button>
                        </form>
                    </CardHeader>
                    <CardContent></CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AddUser;
