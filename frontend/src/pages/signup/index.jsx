import { Fragment } from "react";
import { Card, CardHeader, CardBody, CardFooter, Input, Button } from "@nextui-org/react";
import Link from "next/link";

const SignUp = () => {
  return (
    <Fragment>
      <div className="dark flex w-full h-screen justify-center items-center">
        <Card className=" w-1/4">
          <CardHeader className="flex justify-center">
            <h1 className="text-xl text-s font-bold">SignUp</h1>
          </CardHeader>
          <CardBody>
            <Input className="my-3" label="UserName" />
            <Input className="mb-3" type="password" label="Password" />
            <Input className="mb-3" type="password" label="Confirm Password" />
            <Button className="my-3 bg-blue-600 text-medium font-semibold">SignUp</Button>
          </CardBody>
          <CardFooter className=" flex justify-center ">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link href={"/login"} className="text-blue-600">
                LogIn
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </Fragment>
  );
};

export default SignUp;
