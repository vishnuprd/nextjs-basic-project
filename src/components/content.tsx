import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Content({ selectedUser }) {
  return (
    <div className="flex flex-col w-[600px] justify-start mt-0  fixed">
      <Card>
        <CardHeader className="flex flex-col  h-[600px]  ">
          <CardTitle>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight lg:text-2xl text-center">
              User Details
            </h3>
            </CardTitle>
            {selectedUser && (
              <div>
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
     Selected User Details
    </h2>
                <ul>
                <p className="leading-7 [&:not(:first-child)]:mt-6 ">
                  <li><strong>Name:</strong> {selectedUser.name}</li>
                  <br/>
                  <li><strong>Username:</strong> {selectedUser.username}</li>
                  <br/>
                  <li><strong>Email:</strong> {selectedUser.email}</li>
                  <br/>
                  <li><strong>Address:</strong> {selectedUser.address.street}, {selectedUser.address.suite}, {selectedUser.address.city}, {selectedUser.address.zipcode}</li>
                  <br/>
                  <li><strong>Geo:</strong> ({selectedUser.address.geo.lat}, {selectedUser.address.geo.lng})</li>
                  <br/>
                  <li><strong>Phone:</strong> {selectedUser.phone}</li>
                  <br/>
                  <li><strong>Website:</strong> {selectedUser.website}</li>
                  <br/>
                  <li><strong>Company:</strong> {selectedUser.company.name} ({selectedUser.company.catchPhrase}) - {selectedUser.company.bs}</li>
                  <br/>
                  </p>
                </ul>
              </div>
            )}
         
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
}
