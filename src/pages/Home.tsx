import InlineOverflowList from "../shared/components/InlineOverflowList/InlineOverflowList";
import { users } from "../shared/data";
import { IUser } from "../shared/shared.interface";

const HomePage = () => {
  return (
    <div className="py-7">
      <InlineOverflowList
        items={users}
        itemRenderer={(item: IUser) => (
          <div
            className="py-2 px-4 rounded-full bg-white text-black"
            key={item.id}
          >
            {item.firstName} {item.lastName}
          </div>
        )}
        buffer={105}
        showMoreRenderer={({
          onToggleShow,
          showingAll,
          count,
        }) => (
          <button
            onClick={onToggleShow}
            className="py-2 px-4 rounded-full bg-secondary text-white cursor-pointer"
          >
            {showingAll ? "Hide" : `+${count} more`}
          </button>
        )}
      >
        <button
          className="py-2 px-4 rounded-full bg-main text-white cursor-pointer"
          type="button"
        >
          Add Users
        </button>
      </InlineOverflowList>
    </div>
  );
};

export default HomePage;
