import { Fragment, useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Input, Button } from "@nextui-org/react";
import Link from "next/link";
import { useSignupMutation } from "@/store/services/authApi";
import { useRouter } from "next/router";

const SignUp = () => {
  const [signup, { data, error, isError, isSuccess, isLoading: isSignUpLoading }] =
    useSignupMutation();

  const router = useRouter();

  const [username, setUserName] = useState("");
  const [usernameError, setUserNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (isError) {
      error?.data?.message.toLowerCase().includes("password")
        ? setPasswordError(error?.data?.message)
        : setUserNameError(error?.data?.message);
    }
  }, [error, isError]);

  useEffect(() => {
    if (isSuccess) {
      router.replace("/auth/login");
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

  const handleChangeConfirmPassword = (e) => {
    setPasswordError("");
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (username === "") {
      setUserNameError("UserName is required");
      return;
    }

    if (password === "") {
      setPasswordError("Password is required");
      return;
    }
    if (password.length < 8) {
      setPasswordError("Password should contain min 8 char");
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Passwords does not match");
      return;
    }

    let body = {
      username: username,
      password: password,
    };
    signup(body);
  };

  return (
    <Fragment>
      <div className="dark flex w-full h-screen justify-center items-center">
        <Card className=" w-1/4">
          <CardHeader className="flex justify-center">
            <h1 className="text-xl text-s font-bold">SignUp</h1>
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
              isRequired={true}
            />
            <Input
              className="mb-3"
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              onChange={handleChangeConfirmPassword}
              isInvalid={passwordError === "" ? false : true}
              errorMessage={passwordError}
              isRequired={true}
            />
            <Button
              isLoading={isSignUpLoading}
              onClick={handleSubmit}
              className={`my-3 ${
                isSuccess ? "bg-green-600" : "bg-blue-600"
              } text-medium font-semibold`}
            >
              SignUp
            </Button>
          </CardBody>
          <CardFooter className=" flex justify-center ">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link href={"/auth/login"} className="text-blue-600">
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
