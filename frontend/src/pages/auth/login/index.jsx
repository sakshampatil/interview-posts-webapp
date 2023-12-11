import { Fragment, useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Input, Button } from "@nextui-org/react";
import Link from "next/link";
import { useLoginMutation } from "@/store/services/authApi";
import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/features/authSice";
import { useRouter } from "next/router";

const Login = () => {
  const [login, { data, error, isError, isSuccess, isLoading: isLoginLoading }] =
    useLoginMutation();

  const router = useRouter();
  const dispatch = useAppDispatch();

  const [username, setUserName] = useState("");
  const [usernameError, setUserNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (isError) {
      error?.data?.message.toLowerCase().includes("password")
        ? setPasswordError(error?.data?.message)
        : setUserNameError(error?.data?.message);
    }
  }, [error, isError]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser({ data: data }));
      router.replace("/");
    }
  }, [isSuccess]);

  const handleChangeUsername = (e) => {
    setUserNameError("");
    setUserName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPasswordError("");
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (username === "") {
      setUserNameError("UserName is required");
      return;
    }

    if (password === "" || password.length < 8) {
      setPasswordError("Password is required");
      return;
    }

    let body = {
      username: username,
      password: password,
    };
    login(body);
  };

  return (
    <Fragment>
      <div className="dark flex w-full h-screen justify-center items-center">
        <Card className=" w-1/4">
          <CardHeader className="flex justify-center">
            <h1 className="text-xl text-s font-bold">LogIn</h1>
          </CardHeader>
          <CardBody>
            <Input
              className="my-3"
              label="UserName"
              value={username}
              onChange={handleChangeUsername}
              isInvalid={usernameError === "" ? false : true}
              errorMessage={usernameError}
              isRequired={true}
            />
            <Input
              className="mb-3"
              type="password"
              label="Password"
              value={password}
              onChange={handleChangePassword}
              isInvalid={passwordError === "" ? false : true}
              errorMessage={passwordError}
              isRequired={true}
            />
            <Button
              isLoading={isLoginLoading}
              onClick={handleSubmit}
              className={`my-3 ${
                isSuccess ? "bg-green-600" : "bg-blue-600"
              } text-medium font-semibold`}
            >
              LogIn
            </Button>
          </CardBody>
          <CardFooter className=" flex justify-center ">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link href={"/auth/signup"} className="text-blue-600">
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
