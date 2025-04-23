import { Col, Slider, InputNumberProps, SliderSingleProps } from "antd";
import { useState } from 'react';
import { withTranslation } from "react-i18next";
import { PriceCalculatorPriceValue } from "./styles";

const formatter: NonNullable<SliderSingleProps['tooltip']>['formatter'] = (value) => `${value} ${value === 1 ? "settimana" : "settimane"}`;


const PriceCalculator = () => {
  const [inputValue, setInputValue] = useState(1);

  const onChange: InputNumberProps['onChange'] = (newValue) => {
    setInputValue(newValue as number);
  };

  return (
    <Col style={{alignItems: "center", marginTop: "2em"}}>
      <Slider
        min={1}
        max={8}
        onChange={onChange}
        value={typeof inputValue === 'number' ? inputValue : 0}
        tooltip={{ formatter }}
        handleStyle={{width: "2.5em", height: "2.5em", marginTop: "-1em"}}
      />
      <PriceCalculatorPriceValue>
        <h6 style={{textDecoration : inputValue > 3 ? "line-through" : "none", textAlign: "center"}}>{inputValue * 110 + " €"}</h6>
        {inputValue > 3 && <h6 style={{textAlign: "center"}}>{inputValue > 6 ?  inputValue * 90 : inputValue * 100 }{" €"}</h6>}
      </PriceCalculatorPriceValue>
    </Col>
  );
};

export default withTranslation()(PriceCalculator);
