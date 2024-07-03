import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import counterStore, { CounterAction } from "../store";

function Controls() {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const increment = () => {
    dispatch(CounterAction.increment());
  };

  const decrement = () => {
    dispatch(CounterAction.decrement());
  };

  // action was dispatched to reducer with type and payload
  const add = () => {
    dispatch(
      CounterAction.add({
        // action was dispatched to reducer with type and payload
        Number: inputElement.current.value,
      })
    );
    inputElement.current.value = "";
  };

  const Substract = () => {
    dispatch(
      CounterAction.substract({
        Number: inputElement.current.value,
      })
    );
    inputElement.current.value = "";
  };

  const PrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary" onClick={increment}>
          +1
        </button>

        <button type="button" className="btn btn-success" onClick={decrement}>
          -1
        </button>

        <button
          type="button"
          className="btn btn-warning"
          onClick={PrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          className="number-input"
          placeholder="Enter Number"
          ref={inputElement}
        />

        <button type="button" className="btn btn-info" onClick={add}>
          Add
        </button>

        <button type="button" className="btn btn-danger" onClick={Substract}>
          Substract
        </button>
      </div>
    </>
  );
}

export default Controls;
