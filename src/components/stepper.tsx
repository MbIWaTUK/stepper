import React, { FC, useEffect, useState } from "react";
import { Step } from "./step";

interface Props {
  count: number;
}

export interface IstepperList {
  id: number;
  name: string;
}

const stepperList: IstepperList[] = [
  {
    id: 1,
    name: "0",
  },
  {
    id: 2,
    name: "1",
  },
  {
    id: 3,
    name: "2",
  },
  {
    id: 4,
    name: "3",
  },
  {
    id: 5,
    name: "4",
  },
];

export const Stepper: FC<Props> = ({ count }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [newList, setNewList] = useState<null | IstepperList[]>(null);

  const handleChangeActiveStep = (id: number) => {
    const leftItem =
      newList && newList[activeStep - 2] && newList[activeStep - 2].id;
    const rightItem = newList && newList[activeStep] && newList[activeStep].id;
    const currentItem = newList && newList[id - 1] && newList[id - 1].id;

    if (
      leftItem &&
      rightItem &&
      (currentItem === rightItem || currentItem === leftItem)
    ) {
      console.log("++++");
      setActiveStep(id);
    }

    if (!leftItem && currentItem === rightItem) {
      setActiveStep(id);
    }

    if (!rightItem && currentItem === leftItem) {
      setActiveStep(id);
    }
  };

  useEffect(() => {
    const list = [];

    for (let i = 0; i < count; i++) {
      const item = {
        id: i + 1,
        name: "test",
      };

      list.push(item);
    }
    setActiveStep(1);
    setNewList(list);
  }, [count]);

  return (
    <div style={{ display: "flex" }}>
      {newList &&
        newList.map((item, index) => (
          <Step
            key={item.id}
            item={item}
            activeStep={activeStep}
            removeLne={newList.length - 1 === index}
            handleChangeActiveStep={(id) => handleChangeActiveStep(id)}
          />
        ))}
    </div>
  );
};
