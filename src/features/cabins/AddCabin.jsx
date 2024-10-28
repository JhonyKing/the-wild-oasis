import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

// export default AddCabin;

/*import Button from 'ui/Button';
import Modal from 'ui/Modal';
import CreateCabinForm from './CreateCabinForm';

function AddCabin() {
  return (
    <Modal>
      <Modal.Toggle opens='new-cabin'>
        <Button>Add new cabin</Button>
      </Modal.Toggle>
      <Modal.Window name='new-cabin'>
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;*/
