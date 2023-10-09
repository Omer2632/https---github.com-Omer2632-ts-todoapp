import { Box, Button, Container, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

interface IAddTodoComp {
  // addTodo: (text: string) => Promise<void>;
  addTodo: AddFn;
}
const AddTodoComp = ({ addTodo }: IAddTodoComp) => {
  // const [text,setText]=useState<string>("")
  const [text, setText] = useState("");
  const handleClick = () => {
    console.log(text);
    addTodo(text);
    setText("");
  };
  return (
    <Container>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: "center",
          m: { xs: 4, sm: "auto" },
          height: { xs: "120px", sm: "80px" },
        }}
      >
        <TextField
          id="outlined-basic"
          label="NewTodo"
          variant="outlined"
          sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
          inputProps={{ maxLength: 40 }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          onClick={handleClick}
          disabled={!text.trim()}
          sx={{ minWidth: { xs: "100%", sm: "15%", height: "55px", m: 1 } }}
          endIcon={<SaveIcon />}
        >
          Save Todo
        </Button>
      </Box>
    </Container>
  );
};

export default AddTodoComp;
