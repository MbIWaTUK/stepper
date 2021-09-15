import {
  ActionCreatorWithoutPayload,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  todoList: ["1111", "2222"],
};

export const incrementToolkit: ActionCreatorWithoutPayload<"INCREMENTTOOLKIT"> =
  createAction("INCREMENTTOOLKIT");
export const decrementToolkit: ActionCreatorWithoutPayload<"DECREMENTTOOLKIT"> =
  createAction("DECREMENTTOOLKIT");
export const addTodoToolkit: any = createAction(
  "ADDTODOTOOLKIT",
  function prepare(text: string) {
    return {
      payload: {
        text,
      },
    };
  }
);
export const deleteTodoToolkit: any = createAction(
  "DELETETODOTOOLKIT",
  function prepare(text: string) {
    return {
      payload: {
        text,
      },
    };
  }
);
export const changeTodoToolkit: any = createAction(
  "CHANGETODOTOOLKIT",
  function prepare(newText: string, oldText: string) {
    return {
      payload: {
        newText,
        oldText,
      },
    };
  }
);

export default createReducer(initialState, {
  [incrementToolkit as any]: (state) => {
    state.count = state.count + 1;
  },
  [decrementToolkit as any]: (state) => {
    state.count = state.count - 1;
  },
  [addTodoToolkit as any]: (state, value) => {
    console.log("++", value);

    state.todoList = [...state.todoList, value.payload.text];
  },
  [deleteTodoToolkit as any]: (state, value) => {
    const newTodoList = state.todoList.filter(
      (item) => item !== value.payload.text
    );

    state.todoList = newTodoList;
  },
  [changeTodoToolkit as any]: (state, value) => {
    console.log(value);

    const newTodoList = state.todoList.map((item) => {
      if (item === value.payload.oldText) {
        return value.payload.newText;
      }
      return item;
    });
    state.todoList = newTodoList;
  },
});
