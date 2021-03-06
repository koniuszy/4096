import React, { Component } from 'react'
import styled from 'styled-components'
import Numbers from './numbers'
import media from '../media-query/media'

import { ANIMATIONTIME, EXTEND, NUMBEROFCELLS } from '../utils/constants'
import { GlobalCell } from '../utils/globalCell'
import { connect } from 'react-redux'
import { NEWGAME } from '../redux/constants'
import { action } from '../redux/actions'

const CellWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 21%;
`

const CellShadow = styled(GlobalCell)`
  background: rgba(238, 228, 218, 0.35);
  position: relative;
  display: flex;
  transition: width ${ANIMATIONTIME}ms ease-in,
    height ${ANIMATIONTIME}ms ease-in;

  ${media.lessThan('xSmall')`
    ${props => (props.extend ? '' : '')}
  `}

  ${media.between('xSmall', 'small')`
    ${props => (props.extend ? EXTEND : '')}
  `}
`

class Cells extends Component {
  componentDidMount() {
    if (
      localStorage.getItem('persist:numbers') === null ||
      typeof localStorage.getItem('persist:numbers') === 'undefined' ||
      this.props.highestNumber === 4
    ) {
      this.props.action(NEWGAME)
    }
  }
  makeCellsShadow = () => {
    const backgroundForCells = []
    for (let i = 0; i < NUMBEROFCELLS; i++) {
      backgroundForCells.push(
        <CellWrapper key={i}>
          <CellShadow extend={this.props.extend}>
            <Numbers extend={this.props.extend} position={i} />
          </CellShadow>
        </CellWrapper>
      )
    }
    return backgroundForCells
  }

  render() {
    return <>{this.makeCellsShadow()}</>
  }
}

const mapStateToProps = state => {
  return {
    highestNumber: state.HighestNumber
  }
}

export default connect(
  mapStateToProps,
  { action }
)(Cells)
