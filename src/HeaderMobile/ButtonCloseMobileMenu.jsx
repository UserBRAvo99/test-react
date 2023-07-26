import { BsChevronDoubleRight } from "react-icons/bs";
import { styled } from "styled-components";

function ButtonClose({ onClick }) {
  return (
    <ButtonCloseMenu onClick={onClick}>
      <BsChevronDoubleRight />
    </ButtonCloseMenu>
  );
}

export default ButtonClose;

const ButtonCloseMenu = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: block;
  width: 40px;
  height: 40px;
  border: none;
  background-color: inherit;
  & svg {
    width: 40px;
    height: 40px;
  }
`;
