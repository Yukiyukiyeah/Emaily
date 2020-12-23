/*
 * @Author: your name
 * @Date: 2020-12-23 19:20:37
 * @LastEditTime: 2020-12-23 22:05:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/client/src/components/surveys/SurveyNew.js
 */
// Survey New shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from'./SurveyForm';
import SurveyFormReview from './SurveyFormReview';
class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview onCancel={() => this.setState({ showFormReview: false})}/>
      );
    }
    return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })}/>;
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);