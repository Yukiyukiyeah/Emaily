/*
 * @Author: your name
 * @Date: 2020-12-23 19:40:59
 * @LastEditTime: 2020-12-23 20:41:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/client/src/components/surveys/SurveyField.js
 */
// Survey Field contains logics to handle single labels text input
import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }}/>
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};