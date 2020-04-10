import React, { useState } from 'react'
import Draggable from 'react-draggable'
import { observer, inject } from 'mobx-react'

export const Slider = inject('state')(
  observer(function DragMe(props) {
    console.log(props)

    const { counter, setCounter } = props.state
    const { fullWidthSlider, min, max, handleDimension } = props

    const [isDrag, setIsDrag] = useState(false)

    return (
      <>
        <div className="container">
          <div className="center">
            <Draggable
              bounds={{ left: 0, right: fullWidthSlider }}
              axis="x"
              defaultPosition={{ x: 0, y: 0 }}
              position={{
                x: (counter - min) / ((max - min) / fullWidthSlider),
                y: 0,
              }}
              scale={1}
              onDrag={(i, ui) => {
                setCounter(Math.round(ui.x * ((max - min) / fullWidthSlider) + min))
              }}
              onStart={() => setIsDrag(true)}
              onStop={() => setIsDrag(false)}
            >
              <div>
                <div
                  className={`handle ${isDrag && 'handle-press'} `}
                  style={{ width: handleDimension, height: handleDimension }}
                >
                  <p className={`text ${isDrag && 'text-up'} `}>{counter}</p>
                </div>
              </div>
            </Draggable>
            <div
              className={`line ${isDrag && 'line-on-drag'} `}
              style={{ width: fullWidthSlider + handleDimension, height: handleDimension }}
            ></div>
          </div>
        </div>
      </>
    )
  })
)
