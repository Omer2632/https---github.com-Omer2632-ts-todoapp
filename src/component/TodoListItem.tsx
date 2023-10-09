import { IconButton, ListItem, ListItemText } from "@mui/material";
import { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

interface ITodoListItem {
  todo: TodoType;
  deleteTodo: DeleteFn;
  toggleTodo: ToggleFn;
}

const TodoListItem: FC<ITodoListItem> = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <ListItem
      disableGutters
      sx={{ cursor: "pointer", overflow: "hidden" }}
      secondaryAction={
        <IconButton
          aria-label="comment"
          sx={{ "&:hover": { color: "red" } }}
          onClick={() => deleteTodo(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        primary={todo.todo}
        onClick={() => toggleTodo(todo)}
        sx={{ wordWrap: "break-word" }}
      />
    </ListItem>
  );
};

export default TodoListItem;
