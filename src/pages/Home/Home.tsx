import Element from "../../components/Elements/Element";
import Navbar from "../../components/Navbar";
import Style from "./Home.module.css";
interface HomeProps {
  name: string;
  atomic_number: number;
  discovered_by: string;
  discovred_date: string;
  properties: string;
  symbol: string;
  category: string;
}
const Home: React.FC<{ elements: HomeProps[] }> = (ele) => {
  const elements = ele.elements;
  return (
    <>
      <div className={Style.container}>
        <Navbar />
        <div className={Style.wrapper}>
          <div className={Style.parent}>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}>1</div>
            <div className={Style.itemContent}>2</div>
            <div className={Style.itemContent}>3</div>
            <div className={Style.itemContent}>4</div>
            <div className={Style.itemContent}>5</div>
            <div className={Style.itemContent}>6</div>
            <div className={Style.itemContent}>7</div>
            <div className={Style.itemContent}>8</div>
            <div className={Style.itemContent}>9</div>
            <div className={Style.itemContent}>10</div>
            <div className={Style.itemContent}>11</div>
            <div className={Style.itemContent}>12</div>
            <div className={Style.itemContent}>13</div>
            <div className={Style.itemContent}>14</div>
            <div className={Style.itemContent}>15</div>
            <div className={Style.itemContent}>16</div>
            <div className={Style.itemContent}>17</div>
            <div className={Style.itemContent}>18</div>
            <div className={Style.itemContent}>1</div>
            <div className={Style.itemContent}>
              <Element
                atomicNumber={elements[0].atomic_number}
                elementSymbol={elements[0].symbol}
                elementName={elements[0].name}
                theme={elements[0].category}
              />
            </div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}>
              <Element
                atomicNumber={elements[1].atomic_number}
                elementSymbol={elements[1].symbol}
                elementName={elements[1].name}
                theme={elements[1].category}
              />
            </div>
            <div className={Style.itemContent}>2</div>
            <div className={Style.itemContent}>
              <Element
                atomicNumber={elements[2].atomic_number}
                elementSymbol={elements[2].symbol}
                elementName={elements[2].name}
                theme={elements[2].category}
              />
            </div>
            <div className={Style.itemContent}>
              <Element
                atomicNumber={elements[3].atomic_number}
                elementSymbol={elements[3].symbol}
                elementName={elements[3].name}
                theme={elements[3].category}
              />
            </div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}>
              <Element
                atomicNumber={elements[4].atomic_number}
                elementSymbol={elements[4].symbol}
                elementName={elements[4].name}
                theme={elements[4].category}
              />
            </div>
            <div className={Style.itemContent}>
              <Element
                atomicNumber={elements[5].atomic_number}
                elementSymbol={elements[5].symbol}
                elementName={elements[5].name}
                theme={elements[5].category}
              />
            </div>
            <div className={Style.itemContent}>
              <Element
                atomicNumber={elements[6].atomic_number}
                elementSymbol={elements[6].symbol}
                elementName={elements[6].name}
                theme={elements[6].category}
              />
            </div>
            <div className={Style.itemContent}>
              <Element
                atomicNumber={elements[7].atomic_number}
                elementSymbol={elements[7].symbol}
                elementName={elements[7].name}
                theme={elements[7].category}
              />
            </div>
            <div className={Style.itemContent}>
              <Element
                atomicNumber={elements[8].atomic_number}
                elementSymbol={elements[8].symbol}
                elementName={elements[8].name}
                theme={elements[8].category}
              />
            </div>
            <div className={Style.itemContent}>
              <Element
                atomicNumber={elements[9].atomic_number}
                elementSymbol={elements[9].symbol}
                elementName={elements[9].name}
                theme={elements[9].category}
              />
            </div>
            <div className={Style.itemContent}>3</div>
            {elements.slice(10, 12).map((e, index) => (
              <div className={Style.itemContent} key={index}>
                <Element
                  atomicNumber={e.atomic_number}
                  elementSymbol={e.symbol}
                  elementName={e.name}
                  theme={e.category}
                />
              </div>
            ))}
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            {elements.slice(12, 18).map((e, index) => (
              <div className={Style.itemContent} key={index}>
                <Element
                  atomicNumber={e.atomic_number}
                  elementSymbol={e.symbol}
                  elementName={e.name}
                  theme={e.category}
                />
              </div>
            ))}
            <div className={Style.itemContent}>4</div>
            {elements.slice(18, 36).map((e, index) => (
              <div className={Style.itemContent} key={index}>
                <Element
                  atomicNumber={e.atomic_number}
                  elementSymbol={e.symbol}
                  elementName={e.name}
                  theme={e.category}
                />
              </div>
            ))}
            <div className={Style.itemContent}>5</div>
            {elements.slice(36, 54).map((e, index) => (
              <div className={Style.itemContent} key={index}>
                <Element
                  atomicNumber={e.atomic_number}
                  elementSymbol={e.symbol}
                  elementName={e.name}
                  theme={e.category}
                />
              </div>
            ))}
            <div className={Style.itemContent}>6</div>
            {elements.slice(54, 57).map((e, index) => (
              <div className={Style.itemContent} key={index}>
                <Element
                  atomicNumber={e.atomic_number}
                  elementSymbol={e.symbol}
                  elementName={e.name}
                  theme={e.category}
                />
              </div>
            ))}
            {elements.slice(71, 86).map((e, index) => (
              <div className={Style.itemContent} key={index}>
                <Element
                  atomicNumber={e.atomic_number}
                  elementSymbol={e.symbol}
                  elementName={e.name}
                  theme={e.category}
                />
              </div>
            ))}
            <div className={Style.itemContent}>7</div>
            {elements.slice(86, 89).map((e, index) => (
              <div className={Style.itemContent} key={index}>
                <Element
                  atomicNumber={e.atomic_number}
                  elementSymbol={e.symbol}
                  elementName={e.name}
                  theme={e.category}
                />
              </div>
            ))}
            {elements.slice(103, 118).map((e, index) => (
              <div className={Style.itemContent} key={index}>
                <Element
                  atomicNumber={e.atomic_number}
                  elementSymbol={e.symbol}
                  elementName={e.name}
                  theme={e.category}
                />
              </div>
            ))}
          </div>
          <div className={Style.secondParent}>
            <div className={Style.itemContent}>6*</div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>

            {elements.slice(57, 71).map((e, index) => (
              <div className={Style.itemContent} key={index}>
                <Element
                  atomicNumber={e.atomic_number}
                  elementSymbol={e.symbol}
                  elementName={e.name}
                  theme={e.category}
                />
              </div>
            ))}
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}>7**</div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            <div className={Style.itemContent}></div>
            {elements.slice(89, 103).map((e, index) => (
              <div className={Style.itemContent} key={index}>
                <Element
                  atomicNumber={e.atomic_number}
                  elementSymbol={e.symbol}
                  elementName={e.name}
                  theme={e.category}
                />
              </div>
            ))}
            <div className={Style.itemContent}>38</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
