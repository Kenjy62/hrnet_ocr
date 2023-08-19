export default function Button({ children }) {
  return (
    <div className="flex justify-center">
      <button className="bg-red-400 rounded-md w-fit py-1 px-8 my-3">
        {children}
      </button>
    </div>
  );
}
