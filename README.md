# react-progress-component

Semi circular progress bar for react.

## Installation
```
$ npm install react-progress-component --save
```

## Usage

```
import React from 'react';
import { SemiCircleProgress } from 'react-progress-component';

function App() {
  return (
    <div>
      <SemiCircleProgress progressValue={40} />
    </div>
  );
}
``` 

## Options

| Name                    | Type        | Default Value | Description                                             |
| :---                    |    :----:   | :---          | :---                                                    |
| totalProgress           | number      | 100           | Total value for the progress bar                        |
| progressValue           | number      | 10            | The current progress value                              |
| progressLabel           | string      | 'Progress'    | Label for the progress bar                              |
| radius                  | number      | 50            | Radius of the semi circle                               |
| strokeWidth             | number      | 10            | Width of the stroke for the semi circle                 |
| strokeBackgroundColor   | string      | '#C9E8B8'     | Background color for the semi circle                    |
| backgroundColor         | string      | '#FFFFFF'     | Background color for the component                      |
| strokeColor             | string      | '#7AC74F'     | Stroke color of the semi circle for the progressed area |
| strokeLinecap           | string      | 'round'       | Shape of the end of the stroke                          |