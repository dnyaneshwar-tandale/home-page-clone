import React from 'react';
import { Layout as AntLayout, LayoutProps } from 'antd';
import "./layout.scss";

function Layout({ children }: LayoutProps) {
  
  return (
    <AntLayout className='layout'>{children}</AntLayout>
  );
}

export default Layout;
