import { Label } from 'components/atoms';
import SelectLayout from './components/SelectLayout';
import SelectInput from './components/SelectInput';

const Select = Object.assign(SelectLayout, {
  Label,
  Input: SelectInput,
});

export default Select;
