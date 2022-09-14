import React from "react";

export default function AddAdmin() {
  return (
    <div>
      <div className="breadcrumbs">
        <div className="col-sm-4">
          <div className="page-header float-left">
            <div className="page-title">
              <h1>Dashboard</h1>
            </div>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="page-header float-right">
            <div className="page-title">
              <ol className="breadcrumb text-right">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <a href="#">Forms</a>
                </li>
                <li className="active">Advanced</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="content mt-3">
        <div className="animated fadeIn">
          <div className="row">
            <div className="col-xs-6 col-sm-6">
              <div className="card">
                <div className="card-header">
                  <strong>Masked Input</strong> <small> Small Text Mask</small>
                </div>
                <div className="card-body card-block">
                  <div className="form-group">
                    <label className=" form-control-label">Date input</label>
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="fa fa-calendar" />
                      </div>
                      <input className="form-control" />
                    </div>
                    <small className="form-text text-muted">
                      ex. 99/99/9999
                    </small>
                  </div>
                  <div className="form-group">
                    <label className=" form-control-label">Phone input</label>
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="fa fa-phone" />
                      </div>
                      <input className="form-control" />
                    </div>
                    <small className="form-text text-muted">
                      ex. (999) 999-9999
                    </small>
                  </div>
                  <div className="form-group">
                    <label className=" form-control-label">
                      Taxpayer Identification Numbers
                    </label>
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="fa fa-usd" />
                      </div>
                      <input className="form-control" />
                    </div>
                    <small className="form-text text-muted">
                      ex. 99-9999999
                    </small>
                  </div>
                  <div className="form-group">
                    <label className=" form-control-label">
                      Social Security Number
                    </label>
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="fa fa-male" />
                      </div>
                      <input className="form-control" />
                    </div>
                    <small className="form-text text-muted">
                      ex. 999-99-9999
                    </small>
                  </div>
                  <div className="form-group">
                    <label className=" form-control-label">Eye Script</label>
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="fa fa-asterisk" />
                      </div>
                      <input className="form-control" />
                    </div>
                    <small className="form-text text-muted">
                      ex. ~9.99 ~9.99 999
                    </small>
                  </div>
                  <div className="form-group">
                    <label className=" form-control-label">
                      Credit Card Number
                    </label>
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="fa fa-credit-card" />
                      </div>
                      <input className="form-control" />
                    </div>
                    <small className="form-text text-muted">
                      ex. 9999 9999 9999 9999
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6">
              <div className="card">
                <div className="card-header">
                  <strong className="card-title">Standard Select</strong>
                </div>
                <div className="card-body">
                  <select
                    data-placeholder="Choose a Country..."
                    className="standardSelect"
                    tabIndex={1}
                  >
                    <option value="" />
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Aland Islands">Aland Islands</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                  </select>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <strong className="card-title">Multi Select</strong>
                </div>
                <div className="card-body">
                  <select
                    data-placeholder="Choose a country..."
                    multiple=""
                    className="standardSelect"
                  >
                    <option value="" />
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Aland Islands">Aland Islands</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                  </select>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <strong className="card-title">
                    Multi Select with Groups
                  </strong>
                </div>
                <div className="card-body">
                  <select
                    data-placeholder="Your Favorite Football Team"
                    multiple=""
                    className="standardSelect"
                    tabIndex={5}
                  >
                    <option value="" />
                    <optgroup label="NFC EAST">
                      <option>Dallas Cowboys</option>
                      <option>New York Giants</option>
                      <option>Philadelphia Eagles</option>
                      <option>Washington Redskins</option>
                    </optgroup>
                    <optgroup label="NFC NORTH">
                      <option>Chicago Bears</option>
                      <option>Detroit Lions</option>
                      <option>Green Bay Packers</option>
                      <option>Minnesota Vikings</option>
                    </optgroup>
                    <optgroup label="NFC SOUTH">
                      <option>Atlanta Falcons</option>
                      <option>Carolina Panthers</option>
                      <option>New Orleans Saints</option>
                      <option>Tampa Bay Buccaneers</option>
                    </optgroup>
                    <optgroup label="NFC WEST">
                      <option>Arizona Cardinals</option>
                      <option>St. Louis Rams</option>
                      <option>San Francisco 49ers</option>
                      <option>Seattle Seahawks</option>
                    </optgroup>
                    <optgroup label="AFC EAST">
                      <option>Buffalo Bills</option>
                      <option>Miami Dolphins</option>
                      <option>New England Patriots</option>
                      <option>New York Jets</option>
                    </optgroup>
                    <optgroup label="AFC NORTH">
                      <option>Baltimore Ravens</option>
                      <option>Cincinnati Bengals</option>
                      <option>Cleveland Browns</option>
                      <option>Pittsburgh Steelers</option>
                    </optgroup>
                    <optgroup label="AFC SOUTH">
                      <option>Houston Texans</option>
                      <option>Indianapolis Colts</option>
                      <option>Jacksonville Jaguars</option>
                      <option>Tennessee Titans</option>
                    </optgroup>
                    <optgroup label="AFC WEST">
                      <option>Denver Broncos</option>
                      <option>Kansas City Chiefs</option>
                      <option>Oakland Raiders</option>
                      <option>San Diego Chargers</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* .animated */}
      </div>
    </div>
  );
}
