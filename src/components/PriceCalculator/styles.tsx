import styled from "styled-components";

export const PriceCalculatorSection = styled("section")`
  position: relative;
  padding: 4rem 0 4rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const PriceCalculatorPriceValue = styled("div")`
  min-height: 170px;

  @media screen and (max-width: 1024px) {
   min-height: 100px;
  }
`;
