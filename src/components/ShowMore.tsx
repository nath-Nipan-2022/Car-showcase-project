import { ShowMoreProps } from "../types";
import Button from "./Button";

const ShowMore = ({ hasMore, onClick }: ShowMoreProps) => {
  return (
    <div className="w-full flex-center gap-4 mt-10">
      {hasMore && (
        <Button
          title="Show More"
          variant="primary"
          size="small"
          icon="/arrow-down.svg"
          iconPosition="right"
          iconStyle="group-hover:translate-y-2 transition"
          className="py-[12px] px-[24px]"
          onClick={onClick}
        />
      )}
    </div>
  );
};
export default ShowMore;
