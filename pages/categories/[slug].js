import { categories } from "@/lib/data-categories";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import arrowURL from "@/assets/ArrowIcon.svg?url";
import Image from "next/image";

export default function CategoryDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const category = categories.find(cat => cat.slug === slug);

  if (!category) {
    return (
      <>
        <StyledSection>
          <StyledName>Category not found!</StyledName>
        </StyledSection>
      </>
    );
  }

  return (
    <>
      <StyledBackLink>
        <Link href="/categories">
          <Image src={arrowURL} alt="Back Link" width={30} height={25} />
        </Link>
      </StyledBackLink>
      <main>
        <StyledImage
          src={category.image}
          width={200}
          height={200}
          alt={category.title}
        />
        <StyledSection>
          <StyledName>{category.title}</StyledName>
          <article>
            <h3>Description</h3>
            <p>{category.description}</p>
          </article>
        </StyledSection>
      </main>
    </>
  )
}

const StyledBackLink = styled.nav`
  position: absolute;
  top: 2rem;
  left: 1rem;
  background-color: var(--color-green);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`;

const StyledSection = styled.section`
  margin: 1rem 2rem 2rem 2rem;
`;

const StyledName = styled.h1`
  font-family: serif;
  font-size: 2rem;
  line-height: 2rem;
  color: var(--color-green);
  margin: 0;
`;
