
import { useState } from "react"
import { InpuntTask } from "./components/InpuntTask"
import { ModalForm } from "./components/ModalForm"

export const App = () => {

const [name, setName] = useState("");
const [modalIsOpen, setModalIsOpen]= useState(true);

const handleCloseModal = () => {
  setModalIsOpen(false);
}
return (
 <>
 <InpuntTask setName={setName} setModalIsOpen={setModalIsOpen} />
  {name && modalIsOpen && (
  <ModalForm name={name} handleCloseModal={handleCloseModal} />
)}
 </>
  )
}
