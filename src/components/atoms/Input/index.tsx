import Label from 'components/atoms/Label';
import InputLayout from './components/InputLayout';
import InputValue from './components/InputValue';
import InputRight from './components/InputRight';
import InputSubMessage from './components/InputSubMessage';

const Input = Object.assign(InputLayout, {
  Label,
  Value: InputValue,
  Right: InputRight,
  SubMessage: InputSubMessage,
});

export default Input;
