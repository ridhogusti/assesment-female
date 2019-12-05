import React from "react";
import {
  StyledEditorChoiceListItem,
  StyledTasteProductEditorContainer,
  StyledEditorCard,
  StyledEditorImage,
  StyledEditorName,
  StyledEditorPosition,
  StyledProductCardEditor,
  StyledProductCardEditorImageContainer,
  StyledProductCardEditorImage,
  StyledProductCardEditorDetail,
  StyledProductCardEditorRating,
  StyledProductCardEditorRatingAverage,
  StyledCardStarList,
  StyledCardStarListItem,
  StyledProductCardEditorRatingTotal,
  StyledProductCardEditorBrand,
  StyledProductCardEditorTitle
} from "./StyledContent";

const EditorChoiceList = () => {
  return (
    <StyledEditorChoiceListItem>
      <StyledTasteProductEditorContainer>
        <StyledEditorCard>
          <StyledEditorImage>
            <img
              src="//static.femaledaily.com/dyn/70/images/user-pics/1470131903_lg.jpg"
              alt="avatar"
            />
          </StyledEditorImage>
          <div>
            <StyledEditorName>arindakristie</StyledEditorName>
            <StyledEditorPosition>Managing Editor</StyledEditorPosition>
          </div>
        </StyledEditorCard>
        <StyledProductCardEditor>
          <StyledProductCardEditorImageContainer href="https://reviews.femaledaily.com/products/treatment/serum-essence-23/lancome/advanced-genifique-youth-activating-concentrate?cat=&cat_id=0&age=&order=nrd&page=1">
            <StyledProductCardEditorImage srcSet="https://static.femaledaily.com/dyn/150/images/prod-pics/product_1569842377_Lancome__800x800.jpg"></StyledProductCardEditorImage>
          </StyledProductCardEditorImageContainer>
          <StyledProductCardEditorDetail>
            <StyledProductCardEditorRating>
              <StyledProductCardEditorRatingAverage>
                5
              </StyledProductCardEditorRatingAverage>
              <StyledCardStarList>
                <StyledCardStarListItem></StyledCardStarListItem>
                <StyledCardStarListItem></StyledCardStarListItem>
                <StyledCardStarListItem></StyledCardStarListItem>
                <StyledCardStarListItem></StyledCardStarListItem>
                <StyledCardStarListItem></StyledCardStarListItem>
              </StyledCardStarList>
              <StyledProductCardEditorRatingTotal>
                (542)
              </StyledProductCardEditorRatingTotal>
            </StyledProductCardEditorRating>
            <StyledProductCardEditorBrand>Lancome</StyledProductCardEditorBrand>
            <StyledProductCardEditorTitle>
              Advanced Génifique Youth Activating Serum
            </StyledProductCardEditorTitle>
          </StyledProductCardEditorDetail>
        </StyledProductCardEditor>
      </StyledTasteProductEditorContainer>
    </StyledEditorChoiceListItem>
  );
};

export default EditorChoiceList;
