import React, { useRef, useEffect, useImperativeHandle, forwardRef } from "react";

function ChildInputComponent(props, ref) {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);
  return <input type="text" name="child input" ref={inputRef} />;
}

const ChildInput = forwardRef(ChildInputComponent);
//ref属性不能传给组件 forwardRef高阶组件包裹
//在组件外部通过ref拿组件内部的属性

function App() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <ChildInput ref={inputRef} />
    </div>
  );
}

export default App