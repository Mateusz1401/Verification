import React from 'react';

import Spinner from '../../components/Spinner';
import 'antd/dist/antd.css';
import './_loading.scss';

const Loading = () => (
  <div className="loading">
    <Spinner spin tip="Loading..." />
  </div>
);

export default Loading;