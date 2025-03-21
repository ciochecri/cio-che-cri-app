import { Row, Col, Slider, InputNumber, InputNumberProps, SliderSingleProps } from "antd";
import { useState } from 'react';
import { withTranslation, TFunction } from "react-i18next";

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
        <h6 style={{textDecoration : inputValue > 4 ? "line-through" : "none", textAlign: "center"}}>{inputValue * 130 + " €"}</h6>
        {inputValue > 4 && <h6 style={{textAlign: "center"}}>{inputValue > 6 ?  inputValue * 110 : inputValue * 120 }{" €"}</h6>}
      </div>
    </Col>
  );
};

export default withTranslation()(PriceCalculator);
