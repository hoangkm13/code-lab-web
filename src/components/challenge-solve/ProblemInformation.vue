<template>
  <div class="information">
    <el-scrollbar height="600px">
      <div class="content-text challenge-text mlB hackdown-container theme-m snipcss-FORdO">
        <div class="challenge-body-html">
          <div class="challenge_problem_statement">
            <div class="msB challenge_problem_statement_body">
              <div class="hackdown-content">
                <p>
                  Complete the function
                  <em>
                    solveMeFirst
                  </em>
                  to compute the sum of two integers.
                </p>
                <p>
                  <strong>
                    Example
                  </strong>
                  <br>
                  <span class="MathJax_SVG style-E9NAX" id="MathJax-Element-1-Frame">
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="5.491ex" height="2.176ex"
                   style="vertical-align: -0.338ex;" viewBox="0 -791.3 2364.1 936.9" role="img" focusable="false">
                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)">
                  <path stroke-width="1"
                        d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z">
                  </path>
                  <g transform="translate(807,0)">
                    <path stroke-width="1"
                          d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z">
                    </path>
                  </g>
                  <g transform="translate(1863,0)">
                    <path stroke-width="1"
                          d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z">
                    </path>
                  </g>
                </g>
              </svg>
            </span>
                  <br>
                  <span class="MathJax_SVG style-l6mpB" id="MathJax-Element-2-Frame">
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="5.258ex" height="2.176ex"
                   style="vertical-align: -0.338ex;" viewBox="0 -791.3 2264.1 936.9" role="img" focusable="false">
                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)">
                  <path stroke-width="1"
                        d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z">
                  </path>
                  <g transform="translate(707,0)">
                    <path stroke-width="1"
                          d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z">
                    </path>
                  </g>
                  <g transform="translate(1763,0)">
                    <path stroke-width="1"
                          d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z">
                    </path>
                  </g>
                </g>
              </svg>
            </span>
                </p>
                <p>
                  Return
                  <span class="MathJax_SVG style-MTeLv" id="MathJax-Element-3-Frame">
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="2.325ex" height="2.176ex"
                   style="vertical-align: -0.338ex;" viewBox="0 -791.3 1001 936.9" role="img" focusable="false">
                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)">
                  <path stroke-width="1"
                        d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                  </path>
                  <path stroke-width="1"
                        d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"
                        transform="translate(500,0)">
                  </path>
                </g>
              </svg>
            </span>
                  .
                </p>
                <p>
                  <strong>
                    Function Description
                  </strong>
                </p>
                <p>
                  Complete the
                  <em>
                    solveMeFirst
                  </em>
                  function in the editor below.
                </p>
                <p>
                  <em>
                    solveMeFirst
                  </em>
                  has the following parameters:
                </p>
                <ul>
                  <li>
                    <em>
                      int a
                    </em>
                    : the first value
                  </li>
                  <li>
                    <em>
                      int b
                    </em>
                    : the second value
                  </li>
                </ul>
                <p>
                  Returns
                  <br>
                  -
                  <em>
                    int
                  </em>
                  : the sum of
                  <span class="MathJax_SVG style-yBdXZ" id="MathJax-Element-4-Frame">
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.23ex" height="1.676ex"
                   style="vertical-align: -0.338ex;" viewBox="0 -576.1 529.5 721.6" role="img" focusable="false">
                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)">
                  <path stroke-width="1"
                        d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z">
                  </path>
                </g>
              </svg>
            </span>
                  and
                  <span class="MathJax_SVG style-RrSAb" id="MathJax-Element-5-Frame">
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="0.998ex" height="2.176ex"
                   style="vertical-align: -0.338ex;" viewBox="0 -791.3 429.5 936.9" role="img" focusable="false">
                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)">
                  <path stroke-width="1"
                        d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z">
                  </path>
                </g>
              </svg>
            </span>
                </p>
              </div>
            </div>
          </div>
          <div class="challenge_constraints">
            <div class="msB challenge_constraints_title">
              <p>
                <strong>
                  Constraints
                </strong>
              </p>
            </div>
            <div class="msB challenge_constraints_body">
              <div class="hackdown-content">

                <p>
            <span class="MathJax_SVG style-QQrU7" id="MathJax-Element-1-Frame">
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="15.271ex" height="2.509ex"
                   style="vertical-align: -0.671ex;" viewBox="0 -791.3 6574.8 1080.4" role="img" focusable="false">
                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)">
                  <path stroke-width="1"
                        d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                  </path>
                  <g transform="translate(778,0)">
                    <path stroke-width="1"
                          d="M674 636Q682 636 688 630T694 615T687 601Q686 600 417 472L151 346L399 228Q687 92 691 87Q694 81 694 76Q694 58 676 56H670L382 192Q92 329 90 331Q83 336 83 348Q84 359 96 365Q104 369 382 500T665 634Q669 636 674 636ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z">
                    </path>
                  </g>
                  <g transform="translate(1834,0)">
                    <path stroke-width="1"
                          d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z">
                    </path>
                  </g>
                  <g transform="translate(2364,0)">
                    <path stroke-width="1"
                          d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z">
                    </path>
                  </g>
                  <g transform="translate(2809,0)">
                    <path stroke-width="1"
                          d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z">
                    </path>
                  </g>
                  <g transform="translate(3516,0)">
                    <path stroke-width="1"
                          d="M674 636Q682 636 688 630T694 615T687 601Q686 600 417 472L151 346L399 228Q687 92 691 87Q694 81 694 76Q694 58 676 56H670L382 192Q92 329 90 331Q83 336 83 348Q84 359 96 365Q104 369 382 500T665 634Q669 636 674 636ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z">
                    </path>
                  </g>
                  <g transform="translate(4572,0)">
                    <path stroke-width="1"
                          d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                    </path>
                    <path stroke-width="1"
                          d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"
                          transform="translate(500,0)">
                    </path>
                    <path stroke-width="1"
                          d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"
                          transform="translate(1001,0)">
                    </path>
                    <path stroke-width="1"
                          d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"
                          transform="translate(1501,0)">
                    </path>
                  </g>
                </g>
              </svg>
            </span>
                </p>
              </div>
            </div>
          </div>
          <div class="challenge_sample_input">
            <div class="msB challenge_sample_input_title">
              <p>
                <strong>
                  Sample Input
                </strong>
              </p>
            </div>
            <div class="msB challenge_sample_input_body">
              <div class="hackdown-content">

              <pre>
