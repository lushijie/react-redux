import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {withRouter} from 'react-router'
import {BaseComponent, Counter} from 'components'


//autobind 依赖babel-plugin-transform-decorators-legacy
@autobind
export default withRouter(class extends BaseComponent {

  // 在调试时相当有用
  static displayName = 'app-home'

  // props属性校验
  static propTypes = {

  }

  // defaultProps
  static defaultProps = {

  }

  // initialState
  state = {
  }


  componentWillMount() {

  }

  componentDidMount() {
    //console.log('withRouter props:', this.props);
  }

  componentWillUnmount() {
    //todo
  }


  render() {
    return (
      <div>
        <h2>Home</h2>
        <h3>This is Home page!</h3>
        <div>
          <Counter custom={"This is ownProps!"} />
        </div>
      </div>
    )
  }
})
