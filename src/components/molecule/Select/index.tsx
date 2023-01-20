import { Label } from 'components/atoms';
import SelectInput from './components/SelectInput';
import SelectLayout from './components/SelectLayout';

const Select = Object.assign(SelectLayout, {
  Label,
  Input: SelectInput,
});

export default Select;
