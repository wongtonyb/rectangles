import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer, Rect } from "react-konva";
import Analyze from "./analyze";

class Canvas extends Component {
  constructor() {
    super();
    this.state = {
      //properties of the two rectangles
      rect1: {
        x: 0,
        y: 0,
        width: 200,
        height: 400,
        fill: "red",
        //coordinates topleft, topright, botleft, botright
        tlc: function() {
          return { x: this.x, y: this.y };
        },
        trc: function() {
          return { x: this.x + this.width, y: this.y };
        },
        blc: function() {
          return { x: this.x, y: this.y + this.height };
        },
        brc: function() {
          return { x: this.x + this.width, y: this.y + this.height };
        }
      },
      rect2: {
        x: 50,
        y: 50,
        width: 500,
        height: 100,
        fill: "blue",
        tlc: function() {
          return { x: this.x, y: this.y };
        },
        trc: function() {
          return { x: this.x + this.width, y: this.y };
        },
        blc: function() {
          return { x: this.x, y: this.y + this.height };
        },
        brc: function() {
          return { x: this.x + this.width, y: this.y + this.height };
        }
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let a = e.target.name.split(".");
    let rect = a[0];
    let dim = a[1];
    let val = Number(e.target.value);
    this.setState({
      [rect]: { ...this.state[rect], [dim]: val }
    });
  }

  render() {
    return (
      <div id="canvas">
        <div id="rect-info">
          <h3 className="red">Red Rectangle</h3>
          <h3>
            Top Left Coordinate: ({this.state.rect1.tlc().x},
            {this.state.rect1.tlc().y})
          </h3>
          <h3>
            Top Right Coordinate: ({this.state.rect1.trc().x},
            {this.state.rect1.trc().y})
          </h3>
          <h3>
            Bot Left Coordinate: ({this.state.rect1.blc().x},
            {this.state.rect1.blc().y})
          </h3>
          <h3>
            Bot Right Coordinate: ({this.state.rect1.brc().x},
            {this.state.rect1.brc().y})
          </h3>
          <br />

          <h3 className="blue">Blue Rectangle</h3>
          <h3>
            Top Left Coordinate: ({this.state.rect2.tlc().x},
            {this.state.rect2.tlc().y})
          </h3>
          <h3>
            Top Right Coordinate: ({this.state.rect2.trc().x},
            {this.state.rect2.trc().y})
          </h3>
          <h3>
            Bot Left Coordinate: ({this.state.rect2.blc().x},
            {this.state.rect2.blc().y})
          </h3>
          <h3>
            Bot Right Coordinate: ({this.state.rect2.brc().x},
            {this.state.rect2.brc().y})
          </h3>
          <br />
          <h5>
            *Coordinates (x, y)
            <br />x travels left to right from 0 to 800
            <br /> y travels top to bot from 0 to 600
            <br /> canvas is 800 x 600
          </h5>
        </div>
        <div id="figure">
          <Stage width={800} height={600}>
            <Layer>
              <Rect
                x={this.state.rect1.x}
                y={this.state.rect1.y}
                width={this.state.rect1.width}
                height={this.state.rect1.height}
                fill={this.state.rect1.fill}
                draggable
                onDragEnd={e => {
                  this.setState(prevState => ({
                    rect1: {
                      ...prevState.rect1,
                      x: e.target.x(),
                      y: e.target.y()
                    }
                  }));
                }}
              />
              <Rect
                x={this.state.rect2.x}
                y={this.state.rect2.y}
                width={this.state.rect2.width}
                height={this.state.rect2.height}
                fill={this.state.rect2.fill}
                draggable
                onDragEnd={e => {
                  this.setState(prevState => ({
                    rect2: {
                      ...prevState.rect2,
                      x: e.target.x(),
                      y: e.target.y()
                    }
                  }));
                }}
              />
            </Layer>
          </Stage>
        </div>
        <div id="resize">
          <h2>Resize</h2>
          <h3>Red Rectangle Dimensions</h3>
          <label>
            Width:
            <input
              type="text"
              name="rect1.width"
              value={this.state.rect1.width}
              onChange={this.handleChange}
            />
            Height:
            <input
              type="text"
              name="rect1.height"
              value={this.state.rect1.height}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <h3>Blue Rectangle Dimensions</h3>
          <label>
            Width:
            <input
              type="text"
              name="rect2.width"
              value={this.state.rect2.width}
              onChange={this.handleChange}
            />
            Height:
            <input
              type="text"
              name="rect2.height"
              value={this.state.rect2.height}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <h4>
            For best results, make sure rectangle are within the canvas box
            <br />
            Max width of canvas is 800
            <br />
            Max height of canvas is 600
            <br />
            Hold and drag rectangles to reposition
          </h4>
          <Analyze
            rect1={{
              tl: this.state.rect1.tlc(),
              tr: this.state.rect1.trc(),
              bl: this.state.rect1.blc(),
              br: this.state.rect1.brc()
            }}
            rect2={{
              tl: this.state.rect2.tlc(),
              tr: this.state.rect2.trc(),
              bl: this.state.rect2.blc(),
              br: this.state.rect2.brc()
            }}
          />
        </div>
      </div>
    );
  }
}

export default Canvas;
