import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: sidebar;
  width: 100%;
  background-color: hsl(213, 14%, 30%);
  transition: left 0.5s ease 0s;
  animation-name: fadeInUp;
  min-width: 200px;
  max-width: 230px;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  @keyframes fadeInUp {
    from {
      opacity: 0;
      padding: 0;
      margin: 0;
      max-height: 0;
      transform: translate(100, 510px);
    }
    to {
      opacity: 1;
    }
  }
`;

export const SidebarLink = styled(Link)`
  text-align: center;
  width: 100%;
  height: 2rem;
  color: #efebe0;
  font-size: 1.2rem;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  text-decoration: none;
  &:hover {
    background-color: hsl(213, 14%, 35%);
  }
`;