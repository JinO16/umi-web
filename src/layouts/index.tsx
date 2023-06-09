import React from 'react';
import { Link, Outlet } from 'umi';
import styles from './index.less';

// 全局布局，默认会在所有的路由下生效
export default function Layout(props: any) {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul>
      {/* 可以配置全局导航栏 */}
      <Outlet />
    </div>
  );
}
