import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { showPlans } from './../../actions'

class HomeAdmin extends Component {
  handleClick() {
    console.log('delete:', this);
  }
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
         <td>
            <Link to={'/admin/plan/'+plan.id} className="btn btn-warning">
              <i className="fa fa-edit"></i>
            </Link>
            <span>&nbsp;</span>
            <a onClick={(e) => this.handleClick(e)} className="btn btn-danger">
              <i className="fa fa-trash"></i>
            </a>
         </td>
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
            <th></th>
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
