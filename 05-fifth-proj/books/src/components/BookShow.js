import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  return (
    <div className="book-show">
      {book.title}
      <div className="actions">
        <button className="edit" onCLick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default BookShow;
