import React from 'react';
import { Spin } from 'antd';

import 'antd/dist/antd.css';
import './_loading.scss';

const Loading = () => (
  <div className="loading">
    <Spin tip="Loading..." />
  </div>
);

export default Loading;