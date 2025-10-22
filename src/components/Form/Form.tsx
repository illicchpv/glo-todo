import { FormEvent, SyntheticEvent, useState } from "react";
import "./Form.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setFormText } from "../../features/formSlice";

export const Form = (props: { createNewDoDo: Function }) => {
  const dispatch = useDispatch()  
  const text = useSelector((state: RootState) => state.form.text);

  const formSubmit = (e: SyntheticEvent) => {  // e: SyntheticEvent // e: FormEvent
    e.preventDefault()
    if (text) {
      props.createNewDoDo(text)
      dispatch(setFormText(''))
    }
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={formSubmit}>
        <label>
          <input type="text" autoComplete="none"
            onChange={e => dispatch(setFormText(e.target.value))}
            value={text}
          />
          <button></button>
        </label>
      </form>
    </div>
  );
}
