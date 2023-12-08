import { Fragment } from "react";
import { Card, CardHeader, CardBody, CardFooter, Input, Button } from "@nextui-org/react";
import Link from "next/link";

const Login = () => {
  return (
    <Fragment>
      <div className="dark flex w-full h-screen justify-center items-center">
        <Card className=" w-1/4">
          <CardHeader className="flex justify-center">
            <h1 className="text-xl text-s font-bold">LogIn</h1>
          </CardHeader>
          <CardBody>
            <Input className="my-3" label="UserName" />
            <Input className="mb-3" type="password" label="Password" />
            <Button className="my-3 bg-blue-600 text-medium font-semibold">LogIn</Button>
          </CardBody>
          <CardFooter className=" flex justify-center ">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link href={"/signup"} className="text-blue-600">
                SignUp
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </Fragment>
  );
};

export default Login;
