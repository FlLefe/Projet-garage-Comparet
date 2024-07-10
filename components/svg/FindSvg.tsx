import React from 'react'

type Props ={
  className: string
}

const FindSvg = ({className}:Props) => {
  return (
    <>
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1024.000000pt" height="1024.000000pt" viewBox="0 0 1024.000000 1024.000000"
 preserveAspectRatio="xMidYMid meet" className={className}>

<g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
 stroke="none">
<path d="M5315 8976 c-306 -59 -529 -172 -722 -368 -195 -196 -308 -403 -364
-668 -32 -152 -33 -412 -1 -559 77 -354 228 -675 757 -1616 160 -284 422 -693
500 -781 l35 -39 30 35 c16 19 76 105 133 190 381 570 905 1555 1046 1968 87
254 112 500 72 730 -11 68 -34 164 -51 212 -150 448 -525 787 -982 886 -100
22 -362 28 -453 10z m88 -111 c-1 -5 -24 -14 -50 -18 -166 -27 -331 -87 -477
-174 -116 -69 -282 -238 -360 -366 -80 -131 -107 -129 -33 3 158 280 462 497
780 555 81 15 143 15 140 0z m172 5 c4 -6 -7 -10 -24 -10 -17 0 -31 5 -31 10
0 6 11 10 24 10 14 0 28 -4 31 -10z m79 -484 c152 -30 274 -95 387 -206 128
-127 199 -274 219 -451 38 -335 -134 -634 -445 -771 -386 -171 -848 7 -1009
390 -72 172 -73 406 -1 583 68 169 228 334 391 402 149 63 308 81 458 53z
m-1224 -221 c0 -8 -4 -15 -10 -15 -5 0 -7 7 -4 15 4 8 8 15 10 15 2 0 4 -7 4
-15z m-47 -125 c-3 -11 -7 -20 -9 -20 -2 0 -4 9 -4 20 0 11 4 20 9 20 5 0 7
-9 4 -20z"/>
<path d="M2813 6332 c-242 -108 -518 -230 -612 -271 -94 -41 -180 -84 -191
-96 -22 -24 -20 -11 -159 -860 -69 -425 -223 -1383 -256 -1590 -14 -93 -50
-318 -80 -500 -29 -181 -72 -447 -95 -590 -23 -143 -54 -341 -70 -440 -55
-346 -70 -446 -70 -480 l0 -34 88 40 c48 23 125 58 172 79 47 20 279 124 515
230 237 105 506 225 599 267 l168 75 217 -98 c269 -122 529 -240 732 -333
l157 -71 88 41 c212 98 995 442 1068 470 l53 19 294 -131 c504 -225 773 -347
838 -379 l43 -22 357 160 c474 213 795 352 811 352 7 0 110 -43 229 -97 119
-53 279 -124 356 -158 77 -35 334 -149 570 -255 237 -106 436 -194 443 -197
20 -9 15 37 -53 464 -36 225 -83 523 -105 663 -56 366 -181 1171 -240 1550
-28 179 -75 485 -106 680 -115 750 -176 1115 -189 1140 -26 50 32 21 -843 424
-151 69 -288 131 -306 137 -36 13 23 37 -611 -248 -115 -52 -217 -102 -226
-111 -10 -10 -43 -66 -75 -127 -31 -60 -88 -165 -125 -232 -37 -68 -67 -123
-66 -123 1 0 46 16 100 35 168 60 451 180 789 334 164 75 179 79 210 69 18 -6
37 -14 41 -18 9 -8 -79 -73 -178 -132 -110 -66 -265 -139 -474 -222 -308 -124
-353 -138 -453 -144 l-88 -4 -45 -77 -45 -76 102 -3 c128 -4 200 8 352 59 351
118 695 276 899 413 71 47 132 86 136 86 4 0 113 -48 242 -106 129 -58 246
-111 261 -117 17 -7 29 -21 33 -37 5 -23 90 -622 97 -682 l3 -28 -285 -4
c-201 -2 -309 -8 -365 -19 -309 -59 -545 -164 -732 -326 l-72 -61 -455 0 -456
0 0 -84 0 -85 382 -1 c210 0 384 -3 387 -6 4 -3 -23 -34 -60 -68 -108 -103
-250 -169 -442 -207 -93 -18 -154 -19 -1165 -19 -666 0 -1091 4 -1132 10 -175
27 -334 106 -379 189 -38 68 -32 120 32 311 57 168 97 309 97 342 0 13 -8 18
-29 18 -21 0 -30 6 -35 23 -9 35 -8 37 24 37 34 0 36 8 14 56 -15 32 -15 36 0
53 31 34 132 80 222 102 63 15 124 22 209 22 164 2 169 -1 215 -125 52 -138
92 -199 200 -308 204 -207 475 -339 832 -406 47 -9 167 -18 281 -21 l197 -6 0
87 0 86 -152 0 c-213 0 -343 22 -538 92 -161 58 -330 158 -433 256 -71 68
-177 237 -177 282 0 6 63 10 159 10 181 0 171 -5 171 91 l0 59 -195 0 c-174 0
-200 2 -247 21 -161 64 -483 65 -692 4 -51 -15 -66 -13 -66 10 0 25 215 93
376 119 148 24 271 29 420 14 260 -25 401 -12 594 52 47 15 84 32 83 37 -1 6
-19 38 -39 72 -28 47 -41 60 -53 55 -49 -21 -180 -54 -206 -52 -26 3 -19 8 60
46 49 23 100 45 112 48 13 4 23 8 23 10 0 8 -144 259 -155 272 -10 11 -31 5
-118 -32 -57 -25 -112 -46 -120 -46 -21 0 -181 71 -954 421 -83 38 -162 69
-175 68 -13 0 -222 -89 -465 -197z m837 -369 c190 -85 381 -169 424 -186 l79
-32 -69 -2 c-307 -10 -569 -71 -812 -189 l-112 -54 -93 68 c-150 112 -211 150
-333 209 l-116 57 49 25 c146 75 600 270 618 264 11 -3 175 -75 365 -160z
m-1035 -316 c111 -55 191 -109 300 -200 33 -28 64 -54 69 -58 4 -4 -12 -32
-37 -63 -25 -31 -55 -78 -68 -106 l-23 -50 -283 0 c-255 0 -283 2 -283 16 0
21 79 534 85 552 6 16 93 -17 240 -91z m1795 84 l45 -8 -45 -1 c-25 0 -65 3
-90 7 l-45 8 45 1 c25 0 65 -3 90 -7z m-1070 -345 c-1 -17 -108 -86 -125 -80
-25 10 -17 22 42 62 55 37 83 44 83 18z m-187 -142 c12 -4 11 -13 -5 -59 -14
-37 -25 -52 -34 -48 -19 7 -18 35 3 78 9 19 18 35 19 35 1 0 9 -2 17 -6z
m-313 -194 l0 -30 -285 0 -285 0 0 30 0 30 285 0 285 0 0 -30z m290 -48 c6
-56 2 -66 -24 -56 -11 4 -16 19 -16 44 0 21 -3 46 -6 55 -5 13 -2 16 17 13 21
-3 25 -10 29 -56z m-314 -146 c-4 -24 -27 -110 -52 -192 -80 -266 -81 -337 -8
-481 115 -228 387 -380 805 -449 87 -14 204 -18 714 -23 l610 -6 3 -601 2
-601 -464 -206 c-255 -114 -471 -207 -479 -207 -19 0 -196 76 -709 304 -218
97 -403 176 -410 176 -8 0 -151 -62 -319 -138 -469 -214 -679 -306 -684 -300
-3 3 6 79 19 169 14 90 53 342 86 559 34 217 83 541 111 720 27 179 60 388 72
465 l23 140 122 3 c137 3 129 -3 130 95 l0 57 -114 0 -115 0 6 48 c4 26 22
147 41 269 19 123 34 227 34 233 0 6 102 10 291 10 l291 0 -6 -44z m304 -8 c0
-7 -3 -30 -6 -50 -6 -32 -11 -38 -31 -38 -18 0 -23 4 -20 14 3 8 9 31 13 50 4
26 11 36 25 36 11 0 19 -6 19 -12z m4710 -28 c0 -19 -7 -20 -100 -20 -93 0
-100 1 -100 20 0 19 7 20 100 20 93 0 100 -1 100 -20z m310 5 c0 -12 -15 -15
-75 -15 -60 0 -75 3 -75 15 0 12 15 15 75 15 60 0 75 -3 75 -15z m-656 -31 c4
-9 5 -18 4 -18 -9 -5 -159 -46 -169 -46 -6 0 -9 8 -7 17 2 11 27 25 73 40 85
27 91 27 99 7z m-289 -101 c0 -18 -120 -92 -135 -83 -20 12 -9 27 50 65 54 34
85 41 85 18z m-4131 -40 c-4 -16 -10 -39 -14 -53 -4 -15 -15 -26 -28 -28 -26
-4 -26 -8 -7 56 12 40 20 52 36 52 16 0 18 -4 13 -27z m5120 -80 c3 -16 37
-246 75 -513 125 -868 221 -1521 255 -1735 18 -115 32 -211 30 -213 -3 -4
-214 90 -704 313 -190 86 -354 157 -365 157 -11 0 -164 -64 -340 -142 -600
-267 -800 -353 -816 -352 -15 0 -245 100 -589 254 -85 38 -172 77 -192 85
l-38 16 0 518 c0 591 -11 532 96 527 l59 -3 3 52 3 52 -78 3 -78 3 0 55 0 55
235 6 c313 8 511 41 749 124 274 96 444 215 598 417 134 178 210 233 423 308
79 28 184 36 462 38 l206 2 6 -27z m-1200 -22 c3 -5 -13 -32 -36 -61 -36 -45
-43 -50 -56 -37 -13 13 -10 21 24 61 37 45 57 55 68 37z m-3964 -121 c0 -42
-3 -50 -19 -50 -22 0 -31 19 -31 66 0 30 3 34 25 34 23 0 25 -3 25 -50z m3815
-50 c6 -10 -52 -100 -64 -100 -3 0 -12 4 -20 9 -11 7 -6 18 20 54 34 46 52 56
64 37z m-3767 -132 c27 -52 27 -58 5 -58 -10 0 -28 17 -40 40 -28 47 -29 60
-5 60 10 0 26 -17 40 -42z m3611 -32 c9 -11 2 -21 -31 -48 -69 -55 -102 -75
-115 -71 -24 9 -12 28 36 61 27 18 57 42 66 52 21 24 29 25 44 6z m-3461 -103
c31 -21 59 -39 61 -40 3 -2 -2 -10 -10 -18 -13 -14 -21 -11 -64 20 -28 19 -54
36 -58 38 -8 2 1 37 9 37 2 0 30 -17 62 -37z m3186 -59 c8 -21 15 -16 -77 -47
-66 -22 -79 -24 -84 -11 -7 20 -1 25 65 50 71 27 88 28 96 8z m-2943 -45 c74
-25 81 -30 70 -47 -12 -20 -151 25 -151 50 0 23 2 23 81 -3z m2649 -38 c0 -15
-14 -21 -82 -34 -80 -14 -97 -11 -98 14 0 6 124 33 168 38 6 0 12 -7 12 -18z
m-2292 -16 c6 -3 12 -14 12 -26 0 -19 -4 -21 -37 -15 -21 3 -59 6 -85 6 -43 0
-48 2 -48 23 0 22 3 23 73 19 39 -2 78 -5 85 -7z m322 -25 c0 -18 -7 -20 -85
-20 -78 0 -85 2 -85 20 0 18 7 20 85 20 78 0 85 -2 85 -20z m290 0 c0 -18 -7
-20 -80 -20 -73 0 -80 2 -80 20 0 18 7 20 80 20 73 0 80 -2 80 -20z m300 0 c0
-18 -7 -20 -83 -20 -76 0 -83 2 -83 20 0 18 7 20 83 20 76 0 83 -2 83 -20z
m290 -2 c0 -22 -3 -23 -80 -20 -71 3 -80 6 -80 23 0 17 8 19 80 19 76 0 80 -1
80 -22z m480 2 c0 -18 -7 -20 -80 -20 -73 0 -80 2 -80 20 0 18 7 20 80 20 73
0 80 -2 80 -20z m300 0 c0 -18 -7 -20 -80 -20 -73 0 -80 2 -80 20 0 18 7 20
80 20 73 0 80 -2 80 -20z m-585 -10 c0 -10 -9 -14 -29 -13 -33 2 -41 8 -31 23
10 16 60 8 60 -10z m-7 -232 c3 -56 2 -58 -23 -58 -24 0 -25 2 -25 61 0 57 1
60 23 57 19 -3 22 -10 25 -60z m2 -203 c0 -41 -4 -57 -15 -62 -21 -8 -26 -1
-32 46 -7 50 1 71 27 71 18 0 20 -6 20 -55z m-2 -212 c-3 -51 -6 -58 -25 -61
-22 -3 -23 0 -23 57 0 59 1 61 25 61 25 0 26 -2 23 -57z m-2 -220 c-1 -51 -3
-58 -21 -58 -17 0 -20 8 -23 58 -3 55 -2 57 21 57 24 0 25 -3 23 -57z m4 -218
c0 -50 -2 -55 -22 -55 -21 0 -23 6 -26 55 -3 53 -2 55 23 55 24 0 25 -3 25
-55z m-2 -202 c-3 -50 -6 -58 -23 -58 -16 0 -21 8 -23 44 -4 55 2 71 28 71 19
0 21 -5 18 -57z"/>
<path d="M2528 5453 c-2 -5 -5 -34 -7 -65 l-3 -58 61 0 61 0 0 65 0 65 -54 0
c-30 0 -56 -3 -58 -7z"/>
<path d="M2296 3738 c-3 -7 -7 -34 -10 -60 l-6 -48 85 0 85 0 0 29 c0 16 3 43
6 60 l7 31 -82 0 c-57 0 -83 -4 -85 -12z"/>
<path d="M2546 3713 c-14 -85 -15 -83 73 -83 l79 0 6 31 c3 17 6 44 6 60 l0
29 -79 0 -78 0 -7 -37z"/>
<path d="M2345 3532 c-39 -2 -73 -8 -77 -15 -4 -7 -8 -32 -8 -57 0 -44 1 -46
28 -44 15 1 50 3 79 3 57 1 55 -1 65 90 3 28 4 28 -87 23z"/>
<path d="M2518 3483 c-3 -32 -1 -61 4 -64 5 -3 41 -7 79 -8 77 -2 74 -5 83 75
l5 52 -83 1 -83 1 -5 -57z"/>
<path d="M2949 3434 l-151 -74 4 -110 c2 -68 7 -109 13 -106 6 2 68 27 139 56
l128 52 382 -21 c209 -12 389 -21 399 -21 15 0 17 12 17 114 l0 114 -37 6
c-21 3 -67 8 -103 11 -36 3 -171 14 -300 25 -129 11 -259 22 -288 24 -49 4
-62 0 -203 -70z"/>
<path d="M4302 3164 l3 -136 48 -5 47 -4 0 141 0 140 -50 0 -51 0 3 -136z"/>
<path d="M4490 3162 l0 -138 50 -1 50 -2 0 139 0 140 -50 0 -50 0 0 -138z"/>
<path d="M2200 3151 c0 -22 -3 -46 -6 -55 -5 -14 6 -16 80 -16 75 0 86 2 86
18 0 9 3 34 6 55 l7 37 -87 0 -86 0 0 -39z"/>
<path d="M2456 3168 c-3 -13 -6 -38 -6 -55 l0 -33 79 0 79 0 6 31 c15 78 15
79 -73 79 -73 0 -79 -2 -85 -22z"/>
<path d="M2932 3133 l-133 -56 3 -94 c1 -59 6 -92 13 -89 5 2 69 27 140 56
150 60 124 58 485 35 124 -8 273 -18 333 -21 l107 -7 0 95 0 96 -122 7 c-68 3
-226 13 -353 21 -339 21 -319 22 -473 -43z"/>
<path d="M3020 2919 c-41 -17 -108 -44 -148 -61 l-74 -31 6 -41 c3 -22 5 -47
5 -53 1 -7 8 -13 16 -13 9 0 34 -9 57 -21 l40 -21 88 32 87 32 184 -11 c101
-6 277 -13 392 -17 l207 -7 0 96 0 95 -92 6 c-51 3 -208 13 -348 21 -140 8
-275 17 -300 19 -34 4 -63 -2 -120 -25z"/>
<path d="M4302 2830 l3 -123 48 -4 47 -4 0 120 0 121 -34 0 c-19 0 -42 3 -50
6 -15 6 -16 -7 -14 -116z"/>
<path d="M4494 2937 c-2 -7 -3 -62 -2 -123 l3 -109 48 -3 47 -3 0 125 0 126
-45 0 c-29 0 -48 -5 -51 -13z"/>
<path d="M2180 2790 l0 -60 75 0 c83 0 80 -2 89 73 l6 47 -85 0 -85 0 0 -60z"/>
<path d="M2440 2790 l0 -60 74 0 73 0 7 38 c14 84 15 82 -74 82 l-80 0 0 -60z"/>
<path d="M3060 2661 l-35 -19 35 -15 c48 -20 255 -110 310 -135 39 -17 75 -20
278 -25 l232 -5 0 88 0 88 -62 6 c-35 3 -175 11 -313 16 -137 5 -286 12 -330
15 -66 4 -86 2 -115 -14z"/>
<path d="M3566 2401 c12 -13 288 -141 304 -141 6 0 10 31 10 70 l0 70 -144 0
c-79 0 -153 3 -163 6 -13 5 -15 4 -7 -5z"/>
<path d="M7620 4183 c-14 -2 -85 -15 -157 -30 l-133 -27 0 -90 0 -89 93 6 c50
3 131 11 178 18 l87 13 57 -35 c121 -73 220 -146 223 -163 5 -22 18 -29 -160
83 l-102 65 -80 -13 c-232 -36 -282 -41 -403 -41 l-133 0 0 -91 0 -91 188 6
c103 4 239 12 303 18 l116 11 54 -32 c109 -65 125 -75 172 -109 61 -44 65 -75
5 -34 -24 16 -83 52 -133 80 l-90 51 -90 -15 c-75 -12 -369 -32 -492 -34 l-33
0 0 -90 0 -90 156 0 c86 0 220 7 299 16 l143 16 134 -82 c135 -84 148 -94 148
-119 0 -10 -3 -11 -14 -2 -8 7 -68 44 -133 83 l-118 70 -125 -16 c-94 -12
-386 -34 -482 -36 -5 0 -8 -41 -8 -91 l0 -91 133 7 c72 3 191 11 262 18 214
19 202 22 347 -68 110 -68 147 -99 136 -111 -2 -1 -63 31 -136 72 l-132 75
-128 -15 c-113 -14 -394 -36 -458 -36 -24 0 -24 -2 -24 -85 l0 -85 197 0 c108
0 245 5 304 12 l108 12 113 -69 c125 -75 158 -101 158 -123 0 -13 -2 -13 -17
0 -10 8 -70 45 -134 81 l-117 67 -58 -15 c-31 -8 -79 -18 -106 -21 l-48 -7 0
-108 0 -108 104 6 104 6 94 -58 c51 -33 125 -82 163 -110 81 -60 188 -125 204
-125 12 0 14 1142 2 1340 l-6 105 -233 157 c-231 154 -253 166 -302 161z m480
-499 c0 -30 -2 -54 -5 -54 -2 0 -16 5 -30 12 -23 10 -25 16 -25 75 l0 64 30
-21 c27 -19 30 -27 30 -76z m0 -220 c0 -60 -4 -66 -36 -52 -22 10 -24 17 -24
74 l0 63 30 -17 c27 -15 30 -22 30 -68z m-20 -164 c15 -15 20 -33 20 -70 0
-52 -7 -58 -41 -40 -15 9 -19 22 -19 70 0 64 8 72 40 40z m14 -244 c10 -35 7
-96 -5 -96 -6 0 -19 5 -30 10 -15 9 -19 22 -19 70 0 59 0 60 24 49 13 -6 27
-21 30 -33z m6 -260 c0 -29 -3 -55 -6 -59 -4 -3 -17 1 -30 10 -21 13 -24 23
-24 74 l0 60 30 -16 c28 -14 30 -20 30 -69z m-157 -60 c23 -14 27 -23 27 -61
0 -25 -3 -45 -7 -45 -12 0 -118 62 -125 74 -4 6 -8 32 -8 58 l0 48 43 -29 c23
-16 54 -36 70 -45z m132 -88 c22 -10 25 -17 25 -63 0 -61 -4 -67 -36 -53 -21
10 -24 18 -24 70 0 32 2 58 5 58 2 0 16 -5 30 -12z"/>
<path d="M5814 3568 c3 -13 6 -38 6 -55 l0 -33 550 0 550 0 0 55 0 55 -556 0
-556 0 6 -22z"/>
<path d="M5710 2813 l0 -328 42 -17 c23 -10 43 -16 46 -13 2 2 7 157 9 344 l5
341 -51 0 -51 0 0 -327z"/>
<path d="M5900 2776 l0 -363 43 -17 c23 -9 45 -16 48 -16 2 0 4 171 4 380 l0
380 -47 0 -48 0 0 -364z"/>
<path d="M6090 2751 l0 -389 44 -4 c42 -3 45 -1 50 26 3 16 6 192 6 392 l0
364 -50 0 -50 0 0 -389z"/>
<path d="M6280 2750 l0 -390 50 0 50 0 0 390 0 390 -50 0 -50 0 0 -390z"/>
<path d="M6470 2749 c0 -368 1 -391 18 -384 9 4 32 9 50 12 l32 6 0 378 0 379
-50 0 -50 0 0 -391z"/>
<path d="M6660 2775 c0 -201 1 -365 3 -365 2 0 24 7 50 16 l47 16 0 349 0 349
-50 0 -50 0 0 -365z"/>
<path d="M7570 5545 l0 -215 50 0 50 0 0 215 0 215 -50 0 -50 0 0 -215z"/>
<path d="M7418 5643 l-28 -4 0 -155 0 -154 45 0 45 0 0 160 c0 176 5 163 -62
153z"/>
<path d="M7765 5642 c-3 -3 -5 -74 -5 -159 l0 -153 44 0 45 0 6 53 c3 28 5 99
3 157 l-3 104 -42 2 c-23 1 -45 -1 -48 -4z"/>
<path d="M6390 5100 l0 -170 50 0 50 0 0 170 0 170 -50 0 -50 0 0 -170z"/>
<path d="M6783 5254 c-2 -6 -3 -81 -1 -165 l3 -154 48 -3 47 -3 0 168 0 169
-46 -1 c-26 0 -48 -5 -51 -11z"/>
<path d="M6590 5095 l0 -165 50 0 50 0 0 165 0 165 -50 0 -50 0 0 -165z"/>
<path d="M3650 4620 l0 -130 50 0 50 0 0 130 0 130 -50 0 -50 0 0 -130z"/>
<path d="M3850 4620 l0 -130 50 0 50 0 0 130 0 130 -50 0 -50 0 0 -130z"/>
<path d="M3980 4345 l0 -55 79 0 79 0 4 55 3 55 -82 0 -83 0 0 -55z"/>
<path d="M4250 4345 l0 -55 83 0 82 0 -1 52 -2 53 -81 3 -81 3 0 -56z"/>
<path d="M5005 2009 c-60 -28 -132 -61 -160 -73 -27 -13 -85 -38 -127 -56 -43
-17 -78 -34 -78 -36 0 -2 17 -4 38 -3 31 0 34 2 17 10 -17 8 -16 9 7 6 15 -2
25 -1 23 3 -7 11 52 33 66 24 8 -4 10 -3 5 4 -5 8 4 11 26 10 18 -1 57 -1 87
0 48 2 53 4 48 22 -3 11 -1 18 4 14 5 -3 9 -12 9 -20 0 -8 7 -14 15 -14 8 0
15 6 15 14 0 14 29 30 38 21 3 -3 0 -5 -6 -5 -7 0 -12 -7 -12 -15 0 -12 16
-15 88 -15 76 0 89 2 100 20 13 21 52 28 52 10 0 -7 19 -10 46 -9 25 2 49 -2
52 -8 4 -7 33 -13 65 -15 31 -1 57 -6 57 -10 0 -5 -5 -8 -12 -8 -6 0 -9 -2 -7
-5 3 -2 18 -1 34 3 27 8 26 9 -35 36 -51 23 -64 26 -72 15 -8 -11 -9 -11 -5 2
4 12 -24 29 -121 72 -70 32 -131 57 -137 56 -5 0 -59 -23 -120 -50z m300 -77
c-3 -3 -11 0 -18 7 -9 10 -8 11 6 5 10 -3 15 -9 12 -12z m-435 -12 c-24 -15
-37 -11 -16 5 11 8 22 12 25 9 3 -3 -1 -9 -9 -14z"/>
<path d="M7273 1953 c-166 -74 -214 -103 -172 -103 6 0 7 5 4 10 -9 14 19 12
33 -2 9 -9 12 -8 12 5 0 9 7 17 16 17 8 0 12 4 9 10 -3 5 11 2 31 -6 27 -11
43 -13 63 -5 44 17 242 36 249 23 4 -5 24 -13 45 -17 33 -6 37 -5 37 13 0 31
47 43 72 20 7 -7 27 -14 43 -15 53 -3 70 -7 76 -16 3 -5 21 -12 40 -17 19 -4
43 -11 54 -14 11 -3 -14 10 -55 30 -41 20 -85 37 -97 38 -11 0 -19 4 -17 7 6
10 -93 52 -105 44 -6 -3 -10 -1 -9 5 3 11 -103 61 -126 59 -6 0 -97 -39 -203
-86z m37 -17 c0 -2 -9 -6 -20 -9 -11 -3 -18 -1 -14 4 5 9 34 13 34 5z m275 -6
c3 -5 -3 -10 -15 -10 -12 0 -18 5 -15 10 3 6 10 10 15 10 5 0 12 -4 15 -10z"/>
<path d="M2730 1989 c-47 -22 -96 -44 -110 -50 -37 -14 -188 -91 -165 -83 11
4 28 6 38 6 9 0 15 4 11 9 -3 6 6 9 23 7 18 -2 27 1 26 10 -4 15 13 16 22 1 5
-7 13 -4 26 7 17 15 19 15 25 0 3 -9 11 -13 18 -9 6 4 38 8 71 10 33 1 80 4
105 6 25 3 50 1 55 -3 6 -5 39 -6 73 -3 47 4 62 9 58 19 -3 8 -1 14 4 14 6 0
10 -4 10 -9 0 -6 8 -9 18 -9 9 0 26 -2 37 -6 33 -11 -74 42 -160 80 -44 20
-84 37 -90 39 -5 2 -48 -14 -95 -36z m-5 -28 c-3 -5 5 -12 17 -14 15 -3 11 -4
-9 -4 -25 1 -30 4 -21 14 12 15 22 18 13 4z m159 -26 c-4 -9 -19 -15 -37 -15
-35 0 -26 16 13 23 14 2 26 5 27 6 1 0 0 -6 -3 -14z m96 -1 c0 -8 -19 -13 -24
-6 -3 5 1 9 9 9 8 0 15 -2 15 -3z"/>
<path d="M3100 1895 c0 -5 68 -35 79 -35 8 1 -61 39 -71 40 -5 0 -8 -2 -8 -5z"/>
<path d="M5534 1871 c3 -5 16 -11 28 -14 22 -6 22 -5 4 8 -22 17 -40 20 -32 6z"/>
<path d="M7172 1871 c-11 -7 -10 -9 3 -14 9 -4 14 -3 10 2 -3 5 1 12 7 14 7 3
9 6 3 6 -5 0 -16 -3 -23 -8z"/>
<path d="M7025 1840 c-22 -11 -32 -18 -22 -15 11 3 30 8 43 11 13 3 24 10 24
15 0 11 2 12 -45 -11z"/>
<path d="M5607 1839 c7 -7 15 -10 18 -7 3 3 -2 9 -12 12 -14 6 -15 5 -6 -5z"/>
<path d="M2380 1830 c-9 -6 -10 -10 -3 -10 6 0 15 5 18 10 8 12 4 12 -15 0z"/>
<path d="M4580 1819 c-40 -22 -32 -25 17 -7 18 7 33 16 33 20 0 11 -9 9 -50
-13z"/>
<path d="M7930 1836 c0 -2 7 -7 16 -10 8 -3 12 -2 9 4 -6 10 -25 14 -25 6z"/>
<path d="M6940 1804 l-25 -15 25 7 c28 7 35 12 29 18 -2 2 -15 -2 -29 -10z"/>
<path d="M2290 1790 c-8 -5 -10 -10 -5 -10 6 0 17 5 25 10 8 5 11 10 5 10 -5
0 -17 -5 -25 -10z"/>
</g>
</svg>
    </>
  )
}

export default FindSvg