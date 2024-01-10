import dbConnect from "@/db/connect";
import Category from "@/db/models/categories";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";

export async function getServerSideProps(context) {
  await dbConnect();

  const category = await Category.findOne({ slug: context.params.slug}).lean();

  if (!category) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      category: { ...category, _id: category._id.toString() },
    },
  };
}


export default function CategoryDetail({ category }) {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  if (router.isFallback) {
    return (
        <StyledSection>
          <StyledName>Loading...</StyledName>
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
