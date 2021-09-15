import React, { FC } from "react";
import styled from "styled-components";
import { IstepperList } from "./stepper";

const Box = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bublik = styled.div<{
  active: boolean;
}>`
  width: 50px;
  height: 50px;
  border: ${(props) => (props.active ? "purple" : "grey")} solid 10px;
  border-radius: 50%;
  transition: border 0.5s ease;
`;

const Text = styled.p``;

const Line = styled.div<{
  active: boolean;
}>`
  height: 10px;
  width: 30px;
  background-color: ${(props) => (props.active ? "purple" : "grey")};
  margin-bottom: 27px;
  transition: background 0.5s ease;
`;

interface Props {
  item: IstepperList;
  activeStep: number;
  removeLne: boolean;
  handleChangeActiveStep: (id: number) => void;
}

export const Step: FC<Props> = ({
  item,
  activeStep,
  removeLne,
  handleChangeActiveStep,
}) => {
  return (
    <Box>
      <Container>
        <Text>{item.name}</Text>

        <Bublik
          id={`bublik-${item.id}}`}
          className="bublik"
          active={item.id <= activeStep}
          onClick={() => handleChangeActiveStep(item.id)}
        />
      </Container>

      {!removeLne && <Line active={item.id <= activeStep} />}
    </Box>
  );
};
