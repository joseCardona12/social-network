import { X } from "lucide-react";
import { useState } from "react";
import { postServiceF } from "../../services/post.service";
import { useModalMessage } from "../../global-state/modalMessage";

interface IModalPostProps {
  setModalPost: (value: boolean) => void;
  isRefresh: boolean;
  setIsRefresh: (value: boolean) => void;
  type: "update" | "create";
  id?: string;
}
export default function ModalPost({
  setModalPost,
  setIsRefresh,
  isRefresh,
  type = "create",
  id,
}: IModalPostProps) {
  const [message, setMessage] = useState<string>("");
  const [loadingCreate, setLoadingCreate] = useState<boolean>(false);
  const [loadingUpdate, setLoadingUpdate] = useState<boolean>(false);
  const { setModalMessage } = useModalMessage();
  const date = "27-01";
  const user = JSON.parse(localStorage.getItem("user") ?? "");

  const handleUpdate = async () => {
    setLoadingUpdate(true);
    try {
      const response = await postServiceF.updatePost(
        message,
        user?.id,
        id ?? "",
      );
      setIsRefresh(!isRefresh);
      setModalMessage({
        code: 0,
        color: "green",
        message: response?.message ?? "Success to update post",
        state: true,
        title: "Success",
      });
      setModalPost(false);
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoadingUpdate(false);
    }
  };

  const handleCreate = async () => {
    setLoadingCreate(true);
    try {
      const response = await postServiceF.createPost(message, user?.id);
      setIsRefresh(!isRefresh);
      setModalMessage({
        code: 0,
        color: "green",
        message: response?.message ?? "Success to create post",
        state: true,
        title: "Success",
      });
      setModalPost(false);
      console.log("response", response);
    } catch (error) {
    } finally {
      setLoadingCreate(false);
    }
  };
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/20 flex justify-center items-center">
      <div className="bg-white rounded-xl w-[50%]">
        <div className="flex justify-between items-center p-4">
          <h4 className="text-xl">
            {type === "create" ? "Create Post" : "Update Post"}
          </h4>
          <button onClick={() => setModalPost(false)}>
            <X />
          </button>
        </div>
        <div className="w-full h-[1px] bg-gray-200"></div>
        <div className="p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-purple-200"></div>
              <h5>JOSE</h5>
            </div>
            <span className="text-sm ">Date: {date}</span>
          </div>
          <textarea
            name=""
            id=""
            className="w-full text-gray-500 outline-none border border-gray-100 rounded-md p-1"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What's on your mind?"
          ></textarea>
        </div>
        <div className="w-full h-[1px] bg-gray-200"></div>
        <div className="flex justify-end p-4 items-center gap-2">
          <button
            className="bg-gray-100 p-2 rounded-md pl-4 pr-4"
            onClick={() => setModalPost(false)}
          >
            Cancel
          </button>
          <button
            className="bg-purple-200 p-2 rounded-md pl-4 pr-4"
            onClick={() => {
              if (type === "create") {
                handleCreate();
              } else {
                handleUpdate();
              }
            }}
            disabled={loadingCreate}
          >
            {loadingCreate
              ? "Loading..."
              : type === "create"
                ? "Post"
                : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
}
