const Loading = () => {
  return (
    <div
      className="inline-block justify-center h-12 w-12 animate-loading-spiner 
                  rounded-full border-4 border-dotted border-current border-r-transparent 
                  motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;
