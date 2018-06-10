// component & container

import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getImageUrlAsync} from './actions'
import ReactDropzone from 'react-dropzone';
import './styles.css';

class Dropzone extends Component {
  constructor(props) {
    super(props);

    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(files) {
    this.props.getImageUrlAsync(files[0])
  }

  render() {
    const {imgSrc} = this.props;

    return (
      <ReactDropzone multiple={false} className="dropzone" onDrop={this.onDrop}>
        { imgSrc ? <img src={imgSrc}/> : <span>Upload files</span> }
      </ReactDropzone>
    );
  }
}

function mapStateToProps({Dropzone}) {
  return {...Dropzone}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getImageUrlAsync}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropzone)

