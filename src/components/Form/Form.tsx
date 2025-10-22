import { FormEvent, SyntheticEvent, useState } from "react";
import "./Form.scss";

export const Form = (props: { createNewDoDo: Function }) => {
  const [text, setText] = useState<string>('')

  const formSubmit = (e: SyntheticEvent) => {  // e: SyntheticEvent // e: FormEvent
    e.preventDefault()
    // console.log('formSubmit createText: ', createText);
    if (text) {
      props.createNewDoDo(text)
      setText('')
    }
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={formSubmit}>
        <label>
          <input type="text" autoComplete="none"
            onChange={e => setText(e.target.value)}
            value={text}
          />
          <button></button>
        </label>
      </form>
    </div>
  );
}