<code>
a = 2
b = 3
</code>
</pre>
              </div>
            </div>
          </div>
          <div class="challenge_sample_output">
            <div class="msB challenge_sample_output_title">
              <p>
                <strong>
                  Sample Output
                </strong>
              </p>
            </div>
            <div class="msB challenge_sample_output_body">
              <div class="hackdown-content">
              <pre>
<code>
5
</code>
</pre>
              </div>
            </div>
          </div>
          <div class="challenge_explanation">
            <div class="msB challenge_explanation_title">
              <p>
                <strong>
                  Explanation
                </strong>
              </p>
            </div>
            <div class="msB challenge_explanation_body">
              <div class="hackdown-content">

                <svg style="display: none;">
                  <defs id="MathJax_SVG_glyphs">
                  </defs>
                </svg>
                <p>
            <span class="MathJax_SVG style-T56o8" id="MathJax-Element-1-Frame">
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="9.426ex" height="2.343ex"
                   style="vertical-align: -0.505ex;" viewBox="0 -791.3 4058.5 1008.6" role="img" focusable="false">
                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)">
                  <path stroke-width="1"
                        d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z">
                  </path>
                  <g transform="translate(722,0)">
                    <path stroke-width="1"
                          d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z">
                    </path>
                  </g>
                  <g transform="translate(1723,0)">
                    <path stroke-width="1"
                          d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z">
                    </path>
                  </g>
                  <g transform="translate(2501,0)">
                    <path stroke-width="1"
                          d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z">
                    </path>
                  </g>
                  <g transform="translate(3558,0)">
                    <path stroke-width="1"
                          d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z">
                    </path>
                  </g>
                </g>
              </svg>
            </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </el-scrollbar>
  </div>
