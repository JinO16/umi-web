import { getMyPeddingPreview } from '@/service/servers';
import React from 'react';
import { history } from 'umi';
import yayJpg from '../../assets/yay.jpg';

export default function HomePage() {
  console.log('hash history state===>', history);
  const handleGetMyPreview = () => {
    console.log('调用接口');
    getMyPeddingPreview({
        method: 'getHomeData',
        dataType: 'toview'
    }).then(info => {
      console.log('info---->', info);
    }, err => {
      console.log('err===>', err);
    })
  }
  
  const handleJump = () => {
    history.push({pathname: '/docs'}, {state: 1});
    console.log('history====>', history);
  }

  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <button onClick={handleGetMyPreview}>点击调用接口</button>
      <button onClick={handleJump}>点击跳转</button>
      <a href="http://10.16.4.86:8089/ekpsj16/portal/workflow.jsp?showIframeType=daiban" target='_blank'>跳转到流程中</a>
    </div>
  );
}
