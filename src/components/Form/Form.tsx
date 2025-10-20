import { ChangeEvent, FormEvent } from "react";
import "./Form.scss";

export const Form = (props: { createNewDoDo: Function }) => {
  let createText = ''

  const formSubmit = (e: FormEvent) => {
    e.preventDefault()
    // console.log('formSubmit createText: ', createText);
    if(createText) props.createNewDoDo(createText)
  }
  
  const changeText = (e: ChangeEvent<HTMLInputElement>) => {
    createText = e.target.value
    // console.log('changeText createText: ', createText);
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={formSubmit}>
        <label>
          <input type="text" onInput={changeText} />
          <button></button>
        </label>
      </form>
    </div>
  );
}
