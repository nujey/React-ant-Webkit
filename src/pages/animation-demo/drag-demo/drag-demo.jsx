import React from 'react'
import './drag-demo.scss'

class DragDemo extends React.Component {
  state = {
    leftWidth: 400,
    rightWidth: 400
  }
  handleMouseDown = (e) => {
    const event = e || window.event
    this.setState({
      isDown: true
    })
    console.log(event.target.currentX, this.refs['dragLine'])
  }
  handleMouseMove = () => {
    console.log(this.state.isDown)
    if (this.state.isDown) {
      this.setState({
        leftWidth: this.state.leftWidth + 10,
        rightWidth: this.state.rightWidth - 10,
      })
    }
  }
  handleMouseUp = () => {
    this.setState({
      isDown: false
    })
  }
  render() {
    return (
      <div style={{position: 'relative'}}>
        <div className="drag-left" style={{width: this.state.leftWidth +'px'}}>左边</div>
        <div className="drag-line" style={{left: this.state.leftWidth + 'px'}}
             onMouseDown={this.handleMouseDown}
             onMouseMove={this.handleMouseMove}
             onMouseUp={this.handleMouseUp}
             ref="dragLine"></div>
        <div className="drag-right" style={{width: this.state.rightWidth +'px'}}>右边</div>
      </div>
    )
  }
}

export default DragDemo
