const interstellarCanvas = (() => {

    const possibleXDirections = [4, -3, 2, -1], possibleTimers = [1900, 16e3, 1e4];
    let funcCallCount = 0;
    let starFieldContext, shootingStarContext;

    const drawStar = (_st, _end, _rad = 1) => {
        starFieldContext.beginPath();
        starFieldContext.arc(_st, _end, _rad, 0, 2 * Math.PI);
        starFieldContext.fillStyle = "#bbbbbb";
        starFieldContext.fill();
        starFieldContext.strokeStyle = "#bbbbbb";
        starFieldContext.stroke();
    };

    const getShootingStarCaller = (_x, _y, ssfW, ssfH, o = [255, 255, 255]) => {
        let starLineWidth = .1, starLineFrameCount = 1;
        shootingStarContext.strokeStyle = `rgba(${o[0]},${o[1]},${o[2]},${starLineWidth})`;
        let lineWidthToDecr = false;
        const _direction = possibleXDirections[++funcCallCount % possibleXDirections.length];
        let _draw = (onDone) => {
            if (starLineFrameCount > 110) {
                setTimeout(() => onDone(_x, _y), 1200);
                return;
            }
            shootingStarContext.beginPath();
            shootingStarContext.moveTo(_x, _y);
            shootingStarContext.lineWidth = starLineWidth;
            starLineFrameCount++;
            starLineWidth >= 1 && (lineWidthToDecr = true);
            lineWidthToDecr ? starLineWidth -= .07 : starLineWidth += .01;
            _x += _direction;
            _y += 2.5;
            shootingStarContext.strokeStyle = `rgba(${o[0]},${o[1]},${o[2]},${starLineWidth})`;
            shootingStarContext.lineTo(_x, _y);
            shootingStarContext.stroke();
            requestAnimationFrame(() => _draw(onDone));
        };
        return _draw;
    };

    const fadeStar = (firstX, firstY, _x, _y, ssfW, ssfH) => {
        let i = 0;
        const a = setInterval(() => {
            if (i > 1) {
                shootingStarContext.clearRect(0, 0, ssfW, ssfH);
                clearInterval(a);
            } else {
                i += .1;
                shootingStarContext.beginPath();
                shootingStarContext.strokeStyle = `rgba(35, 36, 35, ${i})`;
                shootingStarContext.lineWidth = 1;
                shootingStarContext.fill();
                shootingStarContext.moveTo(firstX, firstY);
                shootingStarContext.lineTo(_x, _y);
                shootingStarContext.stroke();
            }
        }, 100);
    };

    return {
        init: () => {
            let sfC = document.getElementById("starFieldCanvas"),
                ssC = document.getElementById("shootingStarCanvas");
            sfC.style.width = "100%", sfC.style.height = "100%", sfC.width = sfC.offsetWidth, sfC.height = sfC.offsetHeight;
            ssC.style.width = "100%", ssC.style.height = "100%", ssC.width = ssC.offsetWidth, ssC.height = ssC.offsetHeight;
            starFieldContext = sfC.getContext("2d");
            shootingStarContext = ssC.getContext("2d");
            return {sfCW: sfC.width, sfCH: sfC.height};
        },
        paint: (starFieldWidth, starFieldHeight) => {
            let starCount = 0, totalStars = 270;
            const _i = setInterval((() => {
                starCount >= totalStars && clearInterval(_i);
                drawStar(Math.random() * starFieldWidth, Math.random() * starFieldHeight, Math.random() / 1.7);
                starCount++;
            }), 10);
            let _i2;

            const drawShootingStarHelper = () => {
                let firstX = Math.random() * starFieldWidth, firstY = Math.random() * starFieldHeight / 2.3;
                const drawShootingStar = getShootingStarCaller(firstX, firstY, starFieldWidth, starFieldHeight);
                requestAnimationFrame(() => drawShootingStar((finalX, finalY) => {
                    fadeStar(firstX, firstY, finalX, finalY, starFieldWidth, starFieldHeight)
                }));
                clearInterval(_i2);
                _i2 = setInterval(drawShootingStarHelper, possibleTimers[Math.floor(possibleTimers.length * Math.random())])
            };

            setTimeout(drawShootingStarHelper, 5e3);
        }
    };
})();

