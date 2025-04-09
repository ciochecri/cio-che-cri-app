import { Card } from "antd";
import styled from "styled-components";

export const ReviewBlockSection = styled("section")`
  position: relative;
  padding: 4rem 0 4rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Review = styled('div')`
  gap: 0.5rem;
  display: flex;
  padding: 0.8rem;
  align-items: stretch;
  border-radius: 0.5rem;
  flex-direction: column;
  background: rgb(241, 242, 243);
`;

export const ReviewText = styled("p")`
  font-size: 12px;
  padding: 0.75rem 0 0.75rem;
  text-align: left;
  margin: 0;
`;

export const ReviewName = styled("p")`
  font-size: 15px;
  margin: 0;
  text-align: left;
`;


export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 670px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
