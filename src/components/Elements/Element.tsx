import { useEffect, useState } from "react";
import Style from "./Element.module.css";
import ElementsModal from "../ElementsModal/ElementsModal";
interface ElementProps {
  atomicNumber: number;
  elementSymbol: string;
  elementName: string;
  theme: string;
}
const Element: React.FC<ElementProps> = ({
  atomicNumber,
  elementName,
  elementSymbol,
  theme,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const handleContainerClick = () => {
    setOpenModal(true);
  };
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        openModal &&
        !(event.target as HTMLElement).closest(`.${Style.modal}`)
      ) {
        setOpenModal(false);
      }
    };
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openModal]);
  return (
    <>
      <div
        className={Style.container}
        data-theme={theme}
        onClick={handleContainerClick}
      >
        <div className={Style.atomicNumber}>{atomicNumber}</div>
        <div className={Style.elementSymbol}>{elementSymbol}</div>
        <div className={Style.elementName}>{elementName}</div>
      </div>
      {openModal && <ElementsModal name={elementName} />}
    </>
  );
};

export default Element;
