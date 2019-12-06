import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { connect } from "react-redux";

import { getEditorRequest } from "./redux/Editor/action";

const App = ({ getEditor, data }) => {
  useEffect(() => {
    getEditor();
  }, [getEditor]);

  return (
    <React.Fragment>
      <Header />
      <Content data={data} />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  data: state.editor.editors
});

const mapDispatchToProps = dispatch => ({
  getEditor: option => dispatch(getEditorRequest(option))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
