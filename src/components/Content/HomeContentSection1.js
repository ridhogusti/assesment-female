import React, { useState, useEffect } from "react";
import {
  StyledHomeContentSection1,
  StyledBannerTop,
  StyledBillboardBanner,
  StyledTitleSection,
  StyledTitleSectionChild,
  StyledEditorChoiceList
} from "./StyledContent";
import EditorChoiceList from "./EditorChoiceList";

const HomeContentSection1 = ({ data }) => {
  const [dataEditor, setDataEditor] = useState([]);

  useEffect(() => {
    if (data.data.length !== 0) {
      setDataEditor(data.data["editor's choice"]);
    }
  }, [data]);
  return (
    <StyledHomeContentSection1>
      <StyledBannerTop>
        <h4>TOP FRAME banner</h4>
        <h5>970x50 pixels</h5>
      </StyledBannerTop>
      <StyledBillboardBanner>
        <h4>BILLBOARD banner</h4>
        <h5>970x250 pixels</h5>
      </StyledBillboardBanner>
      <StyledTitleSection>Editor's Choice</StyledTitleSection>
      <StyledTitleSectionChild>Curated with love</StyledTitleSectionChild>
      <StyledEditorChoiceList>
        {dataEditor.map((item, idx) => {
          return <EditorChoiceList data={item} key={idx}></EditorChoiceList>;
        })}
      </StyledEditorChoiceList>
    </StyledHomeContentSection1>
  );
};

export default HomeContentSection1;
