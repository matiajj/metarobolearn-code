import CodePlayground from "./CodePlayground.tsx";
import CodeHeader from "./CodeHeader.tsx";
import {useState} from "react";
import CodeSnippets from "./CodeSnippets.tsx";

const CodeScreen = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className={'w-3/5 flex flex-col items-center justify-center box-border'}>
      <CodeHeader active={active} setActive={setActive}/>
      <div className={'bg-sunglow-400 w-full h-[0px] flex-grow pt-2 pb-2.5 z-20 relative'}>
        <CodePlayground />
        <CodeSnippets active={active} />
      </div>
    </div>
  );
};

export default CodeScreen;