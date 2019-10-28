import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';

function IndexPage() {
  return (
    <div className={styles.normal}>
     Index Page
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
