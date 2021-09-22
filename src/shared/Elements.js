import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward, FaAngleDown, FaAngleDoubleDown, FaChevronDown } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll'

export const NavLinks = styled(LinkS)`
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 1rem 2rem;
    margin-top: 32px;

    //width: 320px;
    

    cursor: pointer;
    background: #01bf71;
    border-radius: 25px;
    transition: all 0.4s ease-in-out;


    &:hover {
      transform: scale(1.04);
      transition: all 0.4s ease-in-out;
        // font-weight: 600;
        background: #23df93;
    }

`;

export const ArrowForward = styled(FaChevronDown)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(FaAngleDown)`
  margin-left: 8px;
  font-size: 20px;
`;