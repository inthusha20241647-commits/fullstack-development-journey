import ReactDOM from "react-dom/client";
import CounterApp from "./components/01.CounterApp";
import RandomNumber from "./components/02.RandomNumber";
import FormComponent from "./components/03.FormComponent";
import TwoInputForm from "./components/04.TwoInputForm";
import AddTwoNumbers from "./components/05.AddTwoNumbers";
import ShoppingList from "./components/ShoppingList";
import ChangeColor from "./components/07.ChangeColor";
import List from "./components/08.List";
import Login from "./components/09.Login";
import Todo from "./components/10.todo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <CounterApp />
    <RandomNumber />
    <FormComponent />
    <TwoInputForm />
    <AddTwoNumbers />
    <ShoppingList />
    <ChangeColor />
    <List />
    <Login />
    <Todo/>
  </>,
);
