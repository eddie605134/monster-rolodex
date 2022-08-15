import './search-box.style.css'
import { ChangeEvent, ChangeEventHandler } from 'react'

type SearhBoxProps = {
  className: string;
  placeholder?: string;
  func?: ChangeEventHandler;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void ;
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearhBoxProps) => {
  return <input 
    className={ className }
    type="search" 
    placeholder={ placeholder }
    onChange={ onChangeHandler }
  />
}

export default SearchBox