import React, { Component } from 'react';


class EditPlan extends Component {
  render() {
    return (
      <div>
        <div className="col-md-6">
          <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">Edit Plan</h3>
            </div>
            <form role="form">
              <div className="box-body">
                <div className="form-group">
                  <label for="exampleInputName">Plan Name</label>
                  <input type="email" className="form-control" id="exampleInputName" placeholder="Enter name" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPrice">Price</label>
                  <input type="password" className="form-control" id="exampleInputPrice" placeholder="Enter Price" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPrice">Expiration Day</label>
                  <input type="password" className="form-control" id="exampleInputPrice" placeholder="Enter Expiration Day" />
                </div>
              </div>
              <div className="box-footer">
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditPlan;
