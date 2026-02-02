interface IPostProps {
  firstLetter: string;
  name: string;
  time: string;
  message: string;
  setModalUpdate: (value: boolean) => void;
  id: string;
  setIdPost: (value: string) => void;
}
export default function Post({
  firstLetter,
  name,
  time,
  message,
  setModalUpdate,
  id,
  setIdPost,
}: IPostProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-4">
      <div className="flex items-center gap-2 justify-between">
        <div className="flex gap-2">
          <div className="w-10 h-10 rounded-full bg-purple-200 flex justify-center items-center">
            {firstLetter}
          </div>
          <div className="flex flex-col">
            <h5 className="font-medium text-sm">{name}</h5>
            <span className="text-sm">{time}</span>
          </div>
        </div>
        <button
          className="hover:bg-gray-100 row-md border border-gray-50 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={() => {
            setModalUpdate(true);
            setIdPost(id);
          }}
        >
          ...
        </button>
      </div>
      <p>{message}</p>
    </div>
  );
}
