import Style from "./ElementsModal.module.css";
interface ElementsModalProps {
  name: string;
}
const ElementsModal: React.FC<ElementsModalProps> = ({ name }) => {
  return (
    <div className={Style.container}>
      <div className={`${Style.card} ${Style.modal}`}>{name}</div>
    </div>
  );
};

export default ElementsModal;
