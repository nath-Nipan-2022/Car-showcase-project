const CardSkeleton = () => {
  const skeletonClassName = "bg-black/10 dark:bg-primary-blue/20 rounded-md";

  return (
    <div className="car-card gap-6">
      <div className={`w-1/2 h-9 ${skeletonClassName}`}></div>
      <div className={`w-1/5 h-9 ${skeletonClassName}`}></div>
      <div className={`w-full h-[240px] ${skeletonClassName}`}></div>
      <div className="flex justify-between w-full">
        <div className={`w-1/5 h-9 ${skeletonClassName}`}></div>
        <div className={`w-1/5 h-9 ${skeletonClassName}`}></div>
        <div className={`w-1/5 h-9 ${skeletonClassName}`}></div>
      </div>
    </div>
  );
};
export default CardSkeleton;
