import React from 'react';
import './index.less';
import intl from 'react-intl-universal';

import { ActivityIndicator } from 'antd-mobile';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StudyState,
  getStudy,
} from '@redux/reducer/study';

interface IProps {
  study: StudyState;
  getStudy: () => void,
}

class Study extends React.Component<IProps> {
  pRef: React.RefObject<any>;
  state = {
    name1: 10,
  }

  constructor(props) {
    super(props)
    this.pRef = React.createRef();
  }

  componentDidMount() {

  }

  changeLang = () => {
    localStorage.setItem('lang', 'en-US')
    location.reload()
  }

  render() {
    return (
      <div className="study_index">
        <p onClick={this.changeLang}>修改语言</p>
        <p>{intl.get('name', { name: 'cjm' })}</p>
        <p>p this is temp page {this.state.name1}</p>

        <ActivityIndicator
          toast
          text="Loading..."
          animating={this.props.study.loading}
        />
        <p onClick={() => {
          this.props.getStudy()
        }}>getStudy</p>
        {
          this.props.study.articles.length > 0 && this.props.study.articles.map((item, index) => {
            return <p key={index}>{item.name}</p>
          })
        }
        <p>redux {/* {this.props.total} */}</p>
        <p ref={this.pRef}>this.pRef</p>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return { study: state.study }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch, // 回传 dispatch 以得到 this.props.dispatch
    ...bindActionCreators({
      getStudy,
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Study);
