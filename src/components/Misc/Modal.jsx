export default function Modal({ children, state }) {
  console.log(state);
  return (
    <div className="bg-white relative opacity-100 w-fit h-fit px-10 py-2 shadow-sm rounded-xl">
      {children}
      <div
        onClick={state}
        className="absolute right-[-5px] top-[-5px] text-white flex justify-center items-center rounded-full h-5 w-5 text-sm bg-black"
      >
        X
      </div>
    </div>
  );
}
