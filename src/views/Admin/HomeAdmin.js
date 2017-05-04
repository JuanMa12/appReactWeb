import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showPlans } from './../../actions'

class HomeAdmin extends Component {
  componentWillMount() {
       this.props.showPlans()
  }
  renderPlansList() {
   return this.props.plans.map((plan) => {
     return (
       <tr key={plan.id}>
         <td>{plan.id}</td>
         <td><img src={plan.logo} className="img-responsive img-circle img-plan" alt="..."/></td>
         <td>{plan.name}</td>
         <td>{plan.price}</td>
         <td>{plan.expiration_days}</td>
       </tr>
     )
   })
 }
  render() {
    return (
      <div>
        <table className="table table-responsive">
         <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Expiration Days</th>
          </tr>
          </thead>
          <tbody>
            { this.renderPlansList() }
          </tbody>
        </table>
      </div>
    )

  }
}

function mapStateToProps(state) {
  return {
    plans: state.plan.list
  }
}

export default connect(mapStateToProps, { showPlans })(HomeAdmin)
