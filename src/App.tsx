import logo from "./logo.svg";
import "./App.css";
import { Stepper } from "./components/stepper";
import { useState } from "react";
import {
  addTodo,
  changeTodo,
  decrement,
  deleteTodo,
  increment,
} from "./vanillaRedux/mainRedicer";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoToolkit,
  changeTodoToolkit,
  decrementToolkit,
  deleteTodoToolkit,
  incrementToolkit,
} from "./toolkitRedux/toolkitReducer";
import { fetchGithubList } from "./vanillaRedux/actions/fetchGithubots";
import { setIsLoading } from "./vanillaRedux/githubReducer";
import { fetchSagaList, setSagaList } from "./saga/sagaReducer";

const App = () => {
  const [count, setCount] = useState<number>(2);

  const handleClick = (count: any) => {
    setCount(count.target.value);
  };
  const dispatch = useDispatch();

  // VANILLA
  // const countRedux = useSelector((state: any) => state.main.count);
  // const todoList = useSelector((state: any) => state.main.todoList);

  // TOOLKIT
  // const countReduxToolkit = useSelector((state: any) => state.toolkit.count);
  // const todoListToolkit = useSelector((state: any) => state.toolkit.todoList);

  // async data
  // const handleFetchGithubList = async () => {
  //   dispatch(fetchGithubList());
  // };
  // const isLoading = useSelector((state: any) => state.github.isLoading);
  // const githubList = useSelector((state: any) => state.github.githubList);

  // SAGA LIST
  const sagaList = useSelector((state: any) => state.saga.sagaList);
  return (
    <div className="App">
      <header className="App-header">
        {/* <select onChange={(event) => handleClick(event)}>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>

        <Stepper count={count} /> */}

        {/* VANILLA */}
        {/* <div style={{ display: "flex" }}>
          <button onClick={() => dispatch(increment())}> + </button>
          <button onClick={() => dispatch(decrement())}> - </button>
          <span>{countRedux}</span>
        </div>
<button onClick={() => dispatch(addTodo(prompt()))}>add todo</button>
<ul>
          {todoList &&
            todoList.map((item: string) => (
              <div style={{ display: "flex" }}>
                <li onClick={() => dispatch(deleteTodo(item))}>{item}</li>

                <button
                  onClick={() =>
                    dispatch(changeTodo(prompt(undefined, item), item))
                  }
                >
                  change
                </button>
              </div>
            ))}
        </ul> */}

        {/* TOOLKIT */}

        {/* <div style={{ display: "flex" }}>
          <button onClick={() => dispatch(incrementToolkit())}> + </button>
          <button onClick={() => dispatch(decrementToolkit())}> - </button>
          <span>{countReduxToolkit}</span>
        </div>

        <button onClick={() => dispatch(addTodoToolkit(prompt()))}>
          add todo toolkit
        </button>

        <ul>
          {todoListToolkit &&
            todoListToolkit.map((item: string) => (
              <div style={{ display: "flex" }}>
                <li onClick={() => dispatch(deleteTodoToolkit(item))}>
                  {item}
                </li>

                <button
                  onClick={() =>
                    dispatch(changeTodoToolkit(prompt(undefined, item), item))
                  }
                >
                  change
                </button>
              </div>
            ))}
        </ul> */}

        {/* ASYNC LIST */}
        {/* <button onClick={handleFetchGithubList}>FETCH GITHUB</button>
        {isLoading && <h1>LOADING GITHUB</h1>}
        {githubList && githubList.map((item: any) => <span>{item.name}</span>)} */}

        {/* SAGA LIST */}
        <button onClick={() => dispatch(fetchSagaList())}>SAGA LIST</button>
        {sagaList && sagaList.map((item: any) => <span>{item.name}</span>)}
      </header>
    </div>
  );
};

export default App;
