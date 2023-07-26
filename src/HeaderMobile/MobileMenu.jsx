import { BsChevronDoubleRight } from "react-icons/bs";
import { css, styled } from "styled-components";

function MobileMenuSlide({ onClick, isOpen }) {
  return (
    <MobileMenu open={isOpen}>
      <ButtonCloseMenu onClick={onClick}>
        <BsChevronDoubleRight />
      </ButtonCloseMenu>
      <nav>
        <ul>
          <li>
            <a href="#">Про нас</a>
          </li>
          <li>
            <a href="#">Команда</a>
          </li>
          <li>
            <a href="#">Ще щось</a>
          </li>
          <li>
            <a href="#">Ще щось</a>
          </li>
        </ul>
      </nav>
    </MobileMenu>
  );
}

export default MobileMenuSlide;

const MobileMenu = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: pink;
  top: 0;
  left: 0;
  transform: translateX(+100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  display: none;
  ${(props) =>
    props.open &&
    css`
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform: translateX(0);
      display: flex;
    `}
`;
const ButtonCloseMenu = styled.button`
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
