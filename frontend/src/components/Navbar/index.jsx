import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { Input, Select, SelectItem, Button } from "@nextui-org/react";
import { MdLogout } from "react-icons/md";
import { GoDotFill, GoSearch } from "react-icons/go";
import { logout } from "@/store/features/authSice";
import { useRouter } from "next/router";

const Navbar = ({ onChangeSearch, searchVal }) => {
  const userName = useAppSelector((state) => state?.auth?.user?.userName);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [value, setValue] = useState(new Set(["Posts"]));

  const handleSearchChange = (e) => {
    onChangeSearch(e.target.value);
  };

  const onLogout = () => {
    dispatch(logout());
    router.replace("/auth/login");
  };
  return (
    <div className="flex justify-between p-3 items-center bg-custom-black   w-full">
      {userName ? (
        <div className="flex-col">
          <div className="text-2xl font-semibold text-blue-600">{userName}</div>
          <div className="text-[11px] text-green-500 flex items-center">
            <span>
              <GoDotFill />
            </span>
            <span>{`Active`}</span>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {router.pathname == "/" && (
        <div className="flex">
          <Input
            className={`dark w-80 `}
            placeholder="Type to search..."
            startContent={<GoSearch />}
            size="sm"
            value={searchVal}
            onChange={handleSearchChange}
          />
          <div className="mx-2">
            <Select
              className={"dark w-32"}
              popoverProps={{
                classNames: {
                  base: "dark ",
                },
              }}
              size="sm"
              selectedKeys={value}
              onSelectionChange={setValue}
            >
              <SelectItem className="dark" key={"Posts"} value={"Posts"}>
                {"Posts"}
              </SelectItem>
              <SelectItem className="dark" key={"Comments"} value={"Comments"}>
                {"Comments"}
              </SelectItem>
            </Select>
          </div>
        </div>
      )}
      <div className="flex items-center">
        {router.pathname == "/" && (
          <Button
            onClick={() => router.push("posts/createPost")}
            className="bg-blue-600 text-white font-bold text-md"
          >
            Create Post
          </Button>
        )}
        <MdLogout onClick={onLogout} className="ml-2 text-xl text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
