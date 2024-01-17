import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import BackButton from "@/components/BackButton";

export default function CategoryDetail({ theme }) {
  const router = useRouter();
  const { slug } = router.query;

  const { data: category, error: categoriesError } = useSWR(
    `/api/categories/${slug}`
  );

  if (categoriesError) return <div>Error occurred while fetching data</div>;
  if (!category) return <div>Loading...</div>;

  const categoryColor =
    theme === "light" ? category.bgcolor : category.bgcolorDark;

  return (
    <StyledMain>
      <BackButton />
      <StyledImage
        src={category.image}
        width={200}
        height={200}
        alt={category.title}
      />
      <StyledSection $categoryColor={categoryColor}>
        <StyledName>{category.title}</StyledName>
        <article>
          <h3>Description</h3>
          <p>{category.description}</p>
        </article>
      </StyledSection>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  position: relative;
  
  @media (min-width: 1024px) {
    display: flex;
    max-width: 90rem;
    margin: 0 auto;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  
  @media (min-width: 1024px) {
    width: 60%;
    height: 51.6rem;
  }
`;

const StyledSection = styled.section`
  padding: 1rem 2rem 2rem 2rem;
  background-color: ${({ $categoryColor }) => $categoryColor};
  color: ${({ theme }) => theme.infoText};
`;

const StyledName = styled.h1`
  font-family: serif;
  font-size: 2rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.formText};
  margin: 0;
`;
