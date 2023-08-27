import Style from "./Element.module.css";
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
  return (
    <>
      <div className={Style.container} data-theme={theme}>
        <div className={Style.atomicNumber}>{atomicNumber}</div>
        <div className={Style.elementSymbol}>{elementSymbol}</div>
        <div className={Style.elementName}>{elementName}</div>
      </div>
    </>
  );
};

export default Element;
