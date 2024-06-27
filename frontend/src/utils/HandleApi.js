import axios from "axios";

const baseUrl = "https://todo-app-mimi-backend.onrender.com";

const getAllToDo = (setToDo) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      console.log("data --->", data);
      setToDo(data);
    })
    .catch((err) => console.log(err));
};

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (todoID, text, setToDo, setText, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: todoID, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id, setToDo) => {
  axios
    .delete(`${baseUrl}/delete`, { data: { _id } })
    .then((response) => {
      console.log("Delete API call successful");
      getAllToDo(setToDo);
    })
    .catch((error) => {
      console.error("Error deleting todo:", error);
    });
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
