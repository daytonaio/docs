import {useState, isValidElement, cloneElement, useMemo} from 'react';

export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState("1");

  const element = useMemo(
    () =>
      (isValidElement(children) &&
        cloneElement(children, {
          ...children.props,
          activeTab,
          setActiveTab
        })) ||
      null,
    [children, activeTab, setActiveTab],
  );
  return (
    <div className='tabs'>
      {element}      
    </div>
  )
};