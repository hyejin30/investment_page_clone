import Buttons from './components/Buttons';
import Contents from './components/Contents';
import Dimmed from './components/Dimmed';
import Description from './components/Description';
import Layout from './components/Layout';
import Title from './components/Title';
import Trigger from './components/Trigger';
import ModalButton from './components/Button';

const Modal = Object.assign(Layout, {
  Trigger,
  Dimmed,
  Title,
  Contents,
  Description,
  Buttons,
  Button: ModalButton,
});

export default Modal;
