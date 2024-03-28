import React ,{useRef ,useEffect,useState} from 'react'
import styled from 'styled-components'
import { FaChevronRight , FaChevronLeft} from "react-icons/fa6";

const categories = [
  'All', 'Music', 'Actors', 'Game shows', 'Dramedy', 'Comedy', 'Dances',
  'Aerobics', 'Indian Cuisine', 'Cooking', 'Drama', 'Recently uploaded',
  'Pop Music', 'Hip Hop', 'New to you'
];

const Categories = () => {
  const categoriesRef=useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const [activeCategory,setActiveCategory]=useState(null);


  useEffect(() => {
    const handleScroll = () => {
      if (categoriesRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = categoriesRef.current;
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollWidth - scrollLeft > clientWidth);
      }
    };

    if (categoriesRef.current) {
      categoriesRef.current.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (categoriesRef.current) {
        categoriesRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleClick = (category) => {
    setActiveCategory(category);
  };

  const scrollLeft = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollLeft += 100;
    }
  };

  return (
    <CategoriesContainer>
      <CategoriesScroll>
        {showLeftButton && <ScrollButton onClick={scrollLeft}><FaChevronLeft /></ScrollButton>}
        <CategoriesUl ref={categoriesRef}>
          {categories.map((category) => (
            <CategoriesLi key={category} onClick={() => handleClick(category)} className={activeCategory === category ? 'active' : ''}>
              <CategoriesA>{category}</CategoriesA>
            </CategoriesLi>
          ))}
        </CategoriesUl>
        {showRightButton && <ScrollButton onClick={scrollRight}><FaChevronRight /></ScrollButton>}
      </CategoriesScroll>
    </CategoriesContainer>
  );
};


export default Categories;

const CategoriesContainer = styled.div`

`;

const CategoriesScroll = styled.div`
margin-top: 10px;
align-items: center;
  display: flex;

`;

const ScrollButton = styled.button`
    background-color: transparent;
    border:none;
    margin: 0px 10px;
    color: #ffffff;
    width: 40px;
    height: 40px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:hover{
      border-radius: 50%;
      background-color: #ffffff14;
    }

`;

const CategoriesUl = styled.ul`
  display: flex;
  gap:10px;
  width: 100%;
  margin: 0px 10px;
  overflow: hidden;
  scroll-behavior: smooth;
`;

const CategoriesA = styled.a`
  color: #f1f1f1;
  width: max-content;
  font-size: 14px;
  white-space: nowrap;
`;

const CategoriesLi = styled.li`
cursor: pointer;
  list-style: none;
  width: max-content;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #ffffff1a;
  transition: background-color .5s cubic-bezier(.05,0,0,1);
  &:hover{
    background-color: #ffffff14;
  }
  &.active{
    background-color: #ffffff;
    ${CategoriesA} {
      color: black; 
    }
  }
  `;

const ScrollRight = styled.button`
    background-color: transparent;
    border:none;
    margin: 0px 10px;
    color: #ffffff;
    width: 40px;
    height: 40px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:hover{
      border-radius: 50%;
      background-color: #ffffff14;
    }
`;
