import { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import Header from "./Header";
import Post from "./Post";
import ModalPost from "./ModalPost";
import { IPost } from "../../interfaces/posts";
import { postServiceF } from "../../services/post.service";

export default function Dashboard() {
  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [modalUpdate, setModalUpdate] = useState<boolean>(false);
  const [idPost, setIdPost] = useState<string>("");
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loadingPosts, setLoadingPost] = useState<boolean>(false);
  const [isRefresh, setIsRefresh] = useState<boolean>(false);
  const user = localStorage.getItem("user");

  const getAllPost = async () => {
    setLoadingPost(true);
    try {
      const response = await postServiceF.getAll();
      setPosts(response?.data ?? []);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoadingPost(false);
    }
  };
  useEffect(() => {
    getAllPost();
  }, [isRefresh]);
  return (
    <div className="w-full h-full relative">
      <Header />
      <main className="max-w-[1000px] m-auto mt-10 flex flex-col gap-4">
        <CreatePost setModalCreate={setModalCreate} />
        <div className="flex flex-col gap-4">
          {loadingPosts && <span>loading...</span>}
          {posts.map((post, index) => (
            <Post
              key={index}
              time={post.date}
              firstLetter="J"
              message={post.message}
              name="Jose Cardona"
              setModalUpdate={setModalUpdate}
              id={`${post.id}`}
              setIdPost={setIdPost}
            />
          ))}
        </div>
      </main>
      {modalUpdate && (
        <ModalPost
          setModalPost={setModalUpdate}
          setIsRefresh={setIsRefresh}
          isRefresh={isRefresh}
          type="update"
          id={idPost}
        />
      )}
      {modalCreate && (
        <ModalPost
          setModalPost={setModalCreate}
          setIsRefresh={setIsRefresh}
          isRefresh={isRefresh}
          type="create"
        />
      )}
    </div>
  );
}
