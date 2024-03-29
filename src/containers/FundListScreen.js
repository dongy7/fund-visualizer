import React, { PropTypes, Component } from 'react'
import FundList from '../components/FundList'

class FundListScreen extends Component {
  render() {
    // console.log(this.props.funds)
    return (
      <div>
        <FundList 
          onClick={(index) => 
            this.props.updatePath('/fund/' + index)
          }
          funds={this.props.funds}
          deleteFund={this.props.fundActions.deleteFund}
          token={this.props.login.idToken.idToken}
        />
      </div>
    )
  }
}

FundListScreen.propTypes = {
  updatePath: PropTypes.func.isRequired,
  funds: PropTypes.object.isRequired
}

export default FundListScreen