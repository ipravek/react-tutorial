import React, { Component } from "react";
import Button from "../buttton/Button";

export default class Conditionalrender extends Component {
  constructor(props) {
    super(props);
    function setSeason() {
      let thisMonth = new Date().getMonth();
      if (0 <= thisMonth && thisMonth <= 1) {
        return "winter";
      } else if (1 < thisMonth && thisMonth <= 3) {
        return "spring";
      } else if (3 < thisMonth && thisMonth < 7) {
        return "summer";
      } else {
        return "fall";
      }
    }
    this.state.season = setSeason();
  }
  state = {
    active: false,
    season: "",
  };
  render() {
    const styles = {
      season: {
        marginTop: 30,
        minWidth: 100,
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        aliginContent: "center",
        border: "solid grey .5px",
        borderRadius: 4,
        margin: 20,
      },
      show: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      buttons: {
        margin: "20px 20px",
      },
    };
    let seasons = ["spring", "summer", "fall", "winter"];
    const btnFn = (i) => {
      this.setState({
        season: (this.state.season = i
          ? (this.state.season = i)
          : "Something Went Wrong"),
      });
    };
    return (
      <>
        <div className="season" style={styles.season}>
          <div className="season-show" style={styles.show}>
            <div className="show-item">
              <h1 style={{ display: "flex", justifyContent: "center" }}>
                {this.state.season}
              </h1>
              <p style={{ display: "flex" }}>
                {seasons.map((i) => (
                  <>
                    <div className="" style={styles.buttons}>
                      <Button
                        name={i}
                        onClick={() => {
                          btnFn(i);
                        }}
                      />
                    </div>
                  </>
                ))}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
