import { React } from "../../Utils/CustomUtils";
function Rating({ rating, onClick, style }) {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <span class="material-icons ratingmi" style={{ color: "#39489a" }}>
              star
            </span>
          ) : (
            <span class="material-icons ratingmi" style={{ color: "#39489a" }}>
              star_border
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

export { Rating };
