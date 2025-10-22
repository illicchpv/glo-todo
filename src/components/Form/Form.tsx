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
    if (props.createNewDoDo(text)) dispatch(setFormText(''))
  }

  const addSpec = (e: SyntheticEvent) => {
    const spec = (e.target as HTMLSpanElement).textContent?.replaceAll(`'`, ``)
    console.log('text: ', text, spec);
    dispatch(setFormText(`${text} ${spec}`))
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
      <div>
        <p>
          * элементы включающие текст <span onClick={addSpec}>'no-create'</span> или без текста не могут быть созданы<br />
          * элементы включающие текст <span onClick={addSpec}>'no-delete'</span> не могут быть удалены<br />
          * элементы включающие текст <span onClick={addSpec}>'no-update'</span> не могут быть изменены<br />
        </p>
      </div>
    </div>
  );
}
