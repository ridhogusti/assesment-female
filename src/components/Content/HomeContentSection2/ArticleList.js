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

const ArticleList = () => {
  return (
    <StyledArticleList>
      {[1, 2, 3, 4, 5, 6, 7].map(item => {
        return (
          <StyledArticleListItem key={item} hiddenMargin={item % 3 === 0}>
            <StyledArticleCard>
              <StyledArticleImage>
                <StyledArticleCardSponsored>
                  SPONSORED
                </StyledArticleCardSponsored>
                <img
                  src="//imgcdn.femaledaily.com/2019/12/PSX_20191204_203204.jpg"
                  alt="articleimage"
                />
              </StyledArticleImage>
              <StyledArticleTitle>
                Eksperimen Menjelang Akhir Tahun: Saya Mencoba Bold Eye Makeup!
              </StyledArticleTitle>
              <StyledArticleAuthor>
                <StyledArticleAuthorName>arindakristie</StyledArticleAuthorName>{" "}
                | 4 hours ago
              </StyledArticleAuthor>
            </StyledArticleCard>
          </StyledArticleListItem>
        );
      })}
    </StyledArticleList>
  );
};

export default ArticleList;
