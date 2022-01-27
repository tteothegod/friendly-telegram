window.snake.more_menu = function() {
  window.snake_scheme_epic_cool = window.snake_scheme_epic_cool || { light_squares: '#AAD751', dark_squares:  '#A2D149' };
  window.snake_scheme_epic_cool = window.snake_scheme_epic_cool || { light_squares: '#AAD751', dark_squares:  '#A2D149' };
  
  
  // micro
  let img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Micro.png?raw=true';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  // tiny
  img = new Image;
  img.src = 'data:image/jpeg;base64,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';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  // between small & standard
  img = new Image;
  img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAABYElEQVRoQ+2Y2w7DIAxD1///6E2VRsUYJXZuFIm9AuHEMSzleC38OxZmf214oXrvZtxNMEugAtWL0QLX/JY9f3SwBGLgz31G81VHLwq+B1NXw7LvFdsSRKOkZs1tVTY8aNilbeNqmVOwTNssC+9umUzl3VXf8OC5WVb5EL9n2CYMPBPeciVPaw9CvF6ysSiCgIV9iFhtg7Q0oR8lFuUR+HrOKBGVEzLh3ROZBS99aUGWfhI8a0NTS0xv5r1ghvLIFQvl+SR4OikGvhec3XDU67CxKM+3wTVNF/JQBQsKT6xevMo1RislvJrR8Rj4E7r3L8nEmKZ8D54Br9ePHmfhmPDE792l8Xm59qS1qbbRJn63LhQ+w+9QT6NpQe9aWrQCroeVybL1q+TfUdfoclg18PXGjEelZJlYlzBoyaFGaTBJgpPGu6E3PFAWSVlp/NHKA/n/T8myjQpOWrThJYWixj+UTlgwJgIXFAAAAABJRU5ErkJggg==';
  img.width = img.height = 47;
  document.querySelector('#size').appendChild(img);

  // super big
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Super%20Big.png?raw=true';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  // ultra big
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Too%20Big.png?raw=true';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  // humongous
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Humongous.png?raw=true';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  // too big
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Too%20Big.png?raw=true';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  // too big
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Way%20Too%20Big.png?raw=true';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);


  /*--SPEEDS--*/

  // blursed
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/blursed.png?raw=true';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

 

  // lightning
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/lightning.png?raw=true';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // snail
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Snail.png?raw=true';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // fast-slow 2: faster and slower
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Faster%20And%20Slower.png?raw=true';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // desert bus
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Desert%20Bus.png?raw=true';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // bullet
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Bullet.png?raw=true';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // hyperbullet (red)
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Red%20bullet.png?raw=true';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // ultrabullet (purple)
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Purple%20bullet.png?raw=true';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // yeetbullet (blue)
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Blue%20Bullet.png?raw=true';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // eternity
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/eternal.png?raw=true';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // ultradeath
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/ultradeath.png?raw=true';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);


  /*--COUNTS--*/

  // 13
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/13.png?raw=true';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  // 25
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/25.png?raw=true';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  // 40 :rolling_eyes:
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/40.png?raw=true';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  // 87
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/87.png?raw=true';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  // apple bomb
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Apple%20Bomb.png?raw=true';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  // apple nuke
  img = new Image;
  img.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/nuke.png?raw=true';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  /* making do things */
  const scripts = document.getElementsByTagName('script');
  for (let script of scripts) {
    if(script.src === '' || script.src.includes('apis.google.com'))continue;
    const req = new XMLHttpRequest();
    req.open('GET', script.src);
    req.onload = function () {
      const code = this.responseText;
      if (code.indexOf('trophy') === -1)
        return;

      const functio = code.match(
        /[a-zA-Z0-9_$]{1,6}\.prototype\.resetState=function\(a\){a=void 0===a\?!0:a;[^]*?this,!1\)}/
      )[0];
      const thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj = functio.match(
        /0!==this\.[a-zA-Z0-9_$]{1,6}/
      )[0].replace('0!==', '');
      const pafihwotyhopyplacetheiopafsjafijplesllllllll = functio.match(
        /this\.[a-zA-Z0-9_$]{1,6}\.push\([a-zA-Z0-9_$]{1,6}\(this,/
      )[0];
      const inevilmodesf = code.match(
        /[a-zA-Z0-9_$]{1,6}=function\(a\){return [a-zA-Z0-9_$]{1,6}\(a,2\)\|\|[a-zA-Z0-9_$]{1,6}\(a,8\)\|\|[a-zA-Z0-9_$]{1,6}\(a,9\)\|\|[a-zA-Z0-9_$]{1,6}\(a,10\)}/
      )[0].match(/[a-zA-Z0-9_$]{1,6}/)[0];
      console.log(inevilmodesf);

      const dothethingportalstyle = functio.match(
        /for\(b=Math\.floor\(42\/\n?this\.[a-zA-Z0-9_$]{1,6}\.length\),[^]*?\);/
      )[0];
      console.log(dothethingportalstyle);
      const modecheck = code.match(
        /[a-zA-Z0-9_$]{1,6}=function\(a,b\){return 13===a[^}]*?===b}/
      )[0].match(/[a-zA-Z0-9_$]{1,6}/)[0];

      eval(
        functio.replace(
          `if(d=${inevilmodesf}(this))`,
          `
          if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} > 2) {
            if(!(${inevilmodesf}(this))) {
              if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 3) {
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, -2));
              } else if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 4) {
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, -2));
              } else if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 5) {
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, -3));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, -3));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, -3));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, -3));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, -3));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 2, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 2, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 2, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 2, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 2, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 3));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, 3));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 3));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, 3));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 3));
              } else if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 6) {
                for (i=-7;i<3;i++) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i, -4));
                }
                for (i=-7;i<3;i++) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i, -3));
                }
                for (i=-7;i<3;i++) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i, -2));
                }
                for (i=-7;i<3;i++) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i, -1));
                }
                for (i=-3;i<3;i++) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i, 0));
                }
                for (i=-7;i<3;i++) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i, 1));
                }
                for (i=-7;i<3;i++) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i, 2));
                }
                for (i=-7;i<3;i++) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i, 3));
                }
                for (i=-7;i<3;i++) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i, 4));
                }
              } else if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 7) {
                for (i=0;i<200;i++) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 0));
                }
              } else if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 8) {
                  for (i=0;i<10000;i++) {
                    ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 0));
                  }
              } else
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 100000, 1));

            } else {
              if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} < 7)
                for(
                  let i = 0; i < (
                    ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 3
                      ? 13
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 4
                      ? 25
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 5
                      ? 40
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 6
                      ? 100
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 7
                      ? 0
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 8
                      ? 0
                    : 0
                  ); i++
                ) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i - ~~((
                    ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 3
                      ? 13
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 4
                      ? 25
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 5
                      ? 40
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 6
                      ? 100
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 7
                      ? 0
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 8
                      ? 0
                    : 0
                  ) / 1.25), -4));
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i- ~~((
                    ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 3
                      ? 13
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 4
                      ? 25
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 5
                      ? 40
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 6
                      ? 100
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 7
                      ? 0
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 8
                      ? 0
                    : 0
                  ) / 1.25), 4));
                  
                }
              else {
                for(let i = 0; i < (
                  ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 7
                    ? 200
                  : 20000
                ); i++)
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, 0));
              }
            }

            if(${modecheck}(this,2)) { ${dothethingportalstyle} }
          } else if(d=${inevilmodesf}(this))
          `
        ).replace(
          'this,!1)}',
          `this,!1);
          this.gW[-1] = this.gW[0];
          }`
        )
      );

      const limesarebetter = code.match(
        /[a-zA-Z0-9_$]{1,6}=function\(a\){switch\(a\.[a-zA-Z0-9_$]{1,6}\){case 1:return\.66[^}]*?1}}/
      )[0];
      const limename = limesarebetter.match(/[a-zA-Z0-9_$]{1,6}/)[0];
      const limespeed = limesarebetter.match(/switch\(a\.[a-zA-Z0-9_$]{1,6}\)/)[0].replace('switch(a.', 'this.').replace(')', '');
      const a = code.match(new RegExp(
        `this\\.[a-zA-Z0-9_$]{1,6}=[a-zA-Z0-9_$]{1,6}\\*${limename}\\(this\\);`
      ))[0];
      eval(
        limesarebetter.replace(
          '1.33;',
          `1.33;case 3:return _soup;case 4:return 0.45;case 5:return 1.85;case 6:return _soep;case 7:return 18.5;case 8:return 0.35;case 9:return 0.25;case 10:return 0.15;case 11:return 0.05;case 12:return 26640;case 13:return 0.00001;`
        )
      );
      
      const soup = code.match(
        /[a-zA-Z0-9_$]{1,6}\.prototype\.update=function\(\){[^]*?this\)}}}}/
      )[0];
      const f = soup.match(
        /:this\.[a-zA-Z0-9_$]{1,6}\+=\n?1,this\.[a-zA-Z0-9_$]{1,6}\+\+,/
      )[0];
      eval('var _soup = 1.33;');
      eval('var _soep = 1.85;');
      eval(
        soup.replace(
          f,
          f + `_soup = Math.random() < .5 ? .66 : 1.33, _soep = Math.random() < .5 ? .45 : 1.85, ${limespeed} === 3 && (${a.replace(limename + '(this);', '_soup')}), ${limespeed} === 6 && (${a.replace(limename + '(this);', '_soep')}),`
        )
      );

      const fishes = code.match(
        /[a-zA-Z0-9_$]{1,6}=function\(a\){[^}]*?h6Ousc[^]*?\(a\)}/
      )[0];
      const words = fishes.match(
        /0!==a\.[a-zA-Z0-9_$]{1,6}/
      )[0].replace('0!==', '');


      eval(
        fishes.replace(
          '(a)}',
          `(a)
            if(${words} < 3) {
              __b = document.body.getElementsByClassName('UJhXPd wSwbef EWyEF')[0];
              [...__b.children].forEach((e, i) => i > 1 && (__b.removeChild(__b.children[i])));
            }
            if(${words} === 3) {
              __b = document.body.getElementsByClassName('UJhXPd wSwbef EWyEF')[0];
              [...__b.children].forEach((e, i) => i > 1 && (__b.removeChild(__b.children[i])));
              __c = new Image;
              __c.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/13.png?raw=true';
              __c.width = __c.height = 47;
              __c.style = 'position:fixed;top: 10px;';
              __b.appendChild(__c);
            }
            if(${words} === 4) {
              __b = document.body.getElementsByClassName('UJhXPd wSwbef EWyEF')[0];
              [...__b.children].forEach((e, i) => i > 1 && (__b.removeChild(__b.children[i])));
              __c = new Image;
              __c.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/25.png?raw=true';
              __c.width = __c.height = 47;
              __c.style = 'position:fixed;top: 10px;';
              __b.appendChild(__c);
            }
            if(${words} === 5) {
              __b = document.body.getElementsByClassName('UJhXPd wSwbef EWyEF')[0];
              [...__b.children].forEach((e, i) => i > 1 && (__b.removeChild(__b.children[i])));
              __c = new Image;
              __c.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/40.png?raw=true';
              __c.width = __c.height = 47;
              __c.style = 'position:fixed;top: 10px;';
              __b.appendChild(__c);
            }
            if(${words} === 6) {
              __b = document.body.getElementsByClassName('UJhXPd wSwbef EWyEF')[0];
              [...__b.children].forEach((e, i) => i > 1 && (__b.removeChild(__b.children[i])));
              __c = new Image;
              __c.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/87.png?raw=true';
              __c.width = __c.height = 47;
              __c.style = 'position:fixed;top: 10px;';
              __b.appendChild(__c);
            }
            if(${words} === 7) {
              __b = document.body.getElementsByClassName('UJhXPd wSwbef EWyEF')[0];
              [...__b.children].forEach((e, i) => i > 1 && (__b.removeChild(__b.children[i])));
              __c = new Image;
              __c.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Apple%20Bomb.png?raw=true';
              __c.width = __c.height = 47;
              __c.style = 'position:fixed;top: 10px;';
              __b.appendChild(__c);
            }
            if(${words} === 8) { 
              __b = document.body.getElementsByClassName('UJhXPd wSwbef EWyEF')[0];
              [...__b.children].forEach((e, i) => i > 1 && (__b.removeChild(__b.children[i])));
              __c = new Image;
              __c.src = 'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/nuke.png?raw=true';
              __c.width = __c.height = 47;
              __c.style = 'position:fixed;top: 10px;';
              __b.appendChild(__c);
            }
          }`
        )
      );

      const meat = code.match(
        /[a-zA-Z0-9_$]{1,6}=function\(a\){a\.[a-zA-Z0-9_$]{1,6}\.clearRect\(0,0,[^]*?0\),0,b\)}/
      )[0];
      const ul = meat.match(
        /var b=a\.[a-zA-Z0-9_$]{1,6}\.width/
      )[0].replace('var b=', '');
      const mDb = meat.match(
        /a\.[a-zA-Z0-9_$]{1,6}\.render/g
      )[1].replace('.render', '');
      const Hw = meat.match(
        /1===a\.[a-zA-Z0-9_$]{1,6}/
      )[0].replace('1===', '');
      eval(
        meat.replace(
          '&&',
          '?'
        ).replace(
          'd));',
          `d)) : ${Hw} !== 0 && (${mDb}.context.drawImage(document.querySelector('#speed').children[${Hw}], ${ul} - 80, c.y - 80, 80, 80));`
        )
      );
      

      // eval(
      //   code.match(
      //     /[a-zA-Z0-9_$]{1,6}=function\(a\){switch\(a\.[a-zA-Z0-9_$]{1,6}\){case 2:return 512;[^]*?256}}/
      //   )[0].replace(
      //     '96;',
      //     `96;case 3:return 25;case 4:return 48;case 5:return 1200;case 6:return 3500;case 7:return 10000;case 8:return 25000;case 9:return 100000;`
      //   )
      // );

      const c = code.match(
        /[a-zA-Z0-9_$]{1,8}\.prototype\.[a-zA-Z0-9_$]{1,8}=function\(\){var a=this,b=[^]*?canvas[^]*?\);return b\.promise}/
      )[0];
      const wa = c.match(
        /a\.[a-zA-Z0-9_$]{1,8}\/128/
      )[0].replace('/128', '');
      const size = code.match(
        /1===this\.[a-zA-Z0-9_$]{1,8}\|\|\(e\+=1\)/
      )[0].replace('1===this.', '').replace('||(e+=1)', '');
      console.log(size);
      
      // console.log(lightSquares, darkSquares);

      eval(
        c.replaceAll(
          '#AAD751',
          window.snake_scheme_epic_cool.light_squares
        ).replaceAll(
          '#a2d149',
          window.snake_scheme_epic_cool.dark_squares
        ).replace(
          `Math.floor(c/${wa}),Math.floor(d/${wa})));`,
          `
          window.bwidth  = a.${size} === 3 ? 5 : a.${size} === 4 ? 7 : a.${size} === 5 ? 12 : a.${size} === 6 ? 37 : a.${size} === 7 ? 64 : a.${size} === 8 ? 105 : a.${size} === 9 ? 168 : a.${size} === 10 ? 600 : Math.floor(c/${wa}),
          window.bheight = a.${size} === 3 ? 4 : a.${size} === 4 ? 6 : a.${size} === 5 ? 11 : a.${size} === 6 ? 32 : a.${size} === 7 ? 56 : a.${size} === 8 ? 92  : a.${size} === 9 ? 147 : a.${size} === 10 ? 530 : Math.floor(d/${wa})));

          let squareSize = 600 / (window.bwidth);
          if(squareSize * window.bheight > 530)
            squareSize = 530 / window.bheight;
          squareSize = squareSize * .98;
          if(squareSize > 1)squareSize = ~~squareSize;
          a.${size} >= 3 && (${wa} = squareSize);
          console.log(a.${size});`
        )
      );
    };
    req.send();
  }
};
