import React, { useRef, useEffect } from 'react';
import './index.less';

export interface IWaveProps {
  radius?: number;
  /** 进度 */
  progress?: number;
  /** 边框, 默认1px */
  lineWidth?: number;
  /** 边框距离, 默认3px */
  space?: number;
  /** 球行颜色值可以是渐变色 ['#FF9745', '#4C94FF'] */
  color?: string[] | string;
  /** 边框颜色 */
  borderColor?: string;
  textColor?: string;
  /** 球星最小高度 0 ~ 100 */
  min?: number;
  children?: React.ReactNode;
}

const Wave = (props: IWaveProps) => {
  const {
    radius = 50,
    progress = 0,
    lineWidth = 1,
    space = 3,
    color = '#B0E2FF',
    borderColor = '#87CEFA',
    textColor = '#63B8FF',
    min = 0,
    children = undefined
  } = props;

  const waveRef = useRef<any>(null);
  let ctx: CanvasRenderingContext2D;

  useEffect(() => {
    let canvas: HTMLCanvasElement = waveRef.current;
    let context = canvas.getContext('2d');
    let offset: number = 0;
    if (context) {
      ctx = context;
      drawCirle();
      drawMark();
      requestAnimationFrame(draw);
    }
    function drawMark() {
      // 绘制遮罩
      ctx.beginPath();
      ctx.arc(radius, radius, radius - space - lineWidth, 0, 2 * Math.PI, true);
      ctx.closePath();
      ctx.clip();
    }

    function drawCirle() {
      // 绘制圆
      ctx.clearRect(0, 0, radius * 2, radius * 2);
      ctx.strokeStyle = borderColor;
      const borderW = lineWidth;
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      ctx.arc(radius, radius, radius - borderW / 2, 0, 2 * Math.PI, true);
      ctx.closePath();
      ctx.stroke();
    }

    function draw () {
      ctx.clearRect(0, 0, radius * 2, radius * 2);
      drawWave();
      requestAnimationFrame(draw);
    }

    function drawWave () {
      offset += radius / 50;
      if (offset >= 2 * radius) {
        offset = 0;
      }
      let progressOffset;
      if (typeof progress === 'number' && progress >= 0 && progress <= 100) {
        progressOffset = 2 * radius * progress / 100 - radius;
        if (progress < min) {
          progressOffset = 2 * radius * min / 100 - radius;
        }
      } else {
        progressOffset = -radius;
      }
      const offsetHeight = radius / 5;
      ctx.beginPath();
      if (typeof color === 'object' && color.length === 2) {
        const grad = ctx.createLinearGradient(0, 0, 0, Number(progress));
        grad.addColorStop(0, color[0]);
        grad.addColorStop(1, color[1]);
        ctx.fillStyle = grad;
      } else {
        ctx.fillStyle = String(color);
      }
      ctx.moveTo(-2 * radius + offset, radius - progressOffset);
      ctx.quadraticCurveTo(-3 * radius / 2 + offset, radius - offsetHeight - progressOffset, -radius + offset, radius - progressOffset);
      ctx.quadraticCurveTo(-radius / 2 + offset, radius + offsetHeight - progressOffset, 0 + offset, radius - progressOffset);
      ctx.quadraticCurveTo(radius / 2 + offset, radius - offsetHeight - progressOffset, radius + offset, radius - progressOffset);
      ctx.quadraticCurveTo(3 * radius / 2 + offset, radius + offsetHeight - progressOffset, 2 * radius + offset, radius - progressOffset);
      ctx.lineTo(2 * radius + offset, 2 * radius);
      ctx.lineTo(-2 * radius + offset, 2 * radius);
      ctx.lineTo(-2 * radius + offset, radius);
      ctx.closePath();
      ctx.fill();
    }

  }, [waveRef.current])

  return (
    <div className="i--wave" style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}>
      <canvas style={{position: 'absolute', left: '0', top: '0'}} width={radius * 2} height={radius * 2} ref={waveRef}></canvas>
      <div className="i--wave-text" style={{ color: textColor }}>
        {children  ? children : <span style={{ fontSize: '18px' }}>{progress}%</span>}
      </div>
    </div>
  )
}

export default Wave;