</template>
<script setup lang="ts">

</script>


<style scoped>
body {
  /* CSS Variables that may have been missed get put on body */
  --hr-neutral-0: #fff;
  --color-page-background:  var(--hr-neutral-0);
  --hr-neutral-10: #eaeaec;
  --color-border:  var(--hr-neutral-10);
  --hr-neutral-20: #c9c9cf;
  --color-input-border:  var(--hr-neutral-20);
  --hr-neutral-90: #0a0a0b;
  --color-input-text:  var(--hr-neutral-90);
  --color-checkbox-border-default:  var(--hr-neutral-20);
  --hr-neutral-70: #3a3a40;
  --color-checkbox-border-hover:  var(--hr-neutral-70);
  --color-checkbox-border-checked:  var(--hr-neutral-90);
  --color-text-dark-faded: #576871;
  --color-dialog-text:  var(--color-text-dark-faded);
}

@media all{
  div {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }
}

div {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
}

.theme-m {
  font-weight: normal;
  font-family: Arial,Helvetica,sans-serif;
  font-family: var(--font-family-text);
  color: var(--color-text-dark);
  line-height: 1.2em;
}

.theme-m  {
  min-width: auto;
}

.full-screen-view .problem-statement-container {
  min-height: 100%;
}

.full-screen-view .left-pane-content {
  flex: 1;
  min-height: calc(100vh - 50px);
  max-width: calc(100% - 40px);
  background-color: var(--card-shadow-1);
  box-shadow: 0 3px 10px 0 rgba(0,0,0,.1);
}

.full-screen-view .left-pane-container {
  display: flex;
  overflow: hidden;
  align-items: flex-start;
}

.full-screen-view .fs-left-pane {
  overflow: auto;
  height: calc(100vh - 50px);
}

.full-screen-view .fs-pains-container {
  display: flex;
}

.full-screen-view {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  background-color: #f3f7f7;
  background-color: var(--color-bg);
}

@media all{
  section {
    display: block;
    border:  0;
    font:  inherit;
    font-size:  100%;
    margin:  0;
    outline:  0;
    padding:  0;
    vertical-align:  baseline;
  }
}

section {
  display: block;
  border:  0;
  font:  inherit;
  font-size:  100%;
  margin:  0;
  outline:  0;
  padding:  0;
  vertical-align:  baseline;
}

.theme-m.new-design .community-content {
  flex-grow: 1;
}

.theme-m.new-design {
  display: flex;
  flex-direction: column;
  min-width: 1024px;
  min-height: 100vh;
}

.challenges-page {
  background: var(--color-bg);
}

.hr-community .challenges-page {
  background: var(--color-page-background);
}

@media all{
  body {
    border:    0;
    font:    inherit;
    font-size:    100%;
    margin:  0;
    outline:    0;
    padding:    0;
    vertical-align:    baseline;
    background:   #fff;
    height:   inherit;
    color:   #39424e;
    font-weight:   normal;
    line-height:   1.4em;
    -webkit-font-smoothing:   antialiased;
    -moz-osx-font-smoothing:   grayscale;
    font-family:  "Whitney SSm A","Whitney SSm B","Avenir","Segoe UI","Ubuntu","Helvetica Neue",Helvetica,Arial,sans-serif;
  }
}

body {
  border:     0;
  font:     inherit;
  font-size:  1rem;
  margin:  0;
  outline:     0;
  padding:     0;
  vertical-align:     baseline;
  background:    #fff;
  height:    inherit;
  color:  var(--hr-neutral-90);
  font-weight:  normal;
  line-height:  1.5rem;
  -webkit-font-smoothing:    antialiased;
  -moz-osx-font-smoothing:    grayscale;
  font-family:  var(--hr-font-family-text);
  font-style: normal;
  text-size-adjust: 100%;
}

