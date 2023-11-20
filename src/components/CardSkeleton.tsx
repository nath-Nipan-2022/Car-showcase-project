const CardSkeleton = () => {
  return (
    <div className="car-card gap-6">
      <div className="w-full h-10 bg-black/10 rounded-md"></div>
      <div className="w-1/5 h-10 bg-black/10 rounded-md"></div>
      <div className="w-full bg-black/10 rounded-md h-[240px]"></div>
      <div className="flex justify-between w-full">
        <div className="w-1/5 h-10 bg-black/10 rounded-md"></div>
        <div className="w-1/5 h-10 bg-black/10 rounded-md"></div>
        <div className="w-1/5 h-10 bg-black/10 rounded-md"></div>
      </div>
    </div>
  );
};
export default CardSkeleton;
