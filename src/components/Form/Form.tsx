import { SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setFormText } from "../../features/formSlice";
import { FormWrapper, FormBlock, FormLabel, FormP, FormSpan, FormControl, FormField } from "./Form.styled";

import plusIcon from '../../assets/images/plus.png'

export const Form = (props: { createNewDoDo: Function }) => {
  const dispatch = useDispatch()
  const text = useSelector((state: RootState) => state.form.text);

  const formSubmit = (e: SyntheticEvent) => {  // e: SyntheticEvent // e: FormEvent
    e.preventDefault()
    if (props.createNewDoDo(text)) dispatch(setFormText(''))
  }

  const addSpec = (e: SyntheticEvent) => {
    const spec = (e.target as HTMLSpanElement).textContent?.replaceAll(`'`, ``)
    dispatch(setFormText(`${text} ${spec}`))
  }

  return (
    <FormWrapper>
      <FormBlock onSubmit={formSubmit}>
        <FormLabel>
          <FormField type="text" autoComplete="none"
            onChange={e => dispatch(setFormText(e.target.value))}
            value={text}
          />
          <FormControl icon={plusIcon}></FormControl>
        </FormLabel>
      </FormBlock>
      <div>
        <FormP>
          * элементы включающие текст <FormSpan onClick={addSpec}>'no-create'</FormSpan> или без текста не могут быть созданы<br />
          * элементы включающие текст <FormSpan onClick={addSpec}>'no-delete'</FormSpan> не могут быть удалены<br />
          * элементы включающие текст <FormSpan onClick={addSpec}>'no-update'</FormSpan> не могут быть изменены<br />
        </FormP>
      </div>
    </FormWrapper>
  );
}
