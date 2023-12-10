import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Textarea, Button } from "@nextui-org/react";

const AddComment = () => {
  return (
    <div className="flex justify-center mt-1">
      <Card className="dark w-1/2">
        {/* <CardHeader>
            <h2>Add Comment</h2>
            </CardHeader> */}
        <CardBody>
          <Textarea placeholder="Type your comment..." minRows={3}></Textarea>
        </CardBody>
        <CardFooter className="flex justify-end">
          <Button className="bg-blue-600">Add Comment</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddComment;
