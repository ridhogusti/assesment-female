import styled, { css } from "styled-components";

const StyledHomeContentSection2 = styled.div`
  width: 1140px;
  margin: 0 auto;
`;
const StyledTitleSection = styled.h2`
  font-weight: bold;
  font-size: 22px;
  color: #000;
  margin: 50px 0 0 0;
`;
const StyledTitleSplit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 30px 0;
`;
const StyledTitleSectionChild = styled.p`
  font-size: 20px;
  color: #9b9b9b;
  margin: 0;
`;
const StyledSeeMoreActicles = styled.a`
  font-size: 20px;
  font-weight: normal;
  color: #db284e;
  display: flex;
  margin: 0;
  cursor: pointer;
`;
const StyledIconArrowRight = styled.i`
  border: solid #db284e;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 9px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

const StyledArticleList = styled.div`
  max-width: 1140px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 30px 0;
`;
const StyledArticleListItem = styled.div`
  width: 350px;
  ${({ hiddenMargin }) => {
    if (hiddenMargin) {
      return css`
        margin: 0 0px 30px 0;
      `;
    } else if (!hiddenMargin) {
      return css`
        margin: 0 45px 30px 0;
      `;
    }
  }}
`;
const StyledArticleCard = styled.div`
  display: flex;
  flex-flow: column;
  border: none;
  word-break: break-word;
`;
const StyledArticleImage = styled.a`
  width: 350px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  flex-shrink: 0;

  & > img {
    width: 100%;
  }
`;
const StyledArticleCardSponsored = styled.span`
  font-weight: bold;
  font-size: 10px;
  position: absolute;
  color: #db284e;
  background-color: #fff;
  padding: 5px 10px;
  top: 0;
  left: 0;
`;
const StyledArticleTitle = styled.a`
  font-weight: bold;
  font-size: 20px;
  color: #000;
  margin: 20px 0 0 0;
`;
const StyledArticleAuthor = styled.p`
  font-size: 16px;
  font-weight: normal;
  color: #9b9b9b;
  margin: 5px 0 0 0;
`;
const StyledArticleAuthorName = styled.a`
  color: #4a4a4a;
`;

export {
  StyledHomeContentSection2,
  StyledTitleSection,
  StyledTitleSplit,
  StyledTitleSectionChild,
  StyledSeeMoreActicles,
  StyledIconArrowRight,
  StyledArticleList,
  StyledArticleListItem,
  StyledArticleCard,
  StyledArticleImage,
  StyledArticleCardSponsored,
  StyledArticleTitle,
  StyledArticleAuthor,
  StyledArticleAuthorName
};
