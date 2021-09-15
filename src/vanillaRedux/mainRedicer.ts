const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADDTODO = "ADDTODO";
const DELETETODO = "DELETETODO";
const CHANGETODO = "CHANGETODO";

const initialState = {
  count: 0,
  todoList: ["first", "second"],
};

export const mainReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case ADDTODO: {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    }
    case DELETETODO: {
      const newTodoList = state.todoList.filter(
        (item) => item !== action.payload
      );
      return {
        ...state,
        todoList: newTodoList,
      };
    }
    case CHANGETODO: {
      const newTodoList = state.todoList.map((item) => {
        if (item === action.oldValue) {
          return action.payload;
        }
        return item;
      });

      return {
        ...state,
        todoList: newTodoList,
      };
    }
    default:
      return state;
  }
};

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const addTodo = (payload: string | null) => ({ type: ADDTODO, payload });
export const deleteTodo = (payload: string) => ({ type: DELETETODO, payload });
export const changeTodo = (payload: string | null, oldValue: string) => ({
  type: CHANGETODO,
  payload,
  oldValue,
});
