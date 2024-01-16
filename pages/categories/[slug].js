import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";

export default function CategoryDetail({theme}) {
  const router = useRouter();
  const { slug } = router.query;

  const { data: category, error: categoriesError } = useSWR(`/api/categories/${slug}`);

  if (categoriesError) return <div>Error occurred while fetching data</div>;
  if (!category) return <div>Loading...</div>;

  const goBack = () => {
    router.back();
  };

  const categoryColor =
    theme === "light" ? category.bgcolor : category.bgcolorDark;

  return (
    <>
    <Head>
        <title>{category.title}</title>
    
      </Head>
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
        <StyledSection $categoryColor={categoryColor}>
          <StyledName>{category.title}</StyledName>
          <article>
            <h3>Description</h3>
            <p>{category.description}</p>
          </article>
        </StyledSection>
      </StyledDiv>
      </>
  )
}

const StyledDiv = styled.div`
  position: relative;
`;

const StyledBackButton = styled.button`
  position: absolute;
  top: 1.75rem;
  left: 1rem;
  background-color: ${({ theme }) => theme.primaryGreen};
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
  background-color: ${({ $categoryColor }) => $categoryColor};
  color: ${({ theme }) => theme.infoText}
`;

const StyledName = styled.h1`
  font-family: serif;
  font-size: 2rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.formText};
  margin: 0;
`;