.hr-community {
  --color-page-background: var(--hr-neutral-0);
  --color-border: var(--hr-neutral-10);
  --color-input-border: var(--hr-neutral-20);
  --color-input-text: var(--hr-neutral-90);
  --color-checkbox-border-default: var(--hr-neutral-20);
  --color-checkbox-border-hover: var(--hr-neutral-70);
  --color-checkbox-border-checked: var(--hr-neutral-90);
}

body.hr-community {
  --color-dialog-text: var(--color-text-dark-faded);
  height: auto;
}

@media all{
  html {
    border:   0;
    font:   inherit;
    font-size:   100%;
    margin:   0;
    outline:   0;
    padding:   0;
    vertical-align:   baseline;
    height:  100%;
    overflow:  auto;
    text-size-adjust:  100%;
    background:  #fff;
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
}

html {
  border:    0;
  font:    inherit;
  font-size:  16px;
  margin:    0;
  outline:    0;
  padding:    0;
  vertical-align:    baseline;
  height:   100%;
  overflow:   auto;
  text-size-adjust:   100%;
  background:   #fff;
  line-height:  1.15;
  -ms-text-size-adjust:  100%;
  -webkit-text-size-adjust:  100%;
}

:root {
  --color-bg:               #f3f7f7;
  --color-shade-light:               #e7eeef;
  --color-text-medium-dark:               #39424e;
  --color-text-dark:               #0e141e;
  --color-text-dark-faded:               #576871;
  --card-shadow-1:               #fff;
  --hr-neutral-0:              #fff;
  --hr-neutral-10:              #eaeaec;
  --hr-neutral-20:              #c9c9cf;
  --hr-neutral-70:              #3a3a40;
  --hr-neutral-90:              #0a0a0b;
  --hr-font-family-text:             "Open Sans", "OpenSans", arial, helvetica, sans-serif;
  --font-family-text:          Arial, Helvetica, sans-serif;
  --font-family-input:          monaco, Courier, monospace;
  --color-tab-item-active-bg:      var(--card-shadow-1);
  --color-tc-result-label-text:     var(--color-text-dark-faded);
}

@media all{
  .mlB {
    margin-bottom: 20px;
  }
}

.mlB {
  margin-bottom: 20px;
}

.hackdown-container  {
  background-color: var(--card-shadow-1);
}

@media screen and (min-width: 767px){
  .theme-m.challenge-text {
    padding: 15px 30px;
  }
}

@media all{
  .msB {
    margin-bottom: 10px;
  }
}

.msB {
  margin-bottom: 10px;
}

@media all{
  p {
    border:  0;
    font:  inherit;
    font-size:  100%;
    margin:  0;
    outline:  0;
    padding:  0;
    vertical-align:  baseline;
    font-family: "Whitney SSm A","Whitney SSm B","Avenir","Segoe UI","Ubuntu","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: normal;
  }
}

p {
  border:  0;
  font:  inherit;
  font-size:  100%;
  margin:  0;
  outline:  0;
  padding:  0;
  vertical-align:  baseline;
  font-family: "Whitney SSm A","Whitney SSm B","Avenir","Segoe UI","Ubuntu","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-weight: normal;
}

p  {
  font-weight:   normal;
  font-family:   Arial,Helvetica,sans-serif;
  font-family:   var(--font-family-text);
  color:  var(--color-text-dark-faded, #576871);
  font-size:  14px;
  line-height:  2;
  margin-top: 5px;
  margin-bottom: 0;
}

@media all{
  svg:not(:root) {
    overflow: hidden;
  }
}

svg:not(:root) {
  overflow: hidden;
}

svg  {
  color: var(--color-text-dark, #0e141e);
}

@media all{
  .hackdown-content p  {
    margin-top: 12px;
  }
}

.hackdown-content p  {
  margin-top: 12px;
}

@media all{
  ul {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }
}

ul {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
}

@media all{
  .hackdown-content ul  {
    margin-left: 20px;
  }
}

.hackdown-content ul  {
  margin-left: 20px;
}

@media all{
  strong {
    border:   0;
    font:   inherit;
    font-size:   100%;
    margin:   0;
    outline:   0;
    padding:   0;
    vertical-align:   baseline;
    font-weight:  bolder;
  }
}

strong {
  border:   0;
  font:   inherit;
  font-size:   100%;
  margin:   0;
  outline:   0;
  padding:   0;
  vertical-align:   baseline;
  font-weight:  bolder;
}

strong  {
  color: var(--color-text-dark, #0e141e);
}

@media all{
  pre {
    border:  0;
    font:  inherit;
    font-size:  1em;
    margin:  0;
    outline:  0;
    padding:  0;
    vertical-align:  baseline;
    font-family: monospace,monospace;
  }
}

pre {
  border:  0;
  font:  inherit;
  font-size:  1em;
  margin:  0;
  outline:  0;
  padding:  0;
  vertical-align:  baseline;
  font-family: monospace,monospace;
}

@media all{
  .hackdown-content pre  {
    margin-top:  12px;
    background: #f4faff;
    border: 0;
    border-radius: 2px;
  }
}

.hackdown-content pre  {
  margin-top:  12px;
  background: #f4faff;
  border: 0;
  border-radius: 2px;
}

pre  {
  font-weight:  normal;
  font-family:  monaco,Courier,monospace;
  font-family:  var(--font-family-input);
  overflow-x: auto;
  padding: 20px;
  border: none;
  background-color: var(--color-shade-light);
  color: var(--color-text-dark, #0e141e);
  font-size: 14px;
  line-height: 20px;
}

@media all{
  em {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }
}

em {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
}

@media all{
  span {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }
}

span {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
}

.MathJax_SVG {
  display: inline;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 100%;
  font-size-adjust: none;
  text-indent: 0;
  text-align: left;
  text-transform: none;
  letter-spacing: normal;
  word-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  float: none;
  direction: ltr;
  max-width: none;
  max-height: none;
  min-width: 0;
  min-height: 0;
  border: 0;
  padding: 0;
  margin: 0;
}

@media all{
  li {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }
}

li {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
}

li  {
  color: var(--color-text-dark-faded, #576871);
  font-size: 14px;
  line-height: 2;
}

@media all{
  code {
    border:  0;
    font:  inherit;
    font-size:  1em;
    margin:  0;
    outline:  0;
    padding:  0;
    vertical-align:  baseline;
    font-family: monospace,monospace;
  }
}

code {
  border:  0;
  font:  inherit;
  font-size:  1em;
  margin:  0;
  outline:  0;
  padding:  0;
  vertical-align:  baseline;
  font-family: monospace,monospace;
}

@media all{
  .hackdown-content code  {
    color: #454c5f;
  }
}

.hackdown-content code  {
  color: #454c5f;
}

code  {
  font-weight:  normal;
  font-family:  monaco,Courier,monospace;
  font-family:  var(--font-family-input);
  overflow-x: auto;
  background: var(--color-bg);
  color: var(--color-text-medium-dark, #39424e);
  word-spacing: -2px;
}

.MathJax_SVG *  {
  transition: none;
  -webkit-transition: none;
  -moz-transition: none;
  -ms-transition: none;
  -o-transition: none;
}


/* These were inline style tags. Uses id+class to override almost everything */
#MathJax-Element-1-Frame.style-E9NAX {
  font-size: 100%;
  display: inline-block;
}
#MathJax-Element-2-Frame.style-l6mpB {
  font-size: 100%;
  display: inline-block;
}
#MathJax-Element-3-Frame.style-MTeLv {
  font-size: 100%;
  display: inline-block;
}
#MathJax-Element-4-Frame.style-yBdXZ {
  font-size: 100%;
  display: inline-block;
}
#MathJax-Element-5-Frame.style-RrSAb {
  font-size: 100%;
  display: inline-block;
}
#MathJax-Element-1-Frame.style-QQrU7 {
  font-size: 100%;
  display: inline-block;
}
#MathJax-Element-1-Frame.style-T56o8 {
  font-size: 100%;
  display: inline-block;
}

</style>
