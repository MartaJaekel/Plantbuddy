import { categories } from "@/lib/data-categories";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function CategoryDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const category = categories.find(cat => cat.slug === slug);
  
  const goBack = () => {
    router.back();
  };

  if (!category) {
    return (
        <StyledSection>
          <StyledName>Category not found!</StyledName>
        </StyledSection>
    );
  }

  return (
      <StyledDiv>
      <StyledBackButton type="button" aria-label="Go Back" onClick={goBack}>
        <Image src="/assets/ArrowIcon.svg" alt="Back Link" width={25} height={20} />
      </StyledBackButton>
        <StyledImage
          src={category.image}
          width={200}
          height={200}
          alt={category.title}
        />
        <StyledSection $categoryColor={category.bgcolor}>
          <StyledName>{category.title}</StyledName>
          <article>
            <h3>Description</h3>
            <p>{category.description}</p>
          </article>
        </StyledSection>
      </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: relative;
`;

const StyledBackButton = styled.button`
  position: absolute;
  top: 1.75rem;
  left: 1rem;
  background-color: var(--color-green);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  border: none;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
`;

const StyledSection = styled.section`
  padding: 1rem 2rem 2rem 2rem;
  background-color: ${(props) => props.$categoryColor};
`;

const StyledName = styled.h1`
  font-family: serif;
  font-size: 2rem;
  line-height: 2rem;
  color: var(--color-green);
  margin: 0;
`;
