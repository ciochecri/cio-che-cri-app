import { Col, Slider, InputNumberProps, SliderSingleProps } from "antd";
import { useState } from 'react';
import { withTranslation } from "react-i18next";

const formatter: NonNullable<SliderSingleProps['tooltip']>['formatter'] = (value) => `${value} ${value === 1 ? "settimana" : "settimane"}`;


const PriceCalculator = () => {
  const [inputValue, setInputValue] = useState(1);

  const onChange: InputNumberProps['onChange'] = (newValue) => {
    setInputValue(newValue as number);
  };

  return (
    <Col style={{alignItems: "center"}}>
      <Slider
        min={1}
        max={8}
        onChange={onChange}
        value={typeof inputValue === 'number' ? inputValue : 0}
        tooltip={{ formatter, open: true }}
      />
      <div style={{minHeight: 170}}>
        <h6 style={{textDecoration : inputValue > 3 ? "line-through" : "none", textAlign: "center"}}>{inputValue * 110 + " €"}</h6>
        {inputValue > 3 && <h6 style={{textAlign: "center"}}>{inputValue > 6 ?  inputValue * 90 : inputValue * 100 }{" €"}</h6>}
      </div>
    </Col>
  );
};

export default withTranslation()(PriceCalculator);
