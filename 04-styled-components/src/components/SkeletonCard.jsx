import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const Card = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Line = styled.div`
  height: ${(props) => props.h || "16px"};
  width: ${(props) => props.w || "100%"};
  border-radius: 4px;
  background: linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

export default function SkeletonCard() {
  return (
    <Card>
      <Line h="20px" w="80%" />
      <Line h="16px" w="60%" />
      <Line h="16px" w="40%" />
      <Line h="40px" w="100%" />
    </Card>
  );
}
