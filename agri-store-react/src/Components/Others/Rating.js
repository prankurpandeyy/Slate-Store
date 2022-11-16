import { React } from "../../Utils/CustomUtils";
function Rating({ rating, onClick, style }) {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <span class="material-icons cursor-pointer text-indigo-500 ">
              star
            </span>
          ) : (
            <span class="material-icons cursor-pointer text-black">
              star_border
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

export { Rating };
