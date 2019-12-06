import React from "react";
import {
  StyledArticleList,
  StyledArticleListItem,
  StyledArticleCard,
  StyledArticleImage,
  StyledArticleCardSponsored,
  StyledArticleTitle,
  StyledArticleAuthor,
  StyledArticleAuthorName
} from "./StyledHomeComeSection2";

const ArticleList = ({ data }) => {
  return (
    <StyledArticleList>
      {data.map((item, idx) => {
        return (
          <StyledArticleListItem key={idx} hiddenMargin={(idx + 1) % 3 === 0}>
            <StyledArticleCard>
              <StyledArticleImage>
                <StyledArticleCardSponsored>
                  SPONSORED
                </StyledArticleCardSponsored>
                <img src={item.image} alt="articleimage" />
              </StyledArticleImage>
              <StyledArticleTitle>{item.title}</StyledArticleTitle>
              <StyledArticleAuthor>
                <StyledArticleAuthorName>{item.author}</StyledArticleAuthorName>{" "}
                | {item.published_at}
              </StyledArticleAuthor>
            </StyledArticleCard>
          </StyledArticleListItem>
        );
      })}
    </StyledArticleList>
  );
};

export default ArticleList;
