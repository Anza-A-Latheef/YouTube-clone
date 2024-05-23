import React ,{useRef ,useEffect,useState} from 'react'
import styled from 'styled-components'
import { FaChevronRight , FaChevronLeft} from "react-icons/fa6";
import Videos from './Videos';

const categories = [
  'All', 'Music', 'Fitness', 'Game shows', 'Travel','Art', 'Photography', 'Dances','Technologies',
  'Aerobics', 'Indian Cuisine', 'Cooking', 'Drama', 'Recently uploaded', 'New to you','Entertainment'
];

const Categories = () => {
  const categoriesRef=useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const [activeCategory,setActiveCategory]=useState('All');
  
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
  }, [categoriesRef]);
  
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
      <Videos activeCategory={activeCategory}/>
    </CategoriesContainer>
  );
};


export default Categories;

const CategoriesContainer = styled.div`
    
`;

const CategoriesScroll = styled.div`
    position: sticky;
    top: 53px;
    padding: 10px 0px;
    align-items: center;
    z-index: 10;
    background-color: #0f0f0f;
    display: flex;
     @media (max-width: 480px) {
      top: 47px;
  }

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
    @media (max-width: 640px) {
    margin:0px;
  }
  @media (max-width: 360px) {
    font-size: 11px;
}
`;

const CategoriesUl = styled.ul`
  display: flex;
  gap:10px;
  width: 100%;
  margin: 0px 10px;
  overflow: hidden;
  scroll-behavior: smooth;
  @media (max-width: 640px) {
    width: 95%;
    margin:0%;
  }
  @media (max-width: 360px) {
    width: 100%;
    gap: 5px;
}
`;

const CategoriesA = styled.a`
  color: #f1f1f1;
  width: max-content;
  font-size: 14px;
  white-space: nowrap;
  @media (max-width: 360px) {
    font-size: 11px;
}
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
  @media (max-width: 360px) {
    padding: 5px;
    display: flex;
    align-items: center;
}
  `;
