import React from 'react';
import {LoaderRotatingWrapper, LoaderStaticWrapper} from "./styled";


const PaintbrushLoader = ({width, backgroundColor}) => {
    const currentWidth = width ?? 128;
    const currentHeight = width / 128 * 117.4;
    const currentBackgroundColor = backgroundColor ?? 'white';

    const staticWrapperSize = Math.min(currentWidth, currentHeight) * 1.5;

    return (
        <LoaderStaticWrapper width={staticWrapperSize} height={staticWrapperSize} backgroundColor={currentBackgroundColor}>
            <LoaderRotatingWrapper>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width={currentWidth} height={currentHeight}
                     viewBox="0 0 1280.000000 1174.000000" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <linearGradient id="brush-handle-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor: "#8B4513", stopOpacity: 1}} />
                            <stop offset="50%" style={{stopColor:"#A0522D",  stopOpacity:1}} />
                            <stop offset="100%" style={{stopColor:"#8B4513",  stopOpacity:1}} />
                        </linearGradient>
                    </defs>
                    <g transform="translate(0.000000,1174.000000) scale(0.100000,-0.100000)" fill="black"
                       stroke="none">
                        <path d="M12258 11731 c-20 -4 -66 -22 -102 -40 -68 -33 -193 -158 -947 -941
                            -1861 -1936 -3611 -3808 -4487 -4799 l-92 -105 -102 3 c-57 1 -112 5 -122 8
                            -21 6 -21 8 0 -282 l6 -90 -65 -35 -66 -34 -952 -1289 c-834 -1128 -955 -1288
                            -973 -1282 -12 3 -82 9 -157 12 -269 11 -503 -55 -722 -204 -146 -99 -215
                            -171 -420 -433 -357 -458 -1004 -1213 -1301 -1518 l-70 -72 44 0 c25 0 313 -5
                            640 -11 1081 -18 1560 17 1935 142 214 71 361 157 501 291 131 126 223 275
                            287 469 60 178 71 246 72 427 l1 163 550 477 c302 262 851 738 1219 1058 l670
                            581 23 65 23 65 112 6 c62 4 151 7 200 7 48 0 87 1 87 3 0 2 -18 56 -40 121
                            l-40 119 143 151 c362 384 673 746 1098 1281 999 1255 2277 3075 3446 4908
                            119 186 143 244 143 347 1 270 -268 484 -542 431z" />
                        <path d="M 0 6800 L 5000 11740 L 12800 11740 L 12800 5000 L 7500 0 Z" fill={currentBackgroundColor} />
                        <path d="M 4350 2856 L 12800 11740 L 5170 2113 Z" fill="url(#brush-handle-gradient)" />
                    </g>
                </svg>
            </LoaderRotatingWrapper>
        </LoaderStaticWrapper>
    );
}

export default PaintbrushLoader;



