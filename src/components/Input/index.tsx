import React, { InputHTMLAttributes } from 'react'
import { SearchBox } from './styles';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props) => {
  return (
    <SearchBox onChange={props.onChange} {...props} />
  )
}


export default Input;