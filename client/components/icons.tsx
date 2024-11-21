import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || width}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);




export const TalendroLogo: React.FC<IconSvgProps> = ({
  size = 24,
  color = "white",
  width,
  height,
  ...props
}) => (
  <svg viewBox="408 340 200 84" height={`${size}px`} width={`${size * 4.375}px`} version="1.1">
    <g id="logo-center" transform="translate(280 0)" fill={color}>
        <path id="path660331" d="m 392.41025,-55.224 c -0.648,-0.648 -1.44,-1.008 -2.448,-1.008 h -38.52 c -1.008,0 -1.872,0.36 -2.52,1.008 -0.648,0.648 -0.936,1.44 -0.936,2.448 0,1.008 0.288,1.872 0.936,2.52 0.648,0.648 1.512,0.936 2.52,0.936 h 13.392 c 0.576,0 1.08,0.216 1.512,0.648 0.432,0.432 0.648,0.936 0.648,1.512 v 43.416 c 0,1.08 0.36,1.944 1.08,2.664 0.72,0.72 1.584,1.08 2.664,1.08 1.008,0 1.944,-0.36 2.664,-1.08 0.72,-0.72 1.08,-1.584 1.08,-2.664 V -47.16 c 0,-0.576 0.216,-1.08 0.648,-1.512 0.432,-0.432 0.936,-0.648 1.512,-0.648 h 13.32 c 1.008,0 1.8,-0.288 2.448,-0.936 0.648,-0.648 1.008,-1.512 1.008,-2.52 0,-1.008 -0.36,-1.8 -1.008,-2.448 z"  transform="translate(0 308.4976) translate(50 44.376799999999996) scale(1.1) translate(-347.98625 56.232)"></path>
        <path id="path660333" d="m 427.74537,-19.656 c 0,-3.672 -0.936,-7.128 -2.664,-10.152 -1.72799,-3.024 -4.104,-5.472 -7.128,-7.2 -3.024,-1.728 -6.336,-2.664 -10.00799,-2.664 -3.74401,0 -7.128,0.936 -10.152,2.664 -3.024,1.728 -5.40001,4.176 -7.12801,7.2 -1.728,3.024 -2.592,6.408 -2.592,10.152 0,3.744 0.792,7.2 2.376,10.224 1.584,3.024 3.816,5.4 6.624,7.128 2.88,1.8 5.976,2.664 9.43201,2.664 h 0.57599 17.208 c 0.936,0 1.72801,-0.36 2.448,-1.008 0.648,-0.648 1.008,-1.44 1.008,-2.448 V -3.6 Z m -30.96,6.912 c -1.152,-2.016 -1.656,-4.32 -1.656,-6.912 0,-2.52 0.504,-4.824 1.656,-6.912 1.152,-2.016 2.664,-3.672 4.608,-4.824 1.944,-1.152 4.104,-1.8 6.55201,-1.8 2.37599,0 4.536,0.648 6.47999,1.8 1.944,1.152 3.456,2.808 4.608,4.824 1.08001,2.088 1.656,4.392 1.656,6.912 0,2.592 -0.57599,4.896 -1.656,6.912 -1.152,2.016 -2.664,3.672 -4.608,4.824 -1.94399,1.152 -4.104,1.728 -6.47999,1.728 -2.44801,0 -4.60801,-0.576 -6.55201,-1.728 -1.944,-1.152 -3.456,-2.808 -4.608,-4.824 z"  transform="translate(0 308.4976) translate(94.09583200000002 62.5928) scale(1.1) translate(-388.07337 39.672)"></path>
        <path id="path660335" d="m 438.31362,-55.224 c -0.72,0.72 -1.00799,1.584 -1.00799,2.592 v 39.312 c 0,2.592 0.43199,4.896 1.368,6.912 0.86399,2.016 2.15999,3.6 3.81599,4.752 1.656,1.152 3.528,1.656 5.616,1.656 h 0.144 c 1.44,0 2.59201,-0.288 3.528,-1.008 0.864,-0.648 1.368,-1.512 1.368,-2.592 0,-1.008 -0.36,-1.872 -0.93599,-2.592 -0.57601,-0.648 -1.368,-1.008 -2.30401,-1.008 h -1.8 c -1.08,0 -1.94399,-0.576 -2.592,-1.728 -0.71999,-1.152 -1.008,-2.592 -1.008,-4.392 v -39.312 c 0,-1.008 -0.36,-1.872 -1.008,-2.592 -0.72,-0.648 -1.58399,-1.008 -2.592,-1.008 -1.08,0 -1.94399,0.36 -2.592,1.008 z"  transform="translate(0 308.4976) translate(148.25131800000005 44.376799999999996) scale(1.1) translate(-437.30563 56.232)"></path>
        <path id="path660337" d="m 492.7085,-18 c 0.576,-0.576 0.936,-1.368 0.936,-2.304 0,-3.744 -0.72,-7.128 -2.16,-10.08 -1.44,-2.88 -3.528,-5.184 -6.192,-6.84 -2.736,-1.584 -5.904,-2.448 -9.576,-2.448 -3.744,0 -7.128,0.864 -10.08,2.592 -2.952,1.728 -5.256,4.104 -6.912,7.128 -1.656,3.024 -2.448,6.48 -2.448,10.296 0,3.888 0.864,7.272 2.592,10.296 1.728,3.024 4.176,5.4 7.344,7.128 3.096,1.728 6.624,2.52 10.584,2.52 2.16,0 4.464,-0.36 6.912,-1.224 2.448,-0.792 4.464,-1.872 6.12,-3.168 0.72,-0.576 1.152,-1.296 1.152,-2.16 0,-0.864 -0.432,-1.728 -1.296,-2.448 -0.576,-0.432 -1.296,-0.72 -2.16,-0.72 -0.936,0 -1.728,0.288 -2.376,0.792 -1.008,0.792 -2.304,1.44 -3.888,1.944 -1.584,0.576 -3.024,0.792 -4.464,0.792 -3.672,0 -6.768,-1.008 -9.288,-3.096 -2.52,-2.016 -4.032,-4.752 -4.536,-8.136 h 27.36 c 0.936,0 1.728,-0.288 2.376,-0.864 z m -25.56,-12.6 c 2.16,-1.872 5.04,-2.88 8.568,-2.88 3.168,0 5.688,1.008 7.704,2.88 1.944,1.944 3.168,4.536 3.6,7.704 h -23.976 c 0.576,-3.168 1.944,-5.76 4.104,-7.704 z"  transform="translate(0 308.4976) translate(169.11927500000004 62.5928) scale(1.1) translate(-456.2765 39.672)"></path>
        <path id="path660339" d="m 537.71525,-31.248 c -1.512,-2.736 -3.6,-4.896 -6.192,-6.336 -2.52,-1.296 -5.256,-2.016 -8.28,-2.088 -0.072,0 -0.216,-0.072 -0.216,-0.072 h -16.56 c -1.008,0 -1.8,0.36 -2.448,1.008 -0.72,0.72 -1.008,1.512 -1.008,2.448 0,0.072 0,0.216 0,0.288 0,0.144 0,0.216 0,0.288 V -3.6 c 0,1.08 0.288,1.944 1.008,2.664 0.72,0.72 1.584,1.008 2.664,1.008 1.08,0 1.944,-0.288 2.664,-1.008 0.648,-0.72 1.008,-1.584 1.008,-2.664 v -20.304 c 0,-1.728 0.432,-3.24 1.368,-4.68 0.936,-1.368 2.232,-2.448 3.888,-3.312 1.656,-0.792 3.528,-1.224 5.544,-1.224 3.456,0 6.192,1.008 8.28,3.024 2.088,2.016 3.168,4.968 3.168,8.784 V -3.6 c 0,1.08 0.288,1.944 1.008,2.664 0.72,0.72 1.584,1.008 2.664,1.008 1.008,0 1.872,-0.288 2.592,-1.008 0.72,-0.72 1.08,-1.584 1.08,-2.664 v -17.712 c 0,-3.888 -0.792,-7.2 -2.232,-9.936 z"  transform="translate(0 308.4976) translate(220.5275000000001 62.5136) scale(1.1) translate(-503.01125 39.744)"></path>
        <path id="path660341" d="m 550.00138,-19.728 c 0,3.816 0.86399,7.2 2.592,10.224 1.72799,3.024 4.17599,5.472 7.19999,7.2 3.024,1.728 6.408,2.592 10.08,2.592 h 0.28801 0.144 15.91199 c 1.008,0 1.80001,-0.288 2.44801,-0.936 0.71999,-0.72 1.00799,-1.512 1.00799,-2.448 v -15.336 -1.296 -32.832 c 0,-1.08 -0.288,-1.944 -1.00799,-2.664 -0.648,-0.648 -1.51201,-1.008 -2.664,-1.008 -1.008,0 -1.87201,0.36 -2.59201,1.008 -0.71999,0.72 -1.07999,1.584 -1.07999,2.664 v 19.44 c -1.65601,-2.016 -3.67201,-3.6 -6.12,-4.824 -2.376,-1.152 -4.96801,-1.728 -7.77601,-1.728 -3.45599,0 -6.55199,0.864 -9.35999,2.592 -2.80801,1.8 -5.04001,4.176 -6.624,7.2 -1.58401,3.024 -2.448,6.48 -2.448,10.152 z m 7.05599,0 c 0,-2.52 0.576,-4.824 1.72801,-6.84 1.15199,-2.016 2.664,-3.672 4.60799,-4.824 1.944,-1.152 4.10401,-1.8 6.48,-1.8 2.448,0 4.608,0.648 6.55201,1.8 1.94399,1.152 3.456,2.808 4.53599,4.824 1.15201,2.016 1.65601,4.32 1.65601,6.84 0,2.592 -0.504,4.896 -1.65601,6.912 -1.07999,2.088 -2.592,3.744 -4.53599,4.896 -1.94401,1.152 -4.10401,1.728 -6.55201,1.728 -2.37599,0 -4.536,-0.576 -6.48,-1.728 -1.94399,-1.152 -3.456,-2.808 -4.60799,-4.896 -1.15201,-2.016 -1.72801,-4.32 -1.72801,-6.912 z"  transform="translate(0 308.4976) translate(272.21664300000003 44.376799999999996) scale(1.1) translate(-550.00138 56.232)"></path>
        <path id="path660343" d="m 627.98637,-38.664 c -1.44,-0.72 -3.45599,-1.152 -5.976,-1.152 -2.448,0 -4.68,0.504 -6.76799,1.44 -2.16001,1.008 -3.88801,2.304 -5.32801,3.96 v -1.368 c 0,-2.376 -1.22399,-3.6 -3.59999,-3.6 -1.15201,0 -2.08801,0.36 -2.664,0.936 -0.648,0.648 -0.936,1.512 -0.936,2.664 V -3.6 c 0,1.224 0.288,2.16 0.936,2.736 0.57599,0.576 1.51199,0.864 2.664,0.864 1.15199,0 2.08799,-0.288 2.664,-0.936 0.576,-0.576 0.93599,-1.512 0.93599,-2.664 v -21.024 c 0,-2.664 1.008,-4.824 3.168,-6.408 2.08801,-1.584 4.89601,-2.376 8.35201,-2.376 1.15199,0 2.736,0.216 4.67999,0.504 0.432,0.144 0.79201,0.144 1.08001,0.144 1.43999,0 2.448,-0.72 2.88,-2.304 0,-0.144 0.072,-0.36 0.072,-0.72 0,-1.152 -0.72001,-2.088 -2.16001,-2.88 z"  transform="translate(0 308.4976) translate(330.20094299999994 62.4344) scale(1.1) translate(-602.71438 39.816)"></path>
        <path id="path660345" d="m 662.9255,-37.08 c -3.024,-1.728 -6.408,-2.592 -10.152,-2.592 -3.888,0 -7.272,0.864 -10.296,2.592 -3.024,1.728 -5.4,4.032 -7.056,7.056 -1.728,3.024 -2.52,6.48 -2.52,10.368 0,3.888 0.792,7.272 2.52,10.296 1.656,3.024 4.032,5.4 7.056,7.128 3.024,1.728 6.408,2.52 10.296,2.52 3.816,0 7.2,-0.792 10.224,-2.52 3.024,-1.728 5.328,-4.104 7.056,-7.128 1.656,-3.024 2.52,-6.408 2.52,-10.296 0,-3.888 -0.864,-7.344 -2.592,-10.368 -1.728,-3.024 -4.032,-5.328 -7.056,-7.056 z m -16.776,5.616 c 1.944,-1.152 4.176,-1.728 6.624,-1.728 2.448,0 4.608,0.576 6.552,1.728 1.944,1.152 3.456,2.808 4.536,4.824 1.08,2.088 1.656,4.392 1.656,6.984 0,2.592 -0.576,4.968 -1.656,6.984 -1.08,2.016 -2.592,3.6 -4.536,4.752 -1.944,1.152 -4.104,1.728 -6.552,1.728 -2.448,0 -4.68,-0.576 -6.624,-1.728 -1.944,-1.152 -3.456,-2.736 -4.536,-4.752 -1.152,-2.016 -1.656,-4.392 -1.656,-6.984 0,-2.592 0.504,-4.896 1.656,-6.984 1.08,-2.016 2.592,-3.672 4.536,-4.824 z"  transform="translate(0 308.4976) translate(363.406775 62.5928) scale(1.1) translate(-632.9015 39.672)"></path>

    </g>
  </svg>
);


// style from the path of above svg
// style={{ fontStyle: 'normal', fontWeight: 700, fontSize: '72px', lineHeight: 1, fontFamily: "'ComfortaaBold Alt1'", fontVariantLigatures: 'none', textAlign: 'center', textAnchor: 'middle' }}
