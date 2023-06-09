import React from "react";
import { history } from 'umi';

const DocsPage = () => {
  const handleClickBack = () => {

    history.push({pathname: '/'}, {state: 2})
  }
  return (
    <div>
      <p>This is umi docs.</p>
      <button onClick={handleClickBack}>跳转到首页</button>
    </div>
  );
};

export default DocsPage;
