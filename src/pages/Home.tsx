import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, Typography } from "@mui/material";
import AddTodoComp from "../component/AddTodoComp";
import TodoList from "../component/TodoList";
import { notify } from "../helper/sweetAlert";
// interface TodoType {
//   todo: string;
//   isDone: boolean;
//   id: string | number;
// }
const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const url: string = import.meta.env.VITE_BASE_URL;
  const getTodos = async () => {
    try {
      const { data } = await axios<TodoType[]>(url);
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };
  // const addTodo=async(text:string)=>{
  //   try {
  //   } catch (error) {
  //   }
  // }
  type AddFn = (text: string) => Promise<void>;
  const addTodo: AddFn = async (text) => {
    try {
      await axios.post(url, { todo: text, isDone: false });
      notify("The todo was created successfully!", "success");
    } catch (error) {
      console.log(error);
      notify("The todo was not created successfully!", "error");
    } finally {
      getTodos();
    }
  };
  const toggleTodo: ToggleFn = async (todo) => {
    try {
      await axios.put(`${url}/${todo.id}`, {
        ...todo,
        isDone: !todo.isDone,
      });
      notify("The todo was created successfully!", "success");
    } catch (error) {
      console.log(error);
      notify("The todo was not created successfully!", "error");
    } finally {
      getTodos();
    }
  };
  const deleteTodo: DeleteFn = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      notify("The todo was created successfully!", "success");
    } catch (error) {
      console.log(error);
      notify("The todo was not created successfully!", "error");
    } finally {
      getTodos();
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <Container>
      <Box
        sx={{
          backgroundImage: `url('https://images.unsplash.com/photo-1547104442-991cb31eaafd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {/* İçerik veya diğer bileşenler buraya gelebilir */}
        <Typography align="center" variant="h2" mt={3} component={"h1"}>
          Todo App with TypeScript
        </Typography>
        <AddTodoComp addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      </Box>
    </Container>
  );
};
export default Home;
